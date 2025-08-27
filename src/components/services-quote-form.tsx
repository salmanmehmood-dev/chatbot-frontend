"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import pricings from "@/data/pricings.json";
import AmountRangeSelector from "@/components/amount-range-selector";
import { CheckboxBox } from "@/components/check-box";
import DaysSlider from "@/components/day-slider";

const SERVICES = [
  {
    label: "Smart Contract Development (Solidity)",
    key: "smart-contract",
  },
  {
    label: "Frontend & Backend Development",
    key: "frontend-backend",
  },
  {
    label: "Web3 Integration",
    key: "web3-integration",
  },
  {
    label: "UX/UI Design",
    key: "ux-ui-design",
  },
  {
    label: "Branding & Brand Identity",
    key: "branding-brand-identity",
  },
  {
    label: "GraphQL Subgraph Development",
    key: "graphql-subgraph-development",
  },
];

function getTotalPrice(selected: string[], days: number) {
  const total = { min: 0, max: 0 };
  const workingHoursInDay = 8;
  const totalWorkingHours = days * workingHoursInDay;
  selected.forEach((key) => {
    const service = pricings[key as keyof typeof pricings];
    if (service) {
      total.min += Number(service.price.min) * totalWorkingHours;
      total.max += Number(service.price.max) * totalWorkingHours;
    }
  });
  return total;
}

const ServicesQuoteForm: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [days, setDays] = useState(1);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleServiceChange = (key: string) => {
    setSelectedServices((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const { min, max } = getTotalPrice(selectedServices, days);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      services: selectedServices,
      days,
      description,
      email,
      budgetQuote: { min, max },
    };

    await fetch("/api/email/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Form submitted!");
  };

  return (
    <form
      className="flex-[2] space-y-8 rounded-2xl bg-white p-6 shadow-md md:p-10 dark:bg-brand-dark/50 dark:text-white"
      onSubmit={handleSubmit}
    >
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-2 text-sm text-brand dark:text-accent-mint">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-accent-mint bg-white text-black dark:bg-brand-dark/20 dark:text-accent-mint">
          1
        </span>
        <span className="dark:text-white">Personal Info</span>
        <span className="dark:text-white">&gt;</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-mint text-white dark:bg-accent-mint dark:text-black">
          2
        </span>
        <span className="font-semibold text-accent-mint dark:text-accent-mint">Our services</span>
      </div>

      {/* Title */}
  <h2 className="text-xl font-semibold text-brand dark:text-accent-mint">Services</h2>

      {/* Services */}
      <fieldset className="rounded-md bg-white px-4 py-6 space-y-3 border border-accent-mint dark:bg-brand-dark/20 dark:border-accent-mint">
        <legend className="block text-sm font-medium text-brand mb-3 dark:text-accent-mint">
          Why are you contacting us?
        </legend>
        <div
          className="flex flex-wrap items-start gap-4 pt-1"
          role="group"
          aria-labelledby="services-legend"
        >
          {SERVICES.map(({ label, key }) => (
            <div
              key={key}
              className="flex items-start gap-3 min-h-[44px] p-2 rounded hover:bg-mint-white-gradient dark:text-accent-mint dark:hover:text-white dark:hover:bg-gray-800"
            >
              <CheckboxBox
                id={`service-${key}`}
                aria-describedby={`service-${key}-desc`}
                checked={selectedServices.includes(key)}
                onChange={() => handleServiceChange(key)}
              />
              <label
                htmlFor={`service-${key}`}
                className="sm:w-[212px] text-sm font-normal text-brand dark:text-inherit leading-snug cursor-pointer select-none"
                id={`service-${key}-desc`}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* Project Description */}
      <div className="space-y-2 rounded-md bg-white px-4 py-6 border border-accent-mint dark:bg-brand-dark/20 dark:border-accent-mint">
        <label
          htmlFor="project-description"
          className="block text-sm font-medium text-brand dark:text-accent-mint"
        >
          Tell us about your project
        </label>
        <textarea
          id="project-description"
          aria-describedby="project-description-hint"
          className="w-full resize-none rounded-md border border-accent-mint bg-white p-3 text-sm text-brand focus:border-accent-mint focus:outline-none focus:ring-2 focus:ring-accent-mint focus:ring-opacity-25 dark:bg-gray-900 dark:text-white"
          rows={4}
          placeholder="Describe your project requirements..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p id="project-description-hint" className="text-xs text-muted dark:text-white/60">
          Please provide details about your project requirements and goals.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-2 rounded-md bg-white px-4 py-6 border border-accent-mint dark:bg-brand-dark/20 dark:border-accent-mint">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand dark:text-accent-mint"
        >
          Your email address
        </label>
        <input
          required
          type="email"
          id="email"
          aria-describedby="email-hint"
          className="w-full rounded-md border border-accent-mint bg-white p-3 text-sm text-brand focus:border-accent-mint focus:outline-none focus:ring-2 focus:ring-accent-mint focus:ring-opacity-25 dark:bg-gray-900 dark:text-white"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={
            email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
              ? "true"
              : "false"
          }
        />
        <p id="email-hint" className="text-xs text-muted dark:text-white/60">
          We&apos;ll use this email to send you the project quote.
        </p>
        {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
          <p className="text-xs text-red-600" role="alert">
            Please enter a valid email address.
          </p>
        )}
      </div>

      {/* Days Slider */}
      <div className="mx-auto w-[calc(100%-2rem)] space-y-2">
        <label
          htmlFor="days-slider"
          className="block text-sm font-medium text-brand dark:text-accent-mint"
        >
          Project Duration (Days)
        </label>
        <div aria-labelledby="days-slider">
          <DaysSlider days={days} setDays={setDays} />
        </div>
        <div className="text-sm text-brand dark:text-accent-mint" aria-live="polite">
          Selected: {days} day{days > 1 ? "s" : ""}
        </div>
        <p className="text-xs text-muted dark:text-white/60">
          Use the slider to indicate your preferred project timeline.
        </p>
      </div>

      {/* Budget Range */}
      <div className="mx-auto w-[calc(100%-2rem)] space-y-2">
        <label
          htmlFor="budget-range"
          className="block text-sm font-medium text-brand dark:text-accent-mint"
        >
          Budget Range
        </label>
        <div aria-labelledby="budget-range">
          <AmountRangeSelector
            value={[min, max]}
            min={min - 400}
            max={max + 400}
            step={100}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button
            className="min-w-[200px] min-h-[44px] px-8 py-3 text-white bg-brand-gradient hover:opacity-90 focus:ring-2 focus:ring-accent-mint focus:ring-opacity-50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all dark:bg-accent-mint dark:hover:bg-white dark:hover:text-brand"
            type="submit"
            disabled={
              selectedServices.length === 0 || days === 0 || email === ""
            }
            aria-describedby="submit-requirements"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ServicesQuoteForm;
