"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blog";

export default function FeaturedResources() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
   loop: true, // ✅ keeps it infinite
    mode: "free", // ✅ smooth continuous movement, no jump
    renderMode: "performance",
    slides: {
      perView: 4.2,
      spacing: 32,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 3.2, spacing: 16 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.2, spacing: 16 },
      },
    },
  });

  return (
    <section
      id="blog"
      className="py-20 px-4 sm:px-8 lg:px-16 bg-white mb-8 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto h-[0.4rem] w-20 bg-featured-gradient dark:bg-featured-gradient-dark mb-8 rounded-full" />
        <div className="text-center mb-24">
          <h2 className="text-4xl text-featured-heading mb-4 dark:text-accent-mint">
            Featured
          </h2>
          <h3 className="text-4xl font-bold text-featured-title dark:text-white">
            Resources
          </h3>
        </div>

        {/* Slider with arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-accent-mint text-white p-2 rounded-full shadow hover:bg-accent-mint/80 transition z-10"
          >
            <ArrowLeft className="w-5 h-5 " />
          </button>

          <div ref={sliderRef} className="keen-slider overflow-visible ">
            {blogs.map((blog, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`keen-slider__slide bg-gray-200 p-6 rounded-lg min-w-[290px] max-w-[300px] dark:bg-gray-900 dark:text-white transition-transform duration-300 ${
                    isHovered ? "scale-[1.03] shadow-lg z-10" : ""
                  }`}
                >
                  <div className="h-[180px] rounded-lg overflow-hidden mb-6">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={280}
                      height={180}
                      className="object-cover w-full rounded"
                      loading="lazy"
                      sizes="240px"
                    />
                  </div>
                  <h4 className="text-md font-light text-featured-heading mb-6 leading-snug dark:text-accent-mint">
                    {blog.title}
                  </h4>
                  <Link
                    href={`/blog/${blog.blogId}`}
                    className="text-sm text-transparent bg-clip-text bg-featured-gradient font-medium flex items-center justify-end gap-1 hover:underline"
                  >
                    Read More{" "}
                    <ArrowRight
                      className="text-featured-linkText"
                      size={14}
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => slider.current?.next()}
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-accent-mint text-white p-2 rounded-full shadow hover:bg-accent-mint/80 transition z-10"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
