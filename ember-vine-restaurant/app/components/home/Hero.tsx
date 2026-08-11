"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "@/app/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Ember and Vine signature steak dish with wine glass"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay — centre-focused vignette so image shows
          richly while text still has contrast to sit against */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at center,
            rgba(13, 13, 13, 0.35) 0%,
            rgba(13, 13, 13, 0.65) 60%,
            rgba(13, 13, 13, 0.85) 100%
          )`,
        }}
      />

      {/* Content — centred */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">

        {/* Eyebrow with decorative lines */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-gold/60" />
          <p className="font-sans text-ivory/80 text-xs uppercase tracking-[0.3em]">
            Welcome to Ember & Vine
          </p>
          <div className="w-12 h-px bg-gold/60" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-ivory text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-4">
          A World of Flavour,
          <br />
          <span className="text-gold italic">Served with Heart.</span>
        </h1>

        {/* Body */}
        <p className="font-sans text-ivory/75 text-sm md:text-base leading-loose mb-10 max-w-lg">
          Thoughtfully crafted dishes, exceptional ingredients,
          and unforgettable moments around the table.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary — gold filled */}
          <Button href="#menu" variant="primary">
            Explore Our Menu
          </Button>

          {/* Secondary — white outline */}
          <Button href="#reservations" variant="secondary">
            Reserve a Table
          </Button>
        </div>
      </div>

      {/* Scroll indicator — bounces to hint downward scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown
          size={28}
          strokeWidth={1.5}
          className="text-ivory/60"
        />
      </div>

    </section>
  );
}