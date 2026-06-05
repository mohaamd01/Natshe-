import { ScrollReveal, StaggerReveal } from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding bg-sage/8"
      style={{ backgroundColor: "#F0F4F1" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-luxury">
        <ScrollReveal>
          <SectionTitle
            id="testimonials-heading"
            label="Customer Love"
            title="What Our Customers Say"
            subtitle="Real orders. Real people. Real energy."
            align="center"
            withDivider
          />
        </ScrollReveal>

        {/* Stars summary */}
        <ScrollReveal delay={100} className="flex items-center justify-center gap-2 mt-4 mb-12">
          <StarRow count={5} />
          <span className="font-sans text-sm text-brown/60 ml-1">
            5.0 · All Reviews
          </span>
        </ScrollReveal>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <StaggerReveal stagger={80}>
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-card hover:shadow-hover transition-shadow duration-300 h-full"
            >
              {/* Stars */}
              <StarRow count={t.rating} size="sm" />

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="font-sans text-sm leading-relaxed text-brown/75 italic">
                  "{t.text}"
                </p>
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              {/* Customer */}
              <div>
                <p className="font-sans text-xs font-semibold text-brown tracking-wide">
                  {t.name}
                </p>
                <p className="font-sans text-[10px] text-brown/40 mt-0.5">
                  {t.location}
                </p>
                {t.productName && (
                  <p className="font-sans text-[10px] text-sage mt-1">
                    {t.productName}
                  </p>
                )}
              </div>
            </article>
          ))}
        </StaggerReveal>
        </div>

        {/* Trust badges */}
        <ScrollReveal delay={200} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              { label: "100% Natural Stones", icon: "gem" },
              { label: "Velvet Gift Packaging", icon: "gift" },
              { label: "WhatsApp Support Daily", icon: "chat" },
              { label: "Free Shipping Over $50", icon: "truck" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 text-brown/60"
              >
                <TrustIcon name={badge.icon} />
                <span className="font-sans text-xs font-medium tracking-wide">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function StarRow({ count, size = "md" }: { count: number; size?: "sm" | "md" }) {
  const sz = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${sz} ${i < count ? "text-gold" : "text-brown/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TrustIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    gem: (
      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 5-8 13L4 8l8-5z" />
      </svg>
    ),
    gift: (
      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12v10H4V12M2 7h20v5H2V7zM12 22V7m0 0a2 2 0 01-2-2 2 2 0 00-4 0 4 4 0 004 4h2m0-4a2 2 0 002-2 2 2 0 014 0 4 4 0 01-4 4h-2" />
      </svg>
    ),
    chat: (
      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    truck: (
      <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.5.5M13 16H9m4 0h4.5l2-6H13V5" />
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}
