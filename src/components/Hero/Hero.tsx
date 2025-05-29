import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { Title } from "../ui/Title";
import Link from "next/link";
import { HeroFeatured } from "./HeroFeatured";

export const Hero = () => {
  return (
    <section className="flex items-start gap-8 mt-12 relative">
      {/* LEFT */}
      <div className="flex-1 relative">
        <div className="relative w-full h-[500px] xl:h-[630px] ">
          <Image
            className="rounded-xl"
            src={"/images/temp-images/hero1.jpg"}
            fill
            alt="hero temp image"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent 100%)",
            }}
          />

          {/* PAGINATION */}
          <div className="flex items-center gap-7 absolute right-6 bottom-9 z-10">
            <div className="flex items-center gap-3">
              <button className="w-3.5 h-3.5 bg-background-light-transparent-100 rounded-full" />
              <button className="w-3.5 h-3.5 bg-background-transparent-600 rounded-full" />
              <button className="w-3.5 h-3.5 bg-background-light-transparent-100 rounded-full" />
            </div>
            <div className="flex items-center gap-1.5">
              <button className="w-10 h-10 rounded-full bg-background-light-transparent-50 flex items-center justify-center hover:opacity-80">
                <ChevronLeft />
              </button>
              <button className="w-10 h-10 rounded-full bg-background-light-transparent-100 flex items-center justify-center hover:opacity-80 ">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        {/* MOVIE INFO */}
        <div className="flex items-end gap-8 absolute -bottom-[100px] left-5">
          <div className="relative min-w-[200px] min-h-[300px] 2xl:min-w-[280px] 2xl:min-h-[400px]">
            <Image
              src={"/images/temp-images/hero-poster1.jpg"}
              alt="hero-poster"
              fill
              className="rounded-xl"
            />
            <button className="absolute left-5 top-0 hover:scale-105">
              <Image
                src={"/images/icons/bookmark-plus.svg"}
                width={39}
                height={50}
                alt="add to favorites"
              />
            </button>
          </div>
          <div className="flex items-center gap-6 max-w-[585px]">
            <button className="rounded-full bg-background-light-transparent-100 min-w-[80px] xl:min-w-[143px] min-h-[80px] xl:min-h-[143px] flex items-center justify-center hover:scale-90">
              <Play
                size={90}
                className="fill-text-primary w-10 xl:w-[90px] h-10 xl:h-[90px]"
              />
            </button>
            <div>
              <h2 className="text-2xl xl:text-4xl text-white">
                ‘Inside Out 2’ Make us Feel Every Emotion
              </h2>
              <p className="mt-3 text-xl xl:text-2xl text-background-transparent-600">
                Watch the new “Inside out” Trailer
              </p>
            </div>
          </div>
        </div>
      </div>

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
