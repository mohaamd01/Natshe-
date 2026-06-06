"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { getSupabase, type Review, type ReviewInsert } from "@/lib/supabase";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";

// ─── Star components ──────────────────────────────────────────────────────────

function StarIcon({
  filled,
  half = false,
  className,
}: {
  filled: boolean;
  half?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("w-4 h-4", className)}
      fill={filled || half ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled || half ? 0 : 1.5}
      aria-hidden="true"
    >
      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function StarRow({
  rating,
  size = "md",
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
}) {
  const sz = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" }[size];
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          filled={i < rating}
          className={cn(sz, i < rating ? "text-gold" : "text-brown/20")}
        />
      ))}
    </div>
  );
}

// ─── Interactive star picker ──────────────────────────────────────────────────

function StarPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;
  const labels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center gap-1"
        role="radiogroup"
        aria-label="Star rating"
      >
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
      {active > 0 && (
        <span className="font-serif italic text-brown/50 text-sm">
          {labels[active]}
        </span>
      )}
    </div>
  );
}

// ─── Form field wrapper ───────────────────────────────────────────────────────

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
        {required && (
          <span className="text-gold ml-1" aria-hidden="true">
            *
          </span>
        )}
      </span>
      {children}
    </label>
  );
}

const INPUT =
  "w-full bg-ivory border border-brown/15 rounded-xl px-4 py-3 font-sans text-sm text-brown placeholder:text-brown/30 focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all duration-200";

// ─── Review card ──────────────────────────────────────────────────────────────

function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

  return (
    <article className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-card hover:shadow-hover transition-shadow duration-300">
      <StarRow rating={review.rating} size="sm" />

      <blockquote className="flex-1">
        <p className="font-sans text-sm leading-relaxed text-brown/75 italic">
          &ldquo;{review.message}&rdquo;
        </p>
      </blockquote>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="font-sans text-xs font-semibold text-brown tracking-wide">
            {review.name ?? "Anonymous"}
          </p>
          {review.country_city && (
            <p className="font-sans text-[10px] text-brown/40 mt-0.5">
              {review.country_city}
            </p>
          )}
          {review.product_purchased && (
            <p className="font-sans text-[10px] text-sage mt-1">
              {review.product_purchased}
            </p>
          )}
        </div>
        <span className="font-sans text-[10px] text-brown/30 flex-shrink-0">
          {date}
        </span>
      </div>
    </article>
  );
}

// ─── Empty state ──────────────────────────────────────────────────────────────

function EmptyState({ onWriteReview }: { onWriteReview: () => void }) {
  return (
    <div className="text-center flex flex-col items-center gap-6 py-16 px-6 rounded-2xl border border-gold/15 bg-gradient-to-b from-gold/5 to-transparent max-w-lg mx-auto">
      <span className="text-gold/50 text-3xl leading-none" aria-hidden="true">
        ✦
      </span>
      <div className="flex flex-col gap-3">
        <h3 className="font-serif font-light text-brown text-2xl leading-snug">
          Be the first to share your<br />Aura Stor experience.
        </h3>
        <p className="font-sans text-sm text-brown/55 leading-relaxed">
          We are a new brand built on quality and trust. Your honest words mean
          everything — and help others find the right piece for them.
        </p>
      </div>
      <button
        onClick={onWriteReview}
        className="inline-flex items-center gap-2 font-sans text-sm font-medium text-sage hover:text-sage-dark transition-colors duration-200 group"
      >
        Write the first review
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          &rarr;
        </span>
      </button>
    </div>
  );
}

// ─── Review form ──────────────────────────────────────────────────────────────

type FormStatus = "idle" | "submitting" | "success" | "error";

