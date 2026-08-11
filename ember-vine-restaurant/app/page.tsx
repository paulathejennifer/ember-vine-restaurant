import Hero from "@/app/components/home/Hero";
import OurStory from "@/app/components/home/OurStory";
import ChefsFavourites from "@/app/components/home/ChefsFavourites";
import MenuPreview from "@/app/components/home/MenuPreview";
import Testimonials from "@/app/components/home/Testimonials";
import ReserveTableSection from "@/app/components/home/ReserveTableSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <OurStory />
      <ChefsFavourites />
      <MenuPreview />
      <Testimonials />
      <ReserveTableSection />
    </main>
  );
}