import { NextResponse } from "next/server";

import components from "./components.json";

export const runtime = "edge";

export async function GET() {
  return NextResponse.json(components);
}
