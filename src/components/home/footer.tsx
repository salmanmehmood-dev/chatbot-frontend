"use client"


import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useDarkMode } from "@/context/DarkModeContext";

const socialLinks = [
  {
    name: "Facebook",
    Icon: Facebook,
    href: "https://www.facebook.com/yourpage",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    href: "https://www.instagram.com/yourpage",
  },
  {
    name: "Twitter",
    Icon: Twitter,
    href: "https://www.twitter.com/yourpage",
  },
  {
    name: "LinkedIn",
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/yourpage",
  },
];

export function Footer() {
  const { isDark } = useDarkMode();
  return (
    <footer className="bg-footer-bg border-t border-footer-border text-sm text-footer-text dark:bg-black dark:border-gray-800 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex mb-4">
              <Link href="/" className="flex items-center space-x-2 h-full">
              {isDark ? (
                <Image
                  src="/logos/logo2.png" 
                  alt="Logo Dark"
                  width={160}
                  height={48}
                  className="object-contain h-20 w-auto pt-2"
                  priority
                />
              ) : (
                <Image
                  src="/logos/Logo.png" 
                  alt="Logo Light"
                  width={160}
                  height={48}
                  className="object-contain h-16 w-auto pt-4"
                  priority
                />
              )}
            </Link>
            </div>
            <p className="mb-4 text-footer-text dark:text-white/80">
              We are a digital solutions company helping businesses design,
              build, and scale world-class products. From UX design to
              engineering, we bring ideas to life.
            </p>
            <Image
              src="/logos/googleLogo.png"
              alt="Google performance"
              width={100}
              height={30}
              className="h-12 w-auto mb-4"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-footer-link mb-2 dark:text-accent-mint">
              Links
            </h4>
            {[
              "About Us",
              "Services",
              "Case Studies",
              "How it works",
              "Blog",
              "Careers",
              "Areas We Serve",
            ].map((label) => (
              <a
                key={label}
                href="#"
                className="hover:text-footer-link transition-colors dark:text-white/80 dark:hover:text-accent-mint"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-footer-link mb-2 dark:text-accent-mint">
              Contact us
            </h4>
            <p className="mb-2 text-footer-text dark:text-white/80">
               Have a project in mind or need expert guidance? Let’s talk and
              explore how we can build solutions together.
            </p>
            <p className="text-footer-icon font-medium mb-4 dark:text-accent-mint">
              +908 89097 890
            </p>
            <div className="flex space-x-3 justify-end mt-10">
              {socialLinks.map(({ name, Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  aria-label={`Visit our ${name} page`}
                  className="w-9 h-9 rounded-full group shadow-md bg-white flex items-center justify-center hover:shadow-lg transition dark:bg-black dark:border dark:border-gray-700 dark:hover:bg-accent-mint dark:hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="w-4 h-4 text-footer-icon dark:text-accent-mint dark:group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-6 text-center text-xs text-footer-muted dark:border-gray-700 dark:text-white/50">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
