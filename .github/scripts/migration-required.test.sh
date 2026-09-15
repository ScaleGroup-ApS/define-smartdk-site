#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
detector="${script_dir}/migration-required.sh"
test_repo="$(mktemp -d)"
trap 'rm -rf "$test_repo"' EXIT

git -C "$test_repo" init --quiet
git -C "$test_repo" config user.name "Migration path test"
git -C "$test_repo" config user.email "migration-path-test@example.invalid"

commit_file() {
  local path="$1"
  mkdir -p "$test_repo/$(dirname "$path")"
  printf '%s\n' "$path" >> "$test_repo/$path"
  git -C "$test_repo" add "$path"
  git -C "$test_repo" commit --quiet -m "change $path"
  git -C "$test_repo" rev-parse HEAD
}

assert_result() {
  local expected="$1"
  local before_sha="$2"
  local head_sha="$3"
  local label="$4"
  local actual
  actual="$(cd "$test_repo" && "$detector" "$before_sha" "$head_sha")"
  if [[ "$actual" != "$expected" ]]; then
    echo "${label}: expected ${expected}, got ${actual}" >&2
    exit 1
  fi
}

initial_sha="$(commit_file README.md)"
unrelated_sha="$(commit_file app/routes/contact.tsx)"
assert_result false "$initial_sha" "$unrelated_sha" "unrelated application change"

drizzle_sha="$(commit_file drizzle/migrations/0001_example.sql)"
assert_result true "$unrelated_sha" "$drizzle_sha" "drizzle migration"

db_sha="$(commit_file app/db/schema.ts)"
assert_result true "$drizzle_sha" "$db_sha" "database source"

other_script_sha="$(commit_file scripts/format.mjs)"
assert_result false "$db_sha" "$other_script_sha" "unrelated script"

migrate_script_sha="$(commit_file scripts/migrate.mjs)"
assert_result true "$other_script_sha" "$migrate_script_sha" "migration runner"
assert_result true "$initial_sha" "$migrate_script_sha" "multi-commit push containing migration input"

rm "$test_repo/drizzle/migrations/0001_example.sql"
git -C "$test_repo" add drizzle/migrations/0001_example.sql
git -C "$test_repo" commit --quiet -m "remove drizzle migration"
deleted_migration_sha="$(git -C "$test_repo" rev-parse HEAD)"
assert_result true "$migrate_script_sha" "$deleted_migration_sha" "deleted migration"

assert_result true "0000000000000000000000000000000000000000" "$migrate_script_sha" "unknown base"

echo "Migration path detection tests passed."
