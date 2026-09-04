import { NextResponse } from "next/server";
import { getPresignedUploadUrl } from "@/lib/s3";

export async function POST() {
  try {
    const [survey, result] = await Promise.all([
      getPresignedUploadUrl("survey", "pdf", "application/pdf"),
      getPresignedUploadUrl("survey", "pdf", "application/pdf"),
    ]);
    return NextResponse.json({ survey, result });
  } catch (err) {
    console.error("[upload-urls]", err);
    return NextResponse.json({ error: "Failed to generate upload URLs" }, { status: 500 });
  }
}
