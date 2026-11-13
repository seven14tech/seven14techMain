import nodemailer from "nodemailer";
import { site } from "@/lib/site";

// nodemailer needs Node APIs (sockets), not the edge runtime.
export const runtime = "nodejs";

/*
 * Demo / contact form → email to support.
 *
 * Configure with environment variables (Vercel: Project Settings → Environment
 * Variables; Amplify: App settings → Environment variables, see amplify.yml):
 *   SMTP_HOST   e.g. smtp.gmail.com (Google Workspace) or email-smtp.ap-south-1.amazonaws.com (SES)
 *   SMTP_PORT   465 (SSL) or 587 (STARTTLS). Defaults to 465.
 *   SMTP_USER   SMTP login, e.g. support@seven14tech.com
 *   SMTP_PASS   SMTP password / Google app password / SES SMTP password
 *   MAIL_FROM   optional sender, defaults to SMTP_USER
 *   MAIL_TO     optional recipient, defaults to site.email (support@seven14tech.com)
 */

const LIMITS: Record<string, number> = {
  name: 120,
  email: 200,
  company: 160,
  phone: 40,
  service: 60,
  type: 60,
  branches: 20,
  message: 4000,
};

const LABELS: Record<string, string> = {
  service: "Interested in",
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company / institute",
  type: "Type of organisation",
  branches: "Branches or centres",
  message: "Message",
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never fill the hidden "website" field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const data: Record<string, string> = {};
  for (const [key, max] of Object.entries(LIMITS)) {
    const v = body[key];
    data[key] = typeof v === "string" ? v.trim().slice(0, max) : "";
  }

  if (!data.name || !data.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ ok: false, error: "Please add your name, company and a valid email." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[demo] SMTP is not configured; set SMTP_HOST, SMTP_USER and SMTP_PASS.");
    return Response.json(
      { ok: false, error: `Our form is offline right now. Please email us at ${site.email}.` },
      { status: 503 },
    );
  }

  const port = Number(SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows = Object.keys(LABELS)
    .filter((k) => data[k])
    .map((k) => [LABELS[k], data[k]] as const);

  const text = rows.map(([l, v]) => `${l}: ${v}`).join("\n");
  const html = `<h2 style="font-family:Georgia,serif;font-weight:400">New demo request</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
${rows
  .map(
    ([l, v]) =>
      `<tr><td style="color:#6E7687;vertical-align:top;border-bottom:1px solid #eee">${escapeHtml(l)}</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
  )
  .join("\n")}
</table>`;

  try {
    await transporter.sendMail({
      from: `"${site.name} website" <${MAIL_FROM || SMTP_USER}>`,
      to: MAIL_TO || site.email,
      replyTo: `"${data.name.replace(/"/g, "")}" <${data.email}>`,
      subject: `Demo request: ${data.service || "general"} · ${data.company}`,
      text,
      html,
    });
  } catch (err) {
    console.error("[demo] sending failed", err);
    return Response.json(
      { ok: false, error: `We couldn't send that just now. Please email us at ${site.email}.` },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
