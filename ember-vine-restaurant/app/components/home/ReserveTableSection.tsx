"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import { useInView } from "@/app/hooks/useInView";

export default function ReserveTableSection() {
  const { ref, isInView } = useInView({
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={`relative h-[280px] md:h-[320px] w-full overflow-hidden transition-all duration-1000 ease-out ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <Image
        src="/images/reserve-table-bg.jpg"
        alt="Elegantly set dining table"
        fill
        className="object-cover object-center"
      />

<div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            100deg,
            rgba(245, 240, 232, 0.9) 0%,
            rgba(245, 240, 232, 0.75) 25%,
            rgba(245, 240, 232, 0.35) 50%,
            rgba(245, 240, 232, 0) 75%
          )`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16">
        <div className="max-w-md">
          <h2 className="font-serif text-obsidian text-4xl md:text-5xl leading-[1.1] mb-3">
            Your table is waiting.
          </h2>

          <p className="font-sans text-stone text-sm md:text-base mb-8">
            Good food. Good mood. Great company.
          </p>

          <Button href="#reservations" variant="primary">
            Reserve Your Table
          </Button>
        </div>
      </div>
    </section>
  );
}