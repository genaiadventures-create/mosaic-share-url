import { llmsFullTxt, textResponse } from "../llms.ts";

export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsFullTxt());
}
