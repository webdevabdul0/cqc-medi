import { NextResponse } from "next/server";

const FLOSSLY_ENDPOINT = "https://app.flossly.ai/api/form/submit";
const FLOSSLY_TOKEN    = "cb50d581936fc0ad8750f924ac3fd3f6470d815e9fec90ba7c1cb550ea6cd573";

export async function POST(req: Request) {
  const { name, email, phone } = await req.json() as {
    name: string; email: string; phone: string;
  };

  const raw  = (phone ?? "").trim();
  const e164 = raw.startsWith("+") ? raw : `+${raw.replace(/\D/g, "")}`;

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
