import { llmsTxt, textResponse } from "../llms.ts";

export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsTxt());
}
