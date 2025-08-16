'use client';

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

const ServicesQuoteForm = dynamic(() => import("./services-quote-form"));


const services = [
  {
    title: "Web Design & Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "📱",
  },
  {
    title: "Software Testing Service",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    icon: "🧪",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store solutions with secure payment and inventory management.",
    icon: "🛒",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store solutions with secure payment and inventory management.",
    icon: "🛒",
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    mode: "snap",
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1.2,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.2,
          spacing: 20,
        },
      },
    },
  });
  
  return (
    <section id="services" className="py-12 sm:py-16 bg-brand/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-28">
          <h2 className="text-4xl font-bold text-foreground">Services we offer</h2>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider group overflow-visible relative">
          {services.map((service, idx) => {
            const isHovered = hoveredIndex === idx;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== idx;
            
            return (
              <div
                key={idx}
                className="keen-slider__slide flex items-center justify-center overflow-visible py-5"
              >
                <Card
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`
                    flex flex-col justify-between bg-cardBg rounded-[7px]
                    border-2 border-transparent
                    shadow-[0px_4px_30px_rgba(0,0,0,0.05)]
                    transition-all duration-300
                    w-[330px] h-[326px]

                    ${isHovered ? "translate-y-2 z-10 scale-[1.02] border-brand shadow-[0px_4px_30px_rgba(0,0,0,0.1)]" : ""}
                    ${isOtherHovered ? "-translate-y-2 z-0" : ""}
                  `}
                >
                  <CardContent className="p-[4.8%]">
                    {/* Icon */}
                    <div
                      className="w-[58px] h-[58px] rounded-full flex items-center justify-center mb-[20px]"
                      style={{
                        backgroundColor: "#FAFAFA",
                        border: "1px solid #FF77A5",
                      }}
                    >
                      <span className="text-[34px]">{service.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-[20px] leading-[27px] mb-[20px] text-headline">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] leading-[23px] text-subtext">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-[1px] h-[1px] rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-accent"
                  : "bg-accent/20 hover:bg-accent/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Quote Form */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
            <p className="text-sm text-muted mb-6">
              Fill out the form below to get a personalized quote for your project.
            </p>
            <ServicesQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
