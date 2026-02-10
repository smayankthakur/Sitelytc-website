import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  message: string;
};

function isValidEmail(email: string): boolean {
  // Lightweight check; SMTP provider will validate further.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = (payload?.name || "").trim();
  const email = (payload?.email || "").trim();
  const phone = (payload?.phone || "").trim();
  const projectType = (payload?.projectType || "").trim();
  const budget = (payload?.budget || "").trim();
  const message = (payload?.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields (name, email, message)" },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const to = process.env.MAIL_TO || "sitelytc@gmail.com";
  const from = process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@sitelytc.com";

  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";

  if (!host || !port || !user || !pass) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (and optionally SMTP_SECURE, MAIL_FROM, MAIL_TO).",
      },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const subject = `[SITELYTC] New contact form: ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : `Phone:`,
    projectType ? `Project Type: ${projectType}` : `Project Type:`,
    budget ? `Budget: ${budget}` : `Budget:`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

