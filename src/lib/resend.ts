import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

let resend: Resend | null = null;

if (apiKey) {
  resend = new Resend(apiKey);
} else {
  console.warn("Missing RESEND_API_KEY. Email sending will be skipped.");
}

export { resend };
