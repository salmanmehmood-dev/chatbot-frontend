"use client"

import { useState } from "react"
import { projects } from "@/data"
import Image from "next/image"
import Link from "next/link"

type TabName = "all" | "mobile" | "website" | "crypto"

const tabs: { label: string; value: TabName }[] = [
  { label: "All Projects", value: "all" },
  { label: "Mobile Apps", value: "mobile" },
  { label: "Landing Pages", value: "website" },
  { label: "Crypto", value: "crypto" },
]

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState<TabName>("all")

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.type === activeTab)

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white w-full md:py-24 py-8 flex justify-center min-h-screen">
      <div className="w-[90%] max-w-[1700px] flex flex-col gap-6">
        {/* Heading */}
        <h1 className="text-4xl mb-4 text-center font-bold text-brand dark:text-accent-mint">
          All Projects
        </h1>

        {/* Tab buttons */}
        <div className="flex justify-center space-x-6 mb-12" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              role="tab"
              aria-selected={activeTab === tab.value}
              aria-controls={`projects-panel-${tab.value}`}
              className={`px-4 py-2 text-sm md:text-base font-medium border-b-2 transition-all duration-300 focus:outline-none rounded-t ${
                activeTab === tab.value
                  ? "text-brand dark:text-accent-mint border-brand dark:border-accent-mint"
                  : "text-gray-500 dark:text-white/60 border-transparent hover:text-brand dark:hover:text-accent-mint"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          id={`projects-panel-${activeTab}`}
          role="tabpanel"
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="relative group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg transition bg-white dark:bg-gray-900"
            >
              {/* Project image */}
              <div className="relative w-full sm:h-[300px] h-[250px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <Link
                  href={`/all-projects/${p.projectId}`}
                  className="px-4 py-2 bg-brand dark:bg-accent-mint w-[230px] text-center text-white dark:text-black font-medium rounded-lg"
                >
                  View Project
                </Link>
              </div>

              {/* Project info */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-black dark:text-white">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">{p.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
