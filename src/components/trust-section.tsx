import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function TrustSection() {
  return (
    <section className="bg-background py-20 px-4 sm:px-8 lg:px-16 dark:bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Text Section */}
        <div className="lg:w-[90%]">
          <div className="h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />
          <h2 className="text-4xl sm:text-3xl xs:text-2xl font text-headline mb-8 leading-relaxed dark:text-accent-mint">
            Leading companies trust us <br />
            <span className="font-extrabold dark:text-white">to develop software</span>
          </h2>
          <p className="text-subtext text-left text-base sm:text-lg mb-6 leading-loose dark:text-white/80">
            We{" "}
            <span className="text-highlight font-medium dark:text-accent-mint">
              add development capacity
            </span>{" "}
            to tech teams. Our value isn&apos;t limited to building teams but is
            equally distributed across the project lifecycle. We are a custom
            software development company that guarantees the successful delivery
            of your project.
          </p>

          <a
            href="#"
            className="text-link font-semibold text-sm sm:text-base inline-flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded transition-all dark:text-accent-mint"
          >
            See more Informations <ArrowRight className="ml-2 w-4 h-4 dark:text-accent-mint" />
          </a>
        </div>

        {/* Right Image Section */}
        <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/about-us.png"
            alt="Team collaboration and software development process"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
