"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    content:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitated to introduce their work to someone else.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateNow",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    content: "They're incredibly professional and delivered a strong product.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    content: "Their expertise in digital marketing helped us grow immensely.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Founder, StartupXYZ",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=male",
    content: "Professional, reliable, and results-driven. Highly recommended.",
    rating: 5,
  },
  {
    name: "Lisa Wang",
    role: "CTO, DevCorp",
    avatar: "https://xsgames.co/randomusers/avatar.php?g=female",
    content:
      "Technical excellence and great communication throughout the project.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with 0 instead of 2
  const [mounted, setMounted] = useState(false); // Track if component is mounted

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    initial: 0, // Start with first slide initially
    slides: {
      perView: 5,
      spacing: 10,
      origin: "center",
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 4,
          origin: "center",
        },
      },
    },
    slideChanged(slider) {
      setActiveIndex(slider.track.details.rel);
    },
    created(slider) {
      // Move to middle slide after slider is created and component is mounted
      if (mounted) {
        setTimeout(() => {
          slider.moveToIdx(2);
          setActiveIndex(2);
        }, 100);
      }
    },
  });

  // Handle mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Move to center slide after mounting
  useEffect(() => {
    if (mounted && instanceRef.current) {
      setTimeout(() => {
        instanceRef.current?.moveToIdx(2);
        setActiveIndex(2);
      }, 100);
    }
  }, [mounted, instanceRef]);

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  // Show loading state during hydration
  if (!mounted) {
    return (
      <section className="py-24 bg-white text-center relative overflow-hidden dark:bg-black dark:text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="mx-auto h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />
          <div className="text-4xl mb-4 inline-block pb-1">
            Why customers love
          </div>
          <h2 className="text-4xl sm:text-3xl font-bold text-foreground mb-20 dark:text-accent-mint">
            working with us
          </h2>
          <p className="text-muted max-w-xl mx-auto mb-18 dark:text-white/80">
            {testimonials[0].content}
          </p>
        </div>
        <div className="mt-8 px-4 max-w-6xl mx-auto flex justify-center">
          <div className="animate-pulse">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white text-center relative overflow-hidden dark:bg-black dark:text-white">
      <div className="max-w-3xl mx-auto px-4">
  <div className="mx-auto h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />
        <div className="text-4xl mb-4 inline-block pb-1">
          Why customers love
        </div>
        <h2 className="text-4xl sm:text-3xl font-bold text-foreground mb-8 dark:text-accent-mint">
          working with us
        </h2>
      </div>

      {/* Arrows */}
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <button
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors dark:bg-gray-900 dark:hover:bg-accent-mint"
          onClick={handlePrev}
          aria-labelledby="prev-button"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-accent-mint" />
        </button>
        <button
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors dark:bg-gray-900 dark:hover:bg-accent-mint"
          onClick={handleNext}
          aria-labelledby="next-button"
        >
          <ChevronRight className="w-6 h-6 text-gray-600 dark:text-accent-mint" />
        </button>
      </div>

      <div className="mt-8 px-4 max-w-6xl mx-auto flex justify-center">
        <p className="text-muted max-w-xl mx-auto mb-18 dark:text-white/80">
          {testimonials[activeIndex]?.content || testimonials[0].content}
        </p>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider mt-8 px-4 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className="keen-slider__slide flex flex-col items-center cursor-pointer"
              onClick={() => instanceRef.current?.moveToIdx(index)}
              style={{
                opacity: isActive ? 1 : 0.5,
                transform: isActive ? "scale(1)" : "scale(0.9)",
              }}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={100}
                height={100}
                className={`rounded-full border-4 transition-all duration-300 ${
                  isActive ? "border-brand-accent dark:border-accent-mint" : "border-transparent"
                }`}
              />
              <div className="flex mt-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p
                className={`text-base font-bold transition-colors duration-300 ${
                  isActive ? "text-brand-dark dark:text-accent-mint" : "text-muted dark:text-white/60"
                }`}
              >
                {testimonial.name}
              </p>
              <p
                className={`text-sm transition-colors duration-300 ${
                  isActive ? "text-foreground/70 dark:text-white/80" : "text-muted/60 dark:text-white/60"
                }`}
              >
                {testimonial.role}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
