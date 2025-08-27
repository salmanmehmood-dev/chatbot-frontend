import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-16 pb-20 sm:pt-24 sm:pb-32 dark:bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="mb-16">
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-light text-foreground leading-tight mb-6 dark:text-white">
                  Great <span className="text-highlight-software dark:text-accent-mint">software</span> is
                  <span className="block font-extrabold mt-2">
                    built by great <span className="text-highlight-teams dark:text-accent-mint">teams</span>
                  </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-2xl mb-10 dark:text-white/80">
                  We help build and manage a team of world-class developers
                  <br />
                  to bring your vision to life
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="min-h-[44px] px-8 py-3 rounded-md text-white text-sm font-semibold shadow-lg bg-brand-gradient dark:bg-mint-neon-gradient-dark hover:opacity-90 focus:ring-2 focus:ring-ring-dark focus:ring-opacity-50 focus:outline-none transition-all dark:text-white"
                    aria-label="Start your project with our team"
                  >
                    Let&apos;s get started!
                  </button>

                  {/* Secondary button can be optionally added */}
                  {/*
                  <button className="border border-gray-300 text-muted hover:bg-gray-100 px-6 py-3 rounded-md text-sm font-medium dark:border-gray-700 dark:text-white/80 dark:hover:bg-gray-900">
                    Learn More
                  </button>
                  */}
                </div>
              </div>
            </div>

            {/* Right Content - Workspace Illustration */}
            <div className="flex justify-center">
              <Image
                src="/web-dev.webp"
                alt="Workspace illustration showing team collaboration and development"
                width={500}
                height={500}
                className="max-w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
