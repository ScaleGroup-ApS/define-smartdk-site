import { redirect } from "react-router";
import type { Route } from "./+types/forside";

export function loader(_: Route.LoaderArgs) {
  return redirect("/", { status: 301 });
}
