import Image from "next/image";
import Button from "@/app/components/ui/Button";

export default function OurStory() {
  return (
    <section id="about" className="bg-ivory py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left — content */}
        <div className="w-full md:w-[45%] flex flex-col gap-6">

          {/* Eyebrow with dash */}
          <div className="flex items-center gap-3">
            <p className="font-sans text-gold text-xs font-semibold uppercase tracking-[0.25em]">
              Our Story
            </p>
            <div className="w-10 h-px bg-gold/60" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-charcoal text-4xl md:text-5xl leading-[1.1]">
            Rooted in Passion,
            <br />
            Inspired by Flavour.
          </h2>

          {/* Body — two paragraphs, second one lighter */}
          <p className="font-sans text-obsidian/80 text-sm md:text-base leading-loose font-medium">
            Ember & Vine was born from a love of good food,
            warm hospitality, and the simple joy of
            bringing people together.
          </p>

          <p className="font-sans text-obsidian/50 text-sm leading-loose">
            Every dish we create is a celebration of
            seasonal ingredients, global influences,
            and the stories behind them.
          </p>

          {/* CTA */}
          <div className="mt-2">
            <Button href="/about" variant="secondary-dark">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Right — image with gold botanical */}
        <div className="w-full md:w-[55%] relative">
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden">
            <Image
              src="/images/our-story.jpg"
              alt="Ember and Vine signature dish — glazed fish with seasonal garnish"
              fill
              className="object-cover object-center"
            />


          </div>

          {/* Gold botanical line art — bottom right of image */}
          <div
            className="absolute -bottom-8 -right-6 w-24 h-32 opacity-60 pointer-events-none select-none"
            aria-hidden="true"
          >
            <Image
              src="/images/botanical-gold.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}