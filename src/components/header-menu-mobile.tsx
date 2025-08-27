import React from "react";
import { navigation } from "./header.const";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HeaderMenuMobile({
  setMobileMenuOpen,
}: {
  setMobileMenuOpen: (open: boolean) => void;
}) {
  return (
    <nav
      className="lg:hidden mt-2"
      id="mobile-menu"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <div className="rounded-md border bg-white px-4 py-3 shadow-lg">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block py-3 text-sm font-medium text-header-text hover:text-header-hover focus:text-header-hover focus:outline-none focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-50 rounded transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
  <Button className="mt-4 w-full min-h-[44px] bg-header-cta dark:bg-header-cta-dark text-white rounded-[5px] font-semibold hover:opacity-90 focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-50 transition-all">
          Contact us
        </Button>
      </div>
    </nav>
  );
}
