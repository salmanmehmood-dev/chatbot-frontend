"use client";

import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowRight, Monitor, Smartphone, Server, Blocks, ShoppingCart, Cloud, ShieldCheck, Search } from "lucide-react";

const ServicesQuoteForm = dynamic(() => import("../common/services-quote-form"));

// Interface for service items
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Craft modern, responsive, and high-performance UIs with seamless interactions. We focus on creating engaging digital experiences that delight users.",
    icon: <Monitor className="w-7 h-7 text-accent-mint" />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Design and develop cross-platform mobile apps that are fast, scalable, and intuitive. From concept to deployment, we deliver tailored app solutions.",
    icon: <Smartphone className="w-7 h-7 text-accent-mint" />,
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Build powerful and secure server-side applications with scalable APIs and efficient database management to handle your business needs.",
    icon: <Server className="w-7 h-7 text-accent-mint" />,
  },
  {
    id: 4,
    title: "Blockchain Solutions",
    description:
      "Leverage decentralized technology for secure, transparent, and tamper-proof digital solutions, including crypto payments and smart contracts.",
    icon: <Blocks className="w-7 h-7 text-accent-mint" />,
  },
  {
    id: 5,
    title: "E-Commerce Development",
    description:
      "Create high-converting online stores with secure payment gateways, advanced product management, and seamless shopping experiences.",
    icon: <ShoppingCart className="w-7 h-7 text-accent-mint" />,
  },
  {
    id: 6,
    title: "Cloud Solutions",
    description:
      "Empower your business with scalable cloud infrastructure, DevOps automation, and reliable cloud migration strategies.",
    icon: <Cloud className="w-7 h-7 text-accent-mint" />,
  },
  {
    id: 7,
    title: "Cybersecurity",
    description:
      "Protect your business with enterprise-grade security solutions, penetration testing, and compliance-focused defense systems.",
    icon: <ShieldCheck className="w-7 h-7 text-accent-mint" />,
  },
  {
    id: 8,
    title: "SEO & Digital Marketing",
    description:
      "Boost visibility and grow your brand with result-driven SEO, content marketing, and performance-focused digital campaigns.",
    icon: <Search className="w-7 h-7 text-accent-mint" />,
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
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

  // Autoplay
  useEffect(() => {
    if (!slider.current) return;
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section id="services" className="py-12 sm:py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-28">
          <div className="mx-auto h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />
          <h2 className="text-4xl font-bold text-brand dark:text-accent-mint">
            Services We Offer
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute -left-10 top-1/2 -translate-y-1/2 bg-accent-mint text-white p-2 rounded-full shadow hover:bg-accent-mint/80 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div ref={sliderRef} className="keen-slider group overflow-visible">
            {services.map((service, idx) => {
              const isHovered = hoveredIndex === idx;
              const isOtherHovered =
                hoveredIndex !== null && hoveredIndex !== idx;

              return (
                <div
                  key={service.id}
                  className="keen-slider__slide flex items-center justify-center overflow-visible py-5"
                >
                  <Card
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`
                      flex flex-col justify-between bg-white rounded-[7px]
                      border-2 border-transparent
                      shadow-[0px_4px_30px_rgba(0,0,0,0.05)]
                      transition-all duration-300
                      w-[330px] h-[326px]
                      dark:bg-brand/30 dark:text-white dark:border-gray-800
                      ${
                        isHovered
                          ? "translate-y-2 z-10 scale-[1.02] border-accent-mint shadow-[0px_4px_30px_rgba(0,0,0,0.1)] dark:border-accent-mint"
                          : ""
                      }
                      ${isOtherHovered ? "-translate-y-2 z-0" : ""}
                    `}
                  >
                    <CardContent className="p-[4.8%]">
                      {/* Icon */}
                      <div className="w-[58px] h-[58px] rounded-full flex items-center justify-center mb-[20px] border border-accent-mint bg-white dark:bg-brand">
                        {service.icon}
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-[20px] leading-[27px] mb-[20px] text-brand dark:text-accent-mint">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[14px] leading-[23px] text-muted dark:text-white/90">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => slider.current?.next()}
            className="absolute -right-10 top-1/2 -translate-y-1/2 bg-accent-mint text-white p-2 rounded-full shadow hover:bg-accent-mint/80 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? "bg-accent-mint dark:bg-accent-mint"
                  : "bg-accent-mint/20 hover:bg-accent-mint/40 dark:bg-white/20 dark:hover:bg-accent-mint/40"
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
            <h2 className="text-2xl font-bold mb-4 text-brand dark:text-accent-mint">
              Get a Quote
            </h2>
            <p className="text-sm text-muted mb-6 dark:text-white/80">
              Fill out the form below to get a personalized quote for your
              project.
            </p>
            <ServicesQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
