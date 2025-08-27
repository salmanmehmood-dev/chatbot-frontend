"use client";
import { useState } from "react";
import Image from "next/image";

type TabName =
  | "Backend"
  | "Frontend"
  | "Databases"
  | "CMS"
  | "CloudTesting"
  | "DevOps";

const tabs: TabName[] = [
  "Backend",
  "Frontend",
  "Databases",
  "CMS",
  "CloudTesting",
  "DevOps",
];

const techStack: Record<TabName, { name: string; src: string }[]> = {
 Backend: [
  { name: "Node.js", src: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "PHP", src: "https://cdn.simpleicons.org/php" },
  { name: "MySQL", src: "https://cdn.simpleicons.org/mysql" },
  { name: "Java", src: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { name: ".NET Core", src: "https://cdn.simpleicons.org/dotnet" },
  { name: "Python", src: "https://cdn.simpleicons.org/python" },
  { name: "Rails", src: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg" },
  { name: "Golang", src: "https://cdn.simpleicons.org/go" },
],
Frontend: [
  { name: "React", src: "https://cdn.simpleicons.org/react" },
  { name: "Vue.js", src: "https://cdn.simpleicons.org/vuedotjs" },
  { name: "Angular", src: "https://cdn.simpleicons.org/angular" },
  { name: "Svelte", src: "https://cdn.simpleicons.org/svelte" },
  { name: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Bootstrap", src: "https://cdn.simpleicons.org/bootstrap" },
  { name: "CSS3", src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  { name: "HTML5", src: "https://cdn.simpleicons.org/html5" },
],
Databases: [
  { name: "PostgreSQL", src: "https://cdn.simpleicons.org/postgresql" },
  { name: "SQLite", src: "https://cdn.simpleicons.org/sqlite" },
  { name: "Redis", src: "https://cdn.simpleicons.org/redis" },
  { name: "Firebase", src: "https://cdn.simpleicons.org/firebase" },
  { name: "Cassandra", src: "https://cdn.simpleicons.org/apachecassandra" },
  { name: "Elasticsearch", src: "https://cdn.simpleicons.org/elasticsearch" },
  { name: "MongoDB", src: "https://cdn.simpleicons.org/mongodb" },

],
CMS: [
  { name: "WordPress", src: "https://cdn.simpleicons.org/wordpress" },
  { name: "Drupal", src: "https://cdn.simpleicons.org/drupal" },
  { name: "Joomla", src: "https://cdn.simpleicons.org/joomla" },
  { name: "Shopify", src: "https://cdn.simpleicons.org/shopify" },
],
CloudTesting: [
  { name: "AWS", src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Azure", src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "Google Cloud", src: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Docker", src: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", src: "https://cdn.simpleicons.org/kubernetes" },
],
DevOps: [
  { name: "Git", src: "https://cdn.simpleicons.org/git" },
  { name: "Jenkins", src: "https://cdn.simpleicons.org/jenkins" },
  { name: "Terraform", src: "https://cdn.simpleicons.org/terraform" },
  { name: "Ansible", src: "https://cdn.simpleicons.org/ansible" },
  { name: "CI/CD", src: "https://cdn.simpleicons.org/gitlab" }, // GitLab used as CI/CD representation
],

};

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState<TabName>("Backend");

  return (
  <section className="flex-1 w-full px-4 py-15 md:py-20 text-center justify-center items-center mb-12 dark:bg-black dark:text-white transition-colors">
      {/* Use a utility class instead of hard-coded colors */}
  <div className="mx-auto h-[0.4rem] w-20 bg-featured-gradient dark:bg-featured-gradient-dark mb-8 rounded-full" />

      <h2 className="text-4xl tracking-widest mb-4 dark:text-white">
        Our <span className="block font-bold mt-1 dark:text-accent-mint">Tech Stack</span>
      </h2>

      <div className="flex justify-center space-x-6 md:space-x-10 mb-20 flex-wrap gap-y-4" role="tablist" aria-label="Technology categories">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`tech-panel-${tab.toLowerCase()}`}
            className={`min-h-[44px] px-4 py-2 text-sm md:text-base lg:text-lg xl:text-xl font-medium border-b-2 pb-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-opacity-50 dark:focus:ring-ring-dark rounded-t ${
              activeTab === tab
                ? "text-brand-gradient dark:text-brand-gradient-dark border-brand dark:border-accent-mint"
                : "text-muted dark:text-white/60 border-transparent hover:text-foreground dark:hover:text-accent-mint"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div 
        className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-4xl mx-auto"
        role="tabpanel"
        id={`tech-panel-${activeTab.toLowerCase()}`}
        aria-labelledby={`tech-tab-${activeTab.toLowerCase()}`}
      >
        {techStack[activeTab]?.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center w-24 md:w-28 lg:w-32 xl:w-36 p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="w-full flex items-center justify-center">
              <Image
                src={tech.src}
                alt={`${tech.name} logo`}
                width={48}
                height={48}
                className="object-contain w-full"
                loading="lazy"
                sizes="48px"
              />
            </div>
            <span className="sr-only">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
