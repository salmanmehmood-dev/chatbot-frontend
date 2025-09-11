'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { navigation } from './header.const'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useDarkMode } from '@/context/DarkModeContext'
const HeaderMenuMobile = dynamic(() => import('./header-menu-mobile'), {
  ssr: false,
})

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 w-full bg-header-background border-b border-header-border shadow-nav dark:bg-black dark:border-gray-800">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 py-1 max-w-[1600px]">
        <div className="flex h-[59px] items-center justify-between ">
      
          {/* Logo */}
          <div className="flex items-center space-x-3 h-full">
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-header-text hover:text-header-hover transition-colors duration-200 dark:text-white dark:hover:text-accent-mint"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark mode toggle button */}
            <button
              aria-label="Toggle dark mode"
              onClick={toggleDarkMode}
              className="rounded-full p-2 border border-header-border bg-white dark:bg-black dark:border-gray-700 transition-colors duration-200 hover:bg-accent-mint hover:text-black dark:hover:bg-accent-mint dark:hover:text-black focus:outline-none"
            >
              {isDark ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
                  />
                </svg>
              )}
            </button>
            <Link href="#contact">
            <Button className="min-h-[44px] px-6 py-3 rounded-[5px] bg-header-cta dark:bg-header-cta-dark text-white text-sm font-semibold transition-all hover:opacity-90 focus:ring-2 focus:ring-[#FF77A5] focus:ring-opacity-50 focus:outline-none">
              Contact us
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Dark mode toggle for mobile */}
            <button
              aria-label="Toggle dark mode"
             onClick={toggleDarkMode}
              className="rounded-full p-2 border border-header-border bg-white dark:bg-black dark:border-gray-700 transition-colors duration-200 hover:bg-accent-mint hover:text-black dark:hover:bg-accent-mint dark:hover:text-black focus:outline-none"
            >
              {isDark ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
                  />
                </svg>
              )}
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 p-0 min-h-[44px] min-w-[44px]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
        {mobileMenuOpen && <HeaderMenuMobile setMobileMenuOpen={setMobileMenuOpen} />}
      </div>
    </header>
  )
}
