import { NextResponse } from "next/server";

import files from "./init.json";

export const runtime = "edge";

export async function GET() {
  return NextResponse.json(files);
}
