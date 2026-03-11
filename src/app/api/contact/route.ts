import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { resend } from "@/lib/resend";

interface ContactRequest {
  name: string;
  organization: string;
  email: string;
  inquiryType: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildConfirmationEmail(name: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.6; max-width: 560px; margin: 0 auto; padding: 40px 20px;">
  <p>Hi ${name},</p>
  <p>Thank you for reaching out to Rework Berlin. We have received your inquiry and will get back to you as soon as possible.</p>
  <p>If your matter is urgent, feel free to reply directly to this email.</p>
  <p style="margin-top: 32px;">
    Best regards,<br />
    The Rework Berlin Team
  </p>
</body>
</html>`.trim();
}

function buildNotificationEmail(data: ContactRequest): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1a1a1a; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
  <h2 style="margin-top: 0;">New Inquiry Received</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; white-space: nowrap;">Name</td>
      <td style="padding: 8px 12px;">${data.name}</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; white-space: nowrap;">Organization</td>
      <td style="padding: 8px 12px;">${data.organization}</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; white-space: nowrap;">Email</td>
      <td style="padding: 8px 12px;"><a href="mailto:${data.email}">${data.email}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; white-space: nowrap;">Inquiry Type</td>
      <td style="padding: 8px 12px;">${data.inquiryType}</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; white-space: nowrap;">Message</td>
      <td style="padding: 8px 12px;">${data.message}</td>
    </tr>
  </table>
</body>
</html>`.trim();
}

export async function POST(request: Request) {
  let body: ContactRequest;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  const { name, organization, email, inquiryType, message } = body;

  // Validate required fields
  if (!name?.trim() || !email?.trim() || !inquiryType?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Missing required fields: name, email, inquiryType, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const warnings: string[] = [];

  // Insert into Supabase
  try {
    if (!supabase) throw new Error("Supabase not configured");
    const { error: dbError } = await supabase.from("inquiries").insert({
      name: name.trim(),
      organization: organization?.trim() || null,
      email: email.trim(),
      inquiry_type: inquiryType.trim(),
      message: message.trim(),
      created_at: new Date().toISOString(),
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      warnings.push("Failed to save inquiry to database.");
    }
  } catch (err) {
    console.error("Supabase connection error:", err);
    warnings.push("Database is not configured.");
  }

  // Send confirmation email to submitter
  try {
    if (!resend) throw new Error("Resend not configured");
    const { error: confirmError } = await resend.emails.send({
      from: "Rework Berlin <hello@reworkberlin.de>",
      to: email.trim(),
      subject: "We received your inquiry — Rework Berlin",
      html: buildConfirmationEmail(name.trim()),
    });

    if (confirmError) {
      console.error("Resend confirmation error:", confirmError);
      warnings.push("Failed to send confirmation email.");
    }
  } catch (err) {
    console.error("Resend confirmation connection error:", err);
    warnings.push("Email service is not configured.");
  }

  // Send notification email to the team
  try {
    if (!resend) throw new Error("Resend not configured");
    const { error: notifyError } = await resend.emails.send({
      from: "Rework Berlin <hello@reworkberlin.de>",
      to: "team@reworkberlin.de",
      subject: `New inquiry from ${name.trim()} — ${organization?.trim() || "No organization"}`,
      html: buildNotificationEmail(body),
    });

    if (notifyError) {
      console.error("Resend notification error:", notifyError);
      warnings.push("Failed to send team notification email.");
    }
  } catch (err) {
    console.error("Resend notification connection error:", err);
    // Already warned about email service above if applicable
  }

  return NextResponse.json({
    success: true,
    ...(warnings.length > 0 && { warnings }),
  });
}
