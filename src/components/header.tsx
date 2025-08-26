"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navigation } from "./header.const";
import dynamic from "next/dynamic";
const HeaderMenuMobile = dynamic(() => import("./header-menu-mobile"), {
  ssr: false,
});

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-header-background border-b border-header-border shadow-nav">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-1">
        <div className="flex h-[59px] items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center space-x-3 h-full">
            <Link href="/" className="flex items-center space-x-2 h-full">
              <Image
                src="/logos/Logo.png"
                alt="Logo"
                width={160}
                height={48}
                className="object-contain h-16 w-auto pt-4"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-header-text hover:text-header-hover transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button className="min-h-[44px] px-6 py-3 rounded-[5px] bg-header-cta text-white text-sm font-semibold transition-all hover:opacity-90 focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-50 focus:outline-none">
              Contact us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 p-0 min-h-[44px] min-w-[44px]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <HeaderMenuMobile setMobileMenuOpen={setMobileMenuOpen} />
        )}
      </div>
    </header>
  );
}