function ReviewForm({ onSuccess }: { onSuccess: () => void }) {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<{
    rating?: string;
    message?: string;
  }>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Client-side validation
    const errors: typeof fieldErrors = {};
    if (rating === 0) errors.rating = "Please select a star rating.";
    if (!message.trim()) errors.message = "Please write a review message.";
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setStatus("submitting");

    const payload: ReviewInsert = {
      rating,
      message: message.trim(),
      name: name.trim() || null,
      country_city: location.trim() || null,
      product_purchased: product.trim() || null,
    };

    const { error } = await getSupabase().from("reviews").insert(payload);

    if (error) {
      console.error("Review submission error:", error.message);
      setStatus("error");
      return;
    }

    setStatus("success");
    onSuccess();
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="text-center flex flex-col items-center gap-5 py-12 px-8 rounded-2xl border border-gold/20 bg-gradient-to-b from-gold/5 to-transparent"
      >
        <span className="text-gold text-3xl leading-none" aria-hidden="true">
          ✦
        </span>
        <div>
          <h3 className="font-serif font-light text-brown text-xl mb-2">
            Thank You
          </h3>
          <p className="font-sans text-sm text-brown/60 leading-relaxed max-w-sm mx-auto">
            Your review has been received and will appear on this page after
            approval.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white/70 backdrop-blur-sm rounded-2xl border border-brown/8 shadow-card p-6 md:p-10 flex flex-col gap-7"
    >
      {/* Star rating */}
      <div className="flex flex-col gap-2">
        <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-brown/50 font-medium">
          Your Rating{" "}
          <span className="text-gold" aria-hidden="true">
            *
          </span>
        </span>
        <StarPicker value={rating} onChange={setRating} />
        {fieldErrors.rating && (
          <p role="alert" className="font-sans text-xs text-red-500 mt-0.5">
            {fieldErrors.rating}
          </p>
        )}
      </div>

      {/* Review message */}
      <Field label="Your Review" required>
        <textarea
          rows={4}
          placeholder="Tell us about your experience — the quality, how it made you feel, or what you love about your piece…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(INPUT, "resize-none")}
          maxLength={500}
          aria-required="true"
        />
        <div className="flex items-center justify-between -mt-1">
          {fieldErrors.message ? (
            <p role="alert" className="font-sans text-xs text-red-500">
              {fieldErrors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="font-sans text-[10px] text-brown/30">
            {message.length}/500
          </span>
        </div>
      </Field>

      {/* Optional fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Your Name (optional)">
          <input
            type="text"
            placeholder="e.g. Nour"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={INPUT}
            maxLength={60}
          />
        </Field>
        <Field label="Country / City (optional)">
          <input
            type="text"
            placeholder="e.g. Riyadh, Saudi Arabia"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={INPUT}
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
          className={INPUT}
          maxLength={100}
        />
      </Field>

      {/* Network error */}
      {status === "error" && (
        <p role="alert" className="font-sans text-xs text-red-500 -mt-2">
          Something went wrong. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center justify-center gap-2 w-full bg-brown text-ivory font-sans font-semibold text-sm py-4 rounded-xl hover:bg-brown/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === "submitting" ? (
          <>
            <SpinnerIcon className="w-4 h-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Submit Review"
        )}
      </button>

      <p className="text-center font-sans text-[11px] text-brown/35 leading-relaxed -mt-3">
        Reviews are moderated and will appear on this page after approval.
      </p>
    </form>
  );
}

function SpinnerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        d="M12 3a9 9 0 019 9"
        className="opacity-100"
      />
      <path
        strokeLinecap="round"
        d="M12 3a9 9 0 00-9 9"
        className="opacity-30"
      />
    </svg>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

type SectionView = "reviews" | "form";

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<SectionView>("reviews");

  const fetchReviews = useCallback(async () => {
    const { data, error } = await getSupabase()
      .from("reviews")
      .select("*")
      .eq("approved", true)
      .order("created_at", { ascending: false });

    if (!error && data) setReviews(data as Review[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  function handleSuccess() {
    // Refresh the list after a successful submission (new review won't show
    // until approved, but fetching here keeps the list up-to-date).
    fetchReviews();
  }

  return (
    <section
      className="section-padding bg-ivory-dark"
      style={{ backgroundColor: "#F0F4F1" }}
      aria-labelledby="reviews-heading"
    >
      <div className="container-luxury">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionTitle
              id="reviews-heading"
              label="Customer Love"
              title="Share Your Aura Stor Experience"
              subtitle="Your story helps us grow. Real reviews from real customers."
              align="left"
              withDivider
            />
            <button
              onClick={() =>
                setView((v) => (v === "form" ? "reviews" : "form"))
              }
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brown/20 font-sans text-xs font-medium text-brown/70 hover:border-sage hover:text-sage transition-all duration-200 self-start sm:self-auto"
            >
              {view === "form" ? (
                <>← Back to Reviews</>
              ) : (
                <>Write a Review ✦</>
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* Content */}
        {view === "form" ? (
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <ReviewForm
                onSuccess={() => {
                  handleSuccess();
                  setView("reviews");
                }}
              />
            </div>
          </ScrollReveal>
        ) : loading ? (
          /* Loading skeleton */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 h-48 animate-pulse"
                aria-hidden="true"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className="w-3 h-3 rounded-full bg-brown/10"
                    />
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-brown/10 rounded w-full" />
                  <div className="h-3 bg-brown/10 rounded w-4/5" />
                  <div className="h-3 bg-brown/10 rounded w-3/5" />
                </div>
              </div>
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <ScrollReveal>
            <EmptyState onWriteReview={() => setView("form")} />
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.id} delay={i * 80}>
                <ReviewCard review={review} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
