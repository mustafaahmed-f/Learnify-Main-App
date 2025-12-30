import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Hello from MCP !!",
    timestamp: new Date().toISOString(),
    tips: [
      "MCP lets AI access your app.",
      "You can create multiple endpoints",
      "AI can call these endpoints automatically.",
    ],
  };

  return NextResponse.json(data);
}
