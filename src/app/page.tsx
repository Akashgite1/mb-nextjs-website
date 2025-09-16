import Gallery from "@/components/gallery/Gallery";
import Platforms from "@/components/platforms/Platforms";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Platforms />
      <Gallery />
      <Testimonials />
    </div>
  );
}
