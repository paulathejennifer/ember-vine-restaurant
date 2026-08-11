import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The food was exceptional, the service impeccable, and the atmosphere absolutely perfect.",
    name: "Amina K.",
  },
  {
    quote:
      "Ember & Vine is now our go-to spot for every special occasion. Simply unforgettable!",
    name: "Jason M.",
  },
  {
    quote:
      "Every dish is a masterpiece. You can taste the passion in every bite.",
    name: "Laura T.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/testimonials-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-obsidian/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-12">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-gold/60" />
          <p className="font-sans text-gold text-xs uppercase tracking-[0.3em]">
            What Our Guests Say
          </p>
          <div className="w-12 h-px bg-gold/60" />
        </div>

        {/* Three review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ivory/10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 px-8 py-10 bg-obsidian/60"
            >
              {/* Opening quote mark */}
              <span className="font-serif text-gold text-5xl leading-none select-none">
                "
              </span>

              {/* Quote */}
              <p className="font-sans text-ivory/85 text-sm leading-loose flex-1">
                {review.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>

              {/* Name */}
              <p className="font-sans text-stone text-xs tracking-[0.15em]">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}