import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data" // ✅ use the same dataset

export function CaseStudySection() {

  const featuredIds = ["wash-man", "numbl", "happy-tourist"]
  const recentProjects = projects.filter((p) => featuredIds.includes(p.projectId))

  return (
    <section id="casestudies" className="py-24 sm:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />

        {/* Header */}
        <div className="text-center mb-28">
          <h2 className="text-4xl text-mutedForeground mb-4 dark:text-accent-mint">Our Recent</h2>
          <h1 className="text-4xl sm:text-4xl font-bold text-foreground dark:text-white">
            Success Stories
          </h1>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8">
          {recentProjects.map((item, idx) => (
            <div
              key={item.projectId}
              className="rounded-2xl overflow-hidden flex flex-col lg:flex-row bg-gray-100 dark:bg-gray-900"
            >
              {/* Image */}
              <div className="relative w-full aspect-video lg:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
                <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-foreground sm:mb-12 mb-6 dark:text-accent-mint">
                  {item.title}
                </h3>
                <p className="sm:text-base text-sm text-muted leading-relaxed mb-6 lg:mb-20 dark:text-white/90">
                  {item.overview}
                </p>
                {/* ✅ Internal Link to detail page */}
                <Link
                  href={`/all-projects/${item.projectId}`}
                  className="justify-end text-sm font-medium text-transparent bg-clip-text bg-brand-gradient hover:underline inline-flex items-center"
                >
                  Read more <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-right mt-12">
          <Link
            href="/all-projects"
            className="min-h-[56px] px-8 py-3 rounded-md text-white text-sm font-semibold shadow-lg bg-brand-gradient dark:bg-mint-neon-gradient-dark hover:opacity-90 focus:ring-2 focus:ring-ring-dark focus:ring-opacity-50 focus:outline-none transition-all dark:text-white"
          >
            Read more case studies &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
