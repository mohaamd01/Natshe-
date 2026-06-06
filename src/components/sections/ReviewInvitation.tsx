"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { CONTACT } from "@/lib/constants";

// ── Star rating component ────────────────────────────────────────────────────

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;

  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded transition-transform duration-100 hover:scale-110 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            className={cn(
              "w-8 h-8 transition-colors duration-150",
              star <= active ? "text-gold" : "text-brown/15"
            )}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </button>
      ))}
    </div>
  );
}

// ── Form field ────────────────────────────────────────────────────────────────

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-brown/50 font-medium">
        {label}
        {required && <span className="text-gold ml-1" aria-hidden="true">*</span>}
      </span>
      {children}
    </label>
  );
}

const INPUT_CLASS =
  "w-full bg-ivory border border-brown/15 rounded-xl px-4 py-3 font-sans text-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all duration-200";

// ── Rating label ─────────────────────────────────────────────────────────────

const RATING_LABELS: Record<number, string> = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Great",
  5: "Excellent ✦",
};

// ── Main component ────────────────────────────────────────────────────────────

export default function ReviewInvitation() {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (rating === 0) {
      setError("Please choose a star rating before submitting.");
      return;
    }
    if (!message.trim()) {
      setError("Please write a short review message before submitting.");
      return;
    }
    setError("");

    // Build WhatsApp message
    const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
    const lines = [
      `⭐ Aura Stor Review — ${stars} (${rating}/5)`,
      ``,
      `📝 Review: ${message.trim()}`,
    ];
    if (product.trim()) lines.push(`💎 Product: ${product.trim()}`);
    if (name.trim()) lines.push(`👤 Name: ${name.trim()}`);
    if (location.trim()) lines.push(`📍 Location: ${location.trim()}`);
    lines.push(``, `— Sent via Aura Stor website review form`);

    const encoded = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`;

    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section
      className="section-padding bg-ivory-dark"
      aria-labelledby="review-invitation-heading"
    >
      <div className="container-luxury">
        {/* Header */}
        <ScrollReveal>
          <SectionTitle
            id="review-invitation-heading"
            label="Your Voice"
            title="Share Your Aura Stor Experience"
            subtitle="Your story helps us grow. If you loved your piece, we would be grateful for your honest review."
            align="center"
            withDivider
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mt-12 max-w-2xl mx-auto">
            {submitted ? (
              /* ── Thank-you state ─────────────────────────────────────────── */
              <div className="text-center flex flex-col items-center gap-6 py-12 px-8 rounded-2xl border border-gold/20 bg-gradient-to-b from-gold/5 to-transparent">
                <span className="text-gold text-4xl leading-none" aria-hidden="true">✦</span>
                <div>
                  <h3 className="font-serif font-light text-brown text-2xl mb-2">
                    Thank You for Sharing
                  </h3>
                  <p className="font-sans text-sm text-brown/60 leading-relaxed max-w-sm mx-auto">
                    WhatsApp has opened with your review. Once you send the message, our team will read it personally and may feature it on our website.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setRating(0);
                    setName("");
                    setLocation("");
                    setProduct("");
                    setMessage("");
                  }}
                  className="font-sans text-xs text-brown/40 hover:text-sage transition-colors duration-200 underline underline-offset-4"
                >
                  Submit another review
                </button>
              </div>
            ) : (
              /* ── Form ──────────────────────────────────────────────────────── */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white/70 backdrop-blur-sm rounded-2xl border border-brown/8 shadow-card p-6 md:p-10 flex flex-col gap-7"
              >
                {/* Star rating */}
                <div className="flex flex-col gap-3">
                  <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-brown/50 font-medium">
                    Your Rating <span className="text-gold" aria-hidden="true">*</span>
                  </span>
                  <div className="flex items-center gap-4">
                    <StarRating value={rating} onChange={setRating} />
                    {rating > 0 && (
                      <span className="font-serif italic text-brown/60 text-sm">
                        {RATING_LABELS[rating]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Review message */}
                <Field label="Your Review" required>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your experience — the quality, how it made you feel, or what you love about your piece…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={cn(INPUT_CLASS, "resize-none")}
                    maxLength={500}
                    aria-required="true"
                  />
                  <span className="text-right font-sans text-[10px] text-brown/30 -mt-1">
                    {message.length}/500
                  </span>
                </Field>

                {/* Optional fields — 2-col on md+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Your Name (optional)">
                    <input
                      type="text"
                      placeholder="e.g. Nour"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={INPUT_CLASS}
                      maxLength={60}
                    />
                  </Field>
                  <Field label="Country / City (optional)">
                    <input
                      type="text"
                      placeholder="e.g. Riyadh, Saudi Arabia"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className={INPUT_CLASS}
                      maxLength={80}
                    />
                  </Field>
                </div>

                <Field label="Product Purchased (optional)">
                  <input
                    type="text"
                    placeholder="e.g. Tiger's Eye Star Set"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className={INPUT_CLASS}
                    maxLength={100}
                  />
                </Field>

                {/* Validation error */}
                {error && (
                  <p role="alert" className="font-sans text-xs text-red-500 -mt-2">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 w-full bg-whatsapp text-white font-sans font-semibold text-sm py-4 rounded-xl shadow-whatsapp hover:opacity-90 active:scale-[0.99] transition-all duration-200"
                >
                  {/* WhatsApp icon */}
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send Review via WhatsApp
                </button>

                {/* Disclosure note */}
                <p className="text-center font-sans text-[11px] text-brown/35 leading-relaxed -mt-3">
                  Reviews are submitted through WhatsApp and may be featured on our website after approval.
                </p>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
