import { ChevronRight } from "lucide-react";
import { Title } from "../ui/Title";
import Link from "next/link";
import { HeroFeatured } from "./HeroFeatured";
import { HeroSwiper } from "./HeroSwiper";

export const Hero = () => {
  return (
    <section className="flex items-start gap-8 mt-12 relative">
      {/* LEFT */}
      <HeroSwiper />

      {/* RIGHT */}
      <div className="w-[370px] max-h-[666px] overflow-hidden">
        <div className="flex items-center justify-between ">
          <Title text="Featured Videos" className="text-lg" />
          <Link
            href={"/trailers"}
            className="flex items-center rounded-lg py-2 px-4 bg-background-light-transparent-100 shadow-inner justify-center hover:bg-background-light-transparent-50 gap-2.5"
          >
            Browse Trailers
            <ChevronRight size={16} />
          </Link>
        </div>

        <HeroFeatured />
      </div>

      <div className="blur-[500px] bg-[#9e8bf84d] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[962px] -z-10" />
    </section>
  );
};
