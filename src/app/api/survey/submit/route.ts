import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FLOSSLY_ENDPOINT = "https://app.flossly.ai/api/form/submit";
const FLOSSLY_TOKEN = "cb50d581936fc0ad8750f924ac3fd3f6470d815e9fec90ba7c1cb550ea6cd573";

export async function POST(req: Request) {
  const body = await req.json() as {
    name: string;
    email: string;
    phone: string;
    business: string;
    location: string;
    surveyUrl: string;
    resultUrl: string;
    consent: boolean;
    reference: string;
  };

  const { name, email, business, location, surveyUrl, resultUrl, consent, reference } = body;

  // Normalise to E.164 — client already prepends dial code and strips leading 0
  const raw = body.phone.trim();
  const phone = raw.startsWith("+") ? raw : `+${raw.replace(/[^0-9]/g, "")}`;

  const comments = [
    `Business: ${business}`,
    `Location: ${location}`,
    `Reference: ${reference}`,
    "",
    `Survey Link - ${surveyUrl}`,
    `Result Link - ${resultUrl}`,
  ].join("\n");

  // Call Flossly webhook
  let flosslyOk = false;
  try {
    const resp = await fetch(FLOSSLY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: FLOSSLY_TOKEN,
        leadSource: "Survey Form",
        data: {
          name,
          email,
          telephone: phone,
          comments,
        },
      }),
    });
    flosslyOk = resp.ok;
    if (!resp.ok) {
      const text = await resp.text();
      console.error("[flossly webhook]", resp.status, text);
    }
  } catch (err) {
    console.error("[flossly webhook]", err);
  }

  // Send email if consent given
  let emailSent = false;
  if (consent && process.env.SMTP_HOST && process.env.SMTP_USER) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: email,
        subject: `Your CQC Eligibility Decision Notice — ${reference}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
            <div style="background:#530172;padding:24px 32px;border-radius:12px 12px 0 0">
              <h1 style="color:#fff;margin:0;font-size:22px">CQC MediSolutions</h1>
            </div>
            <div style="background:#f8f3fc;padding:32px;border-radius:0 0 12px 12px">
              <p style="margin:0 0 8px;font-size:14px;color:#530172;font-weight:700;text-transform:uppercase;letter-spacing:.05em">
                Eligibility Decision Notice
              </p>
              <p style="margin:0 0 24px;font-size:13px;color:#666">Reference: ${reference}</p>
              <p style="margin:0 0 16px">Hi ${name},</p>
              <p style="margin:0 0 16px;line-height:1.6">
                Your CQC eligibility check has been completed. You can download your full
                decision notice and gap list using the link below.
              </p>
              <a href="${resultUrl}"
                style="display:inline-block;background:#00cb97;color:#fff;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:10px;margin:8px 0 24px">
                Download my decision notice
              </a>
              <p style="margin:0 0 8px;font-size:13px;color:#666;line-height:1.6">
                A consultant will follow up to discuss your results. If you have any questions
                in the meantime, reply to this email or call us on
                <strong>0800 689 1061</strong>.
              </p>
              <hr style="border:none;border-top:1px solid #ddd;margin:24px 0">
              <p style="margin:0;font-size:11px;color:#999;line-height:1.5">
                This check is an indicative guide based on your own answers. It is not a decision
                by the Care Quality Commission and it is not legal advice.
                Registration decisions rest with CQC alone.
              </p>
            </div>
          </div>
        `,
      });
      emailSent = true;
    } catch (err) {
      console.error("[nodemailer]", err);
    }
  }

  return NextResponse.json({ flosslyOk, emailSent });
}
