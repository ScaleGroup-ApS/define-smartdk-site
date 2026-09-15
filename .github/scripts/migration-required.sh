#!/usr/bin/env bash
set -euo pipefail

before_sha="${1:-}"
head_sha="${2:-}"
zero_sha="0000000000000000000000000000000000000000"

# Run migrations when the comparison cannot be trusted. Skipping is safe only
# when both commits exist and Git proves that all migration inputs are unchanged.
if [[ -z "$before_sha" || -z "$head_sha" || "$before_sha" == "$zero_sha" ]] \
  || ! git cat-file -e "${before_sha}^{commit}" 2>/dev/null \
  || ! git cat-file -e "${head_sha}^{commit}" 2>/dev/null; then
  echo "Unable to compare deployment commits; requiring migration." >&2
  echo "true"
  exit 0
fi

set +e
git diff --quiet "$before_sha" "$head_sha" -- \
  drizzle/ \
  app/db/ \
  scripts/migrate.mjs
diff_status=$?
set -e

case "$diff_status" in
  0) echo "false" ;;
  1) echo "true" ;;
  *)
    echo "Git diff failed; requiring migration." >&2
    echo "true"
    ;;
esac
