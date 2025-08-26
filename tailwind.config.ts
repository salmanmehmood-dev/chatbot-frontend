
/**
 * ZaufLabs Tailwind Color System
 *
 * All project colors are defined here for easy global theming.
 *
 * Usage:
 * - Use semantic color names in your components (e.g. bg-brand, text-accent, border-header-border)
 * - Change color values here to update everywhere in the project
 *
 * Color Palette:
 *   Black:      #000000  (text, headings, icons)
 *   Blue:       #213152  (primary brand, buttons, links)
 *   Neon Green: #9DFDC1  (accents, highlights)
 *   Mint Green: #0FB89C  (accents, highlights)
 *   White:      #FFFFFF  (background, cards, sections)
 *
 * Example usage:
 *   bg-brand, text-brand, border-brand, bg-accent, text-accent, etc.
 *
 * For each color group below, see comments for where it is used.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /**
         * Brand Colors
         * - Used for primary actions, links, logo, and main highlights
         */
        brand: {
          DEFAULT: "#213152", // Blue (primary brand)
          dark: "#000000",   // Black (for dark accents)
        },
        /**
         * Accent Colors
         * - Used for buttons, highlights, and call-to-actions
         */
        accent: {
          DEFAULT: "#9DFDC1", // Neon Green
          mint: "#0FB89C",    // Mint Green
        },
        /**
         * Neutral Colors
         * - Used for text, backgrounds, borders
         */
        black: "#000000", // Main text, headings
        white: "#FFFFFF", // Backgrounds, cards
        muted: "#4B5563", // Muted text
        foreground: "#000000", // Default text color
        /**
         * Header Colors
         * - Used in header.tsx for background, border, text, hover
         */
        header: {
          text: "#213152", // Blue (header text)
          hover: "#0FB89C", // Mint Green (header hover)
          border: "#E2E8F0", // border-gray-200
          background: "#FFFFFF", // White (header background)
        },
        /**
         * Footer Colors
         * - Used in footer.tsx for background, border, text, links, icons
         */
        footer: {
          bg: "#FFFFFF",
          border: "#E2E8F0",
          text: "#213152", // Blue (footer text)
          link: "#0FB89C", // Mint Green (footer links)
          icon: "#213152", // Blue (footer icons)
          muted: "#4B5563", // Muted text
        },
        /**
         * Section/Feature Colors
         * - Used in section backgrounds, headings, subheadings, etc.
         */
        featured: {
          heading: "#213152", // Blue
          title: "#000000", // Black
          linkText: "#0FB89C", // Mint Green
        },
        section: {
          background: "#FFFFFF",
          heading: "#213152",
          subheading: "#0FB89C",
          body: "#4B5563",
          quote: "#9DFDC1",
          role: "#0FB89C",
        },
        /**
         * Highlight Colors
         * - Used for text highlights in hero, etc.
         */
        highlight: {
          software: "#9DFDC1", // Neon Green
          teams: "#0FB89C", // Mint Green
        },
      },
      backgroundImage: {
  /**
   * Gradients (ZaufLabs base colors only)
   * - All gradients use only Black (#000), Blue (#213152), Neon Green (#9DFDC1), Mint Green (#0FB89C), White (#FFF)
   */
  "brand-gradient": "linear-gradient(to right, #213152, #0FB89C)", // Blue to Mint Green
  "featured-gradient": "linear-gradient(to right, #213152, #9DFDC1)", // Blue to Neon Green
  "header-cta": "linear-gradient(to top right, #213152, #0FB89C)", // Blue to Mint Green
  "text-gradient": "linear-gradient(to right, #0FB89C, #213152)", // Mint Green to Blue
  "line-gradient": "linear-gradient(to right, #213152, #9DFDC1)", // Blue to Neon Green
  "mint-neon-gradient": "linear-gradient(90deg, #0FB89C 0%, #9DFDC1 100%)", // Mint Green to Neon Green
  "blue-black-gradient": "linear-gradient(90deg, #213152 0%, #000000 100%)", // Blue to Black
  "white-blue-gradient": "linear-gradient(90deg, #FFFFFF 0%, #213152 100%)", // White to Blue
  "mint-white-gradient": "linear-gradient(90deg, #0FB89C 0%, #FFFFFF 100%)", // Mint Green to White
  "neon-white-gradient": "linear-gradient(90deg, #9DFDC1 0%, #FFFFFF 100%)", // Neon Green to White
      },
      boxShadow: {
        nav: "0 2px 12px rgba(0, 0, 0, 0.04)",
      },
      scale: {
        102: '1.02',
      },
    },
  },
  plugins: [],
};

export default config;
