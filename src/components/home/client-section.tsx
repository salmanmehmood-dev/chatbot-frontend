"use client";

//import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const logos = [
  { name: "DigitalOcean", src: "https://cdn.simpleicons.org/digitalocean" },
  { name: "Netlify", src: "https://cdn.simpleicons.org/netlify" },
  { name: "Vercel", src: "https://cdn.simpleicons.org/vercel" },
  { name: "Supabase", src: "https://cdn.simpleicons.org/supabase" },
  { name: "Hasura", src: "https://cdn.simpleicons.org/hasura" },
  { name: "Plausible Analytics", src: "https://cdn.simpleicons.org/plausibleanalytics" },
];

export function ClientsSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col lg:flex-row items-start justify-between gap-6">
          <div>
            <div className=" h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />
            <h3 className="text-3xl md:text-4xl lg:text-4xl text-mutedForeground font-medium mb-4 dark:text-accent-mint">
              Meet the People
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground leading-snug dark:text-white">
              We are{" "}
              <span className="text-foreground font-extrabold dark:text-accent-mint">
                Working With
              </span>
            </h2>
          </div>
        </div>

        {/* Carousel Controls (can keep or remove) */}
        {/* <div className="flex space-x-4 m-4 justify-end items-center">
          <button
            name="prev"
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-light-purpleBorder text-light-purpleBorder hover:bg-light-purpleHover flex items-center justify-center transition dark:border-accent-mint dark:text-accent-mint dark:hover:bg-accent-mint/20"
          >
            <ArrowLeft size={16} className="dark:text-accent-mint" />
          </button>
          <button
            name="next"
            aria-label="Next"
            className="w-10 h-10 rounded-full bg-light-purpleBorder text-white hover:bg-light-purpleDark flex items-center justify-center transition dark:bg-accent-mint dark:text-black dark:hover:bg-accent-mint/80 max-w-4xl"
          >
            <ArrowRight size={16} className="dark:text-black" />
          </button>
        </div> */}
      </div>

      {/* Marquee Logo Slider */}
      <div className="flex justify-center">
        <div className="marquee sm:h-50 md:h-56  h-36 max-w-7xl bg-light-lavender dark:bg-client-slider-gradient-dark rounded-lg p-6">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-12 justify-center items-center md:p-24 p-10"
              >
                <Image
                  src={logo.src}
                  width={200}
                  height={100}
                  alt={logo.name}
                  title={logo.name}
                  draggable={false}
                  loading="lazy"
                  className="max-w-[120px] lg:w-[120px] w-[100px] transition-transform duration-300 hover:scale-125 hover:-translate-y-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
