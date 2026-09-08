import { NextResponse } from "next/server";

const FLOSSLY_ENDPOINT = "https://app.flossly.ai/api/form/submit";
const FLOSSLY_TOKEN    = "b833d36f2c64aa922c69f7629c7b58ea308a45674d19a42b39c35489d38e5d14";

export async function POST(req: Request) {
  const { name, email, phone } = await req.json() as {
    name: string; email: string; phone: string;
  };

  const raw  = (phone ?? "").trim();
  const e164 = raw.startsWith("+") ? raw : `+${raw.replace(/\D/g, "")}`;
  console.log("[popup/submit] received phone:", JSON.stringify(raw), "→ e164:", JSON.stringify(e164));

  try {
    const resp = await fetch(FLOSSLY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token:      FLOSSLY_TOKEN,
        leadSource: "£99 Start Popup",
        data: {
          name,
          email,
          telephone: e164,
        },
      }),
    });
    if (!resp.ok) {
      const text = await resp.text();
      console.error("[popup/submit flossly]", resp.status, text);
    }
  } catch (err) {
    console.error("[popup/submit]", err);
  }

  // Always return ok — webhook failure must not block the user reaching GoCardless
  return NextResponse.json({ ok: true });
}
