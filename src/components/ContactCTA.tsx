"use client";

import { useState, FormEvent } from "react";

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", organization: "", email: "", inquiryType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-[clamp(5rem,10vh,8rem)] bg-[var(--sage-cream)]"
    >
      <div className="max-w-[var(--max-w)] mx-auto px-[clamp(1.5rem,5vw,5rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(3rem,6vw,6rem)] items-start">
          {/* Left column */}
          <div>
            {/* Section label */}
            <div className="font-[family-name:var(--font-dm-sans)] text-xs font-medium uppercase tracking-[0.12em] mb-4 flex items-center gap-2 before:content-[''] before:inline-block before:w-2 before:h-[2px] before:bg-[var(--signal)]">
              Get Involved
            </div>

            <h2 className="font-[family-name:var(--font-cormorant-garamond)] font-medium italic leading-[1.15] mb-8 text-[clamp(2rem,4vw,3rem)] max-w-[500px]">
              Bring circularity to your next event
            </h2>

            <p className="text-base text-[rgba(30,30,30,0.7)] leading-[1.7] mb-8 max-w-[460px]">
              The Rework Berlin is ready for pilot activations and institutional
              partnerships. Whether you organize events, lead sustainability
              programs, or manage sports communities, there is a clear format
              here for collaboration. Let&apos;s build something measurable
              together.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-[0.8125rem] font-medium uppercase tracking-[0.06em] py-3.5 px-9 border-none cursor-pointer transition-all duration-300 bg-[var(--signal)] text-white hover:bg-[var(--signal-hover)] hover:scale-[1.03]"
              >
                Partner With Us
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-[0.8125rem] font-medium uppercase tracking-[0.06em] py-3.5 px-9 cursor-pointer transition-all duration-300 bg-transparent border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white hover:scale-[1.03]"
              >
                Download Project Deck
              </a>
            </div>
          </div>

          {/* Right column - form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--warm-cream)] p-10 border border-[rgba(30,30,30,0.06)]"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(30,30,30,0.5)] mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full font-[family-name:var(--font-dm-sans)] text-[0.9375rem] py-3.5 px-[1.125rem] border border-[rgba(30,30,30,0.1)] rounded-none bg-[var(--sage-cream)] text-[var(--charcoal)] outline-none transition-colors duration-300 focus:border-[var(--moss)]"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="org"
                className="block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(30,30,30,0.5)] mb-2"
              >
                Organization
              </label>
              <input
                type="text"
                id="org"
                placeholder="Organization name"
                value={form.organization}
                onChange={(e) =>
                  setForm({ ...form, organization: e.target.value })
                }
                className="w-full font-[family-name:var(--font-dm-sans)] text-[0.9375rem] py-3.5 px-[1.125rem] border border-[rgba(30,30,30,0.1)] rounded-none bg-[var(--sage-cream)] text-[var(--charcoal)] outline-none transition-colors duration-300 focus:border-[var(--moss)]"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(30,30,30,0.5)] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@organization.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full font-[family-name:var(--font-dm-sans)] text-[0.9375rem] py-3.5 px-[1.125rem] border border-[rgba(30,30,30,0.1)] rounded-none bg-[var(--sage-cream)] text-[var(--charcoal)] outline-none transition-colors duration-300 focus:border-[var(--moss)]"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="type"
                className="block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(30,30,30,0.5)] mb-2"
              >
                Inquiry Type
              </label>
              <select
                id="type"
                value={form.inquiryType}
                onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
                className="w-full font-[family-name:var(--font-dm-sans)] text-[0.9375rem] py-3.5 px-[1.125rem] border border-[rgba(30,30,30,0.1)] rounded-none bg-[var(--sage-cream)] text-[var(--charcoal)] outline-none transition-colors duration-300 focus:border-[var(--moss)] cursor-pointer appearance-none"
              >
                <option value="" disabled>
                  Select inquiry type
                </option>
                <option value="sports">Sports federation or club</option>
                <option value="event">Event or activation partner</option>
                <option value="institution">
                  Public institution or foundation
                </option>
                <option value="brand">Brand or sponsorship inquiry</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(30,30,30,0.5)] mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your project or idea"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full font-[family-name:var(--font-dm-sans)] text-[0.9375rem] py-3.5 px-[1.125rem] border border-[rgba(30,30,30,0.1)] rounded-none bg-[var(--sage-cream)] text-[var(--charcoal)] outline-none transition-colors duration-300 focus:border-[var(--moss)] min-h-[100px] resize-y"
              />
            </div>

            <div className="text-right mt-6">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center font-[family-name:var(--font-dm-sans)] text-[0.8125rem] font-medium uppercase tracking-[0.06em] py-3.5 px-9 border-none cursor-pointer transition-all duration-300 bg-[var(--signal)] text-white hover:bg-[var(--signal-hover)] hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>
            </div>

            {status === "success" && (
              <p className="mt-4 text-sm text-[var(--forest)] font-medium">
                Thank you! Your inquiry has been sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-[var(--signal)] font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
