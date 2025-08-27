"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const resources = [
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image1.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image2.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image3.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image4.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/feature-image5.png",
  },
  {
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    image: "/teams.png",
  },
];

export default function FeaturedResources() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 4.2,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: {
          perView: 3.2,
          spacing: 16,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1.2,
          spacing: 16,
        },
      },
    },
  });

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-white mb-8 dark:bg-black">
      <div className="mx-auto">
  <div className="mx-auto h-[0.4rem] w-20 bg-featured-gradient dark:bg-featured-gradient-dark mb-8 rounded-full" />
        <div className="text-center mb-24">
          <h2 className="text-4xl text-featured-heading mb-4 dark:text-accent-mint">Featured</h2>
          <h3 className="text-4xl font-bold text-featured-title dark:text-white">Resources</h3>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white p-6 rounded-lg min-w-[220px] max-w-[240px] dark:bg-gray-900 dark:text-white"
            >
              <div className="h-[180px] rounded-lg overflow-hidden mb-6">
                <Image
                  src={res.image}
                  alt={`Resource: ${res.title}`}
                  width={240}
                  height={180}
                  className="object-cover w-full rounded"
                  loading="lazy"
                  sizes="240px"
                />
              </div>
              <h4 className="text-md font-light text-featured-heading mb-6 leading-snug dark:text-accent-mint">
                {res.title}
              </h4>
              <a
                href="#"
                className="text-sm text-transparent bg-clip-text bg-featured-gradient font-medium flex items-center justify-end gap-1 hover:underline"
              >
                Read More{" "}
                <ArrowRight className="text-featured-linkText" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
