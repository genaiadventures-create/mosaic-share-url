import { atomFeed, atomResponse } from "../../feed";

export const dynamic = "force-static";

// Marketing-host requests to /feed.xml are rewritten here. The bare /feed.xml route does not exist, so other hosts get a 404.
export function GET() {
  return atomResponse(atomFeed());
}
