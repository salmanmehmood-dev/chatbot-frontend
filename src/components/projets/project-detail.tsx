import Image from "next/image"
import { projects } from "@/data"
import { FaReact, FaPython, FaDatabase } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSolidity,
  SiWeb3Dotjs,
  SiEthereum,
  SiIpfs,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiContentful,
  SiNodedotjs,
  SiWebrtc,
} from "react-icons/si"
import { JSX } from "react"
import Link from "next/link"

interface ProjectDetailProps {
  projectId: string
}

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-sky-400 text-2xl" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white text-2xl" />,
  Tailwind: <SiTailwindcss className="text-teal-400 text-2xl" />,
  Solidity: <SiSolidity className="text-gray-600 dark:text-gray-400 text-2xl" />,
  "Web3.js": <SiWeb3Dotjs className="text-yellow-500 text-2xl" />,
  Ethereum: <SiEthereum className="text-blue-500 text-2xl" />,
  IPFS: <SiIpfs className="text-pink-500 text-2xl" />,
  "Node.js": <SiNodedotjs className="text-green-600 text-2xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-600 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-2xl" />,
  Firebase: <SiFirebase className="text-yellow-500 text-2xl" />,
  Contentful: <SiContentful className="text-blue-500 text-2xl" />,
  Python: <FaPython className="text-yellow-500 text-2xl" />,
  WebRTC: <SiWebrtc className="text-red-500 text-2xl" />,
  Database: <FaDatabase className="text-gray-600 dark:text-gray-400 text-2xl" />,
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId }) => {
  const project = projects.find((p) => p.projectId === projectId)
  if (!project) return <p className="text-red-500">Project not found.</p>

  return (
    <div className="lg:px-12 px-6 py-8 md:py-20 flex flex-col sm:gap-20 gap-10 bg-white dark:bg-black text-black dark:text-white">
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-brand dark:text-accent-mint mb-4">
            {project.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            {project.description}
          </p>
          <Link
            href={project.link}
            target="_blank"
            className="inline-block w-fit bg-brand dark:bg-accent-mint text-white dark:text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            View Website
          </Link>
        </div>
        {/* Right */}
        <div className="relative w-full h-[350px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Overview */}
      <div className="mt-12 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Project Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* Problems & Goals */}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold">Problem Solving</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2.5">
            {project.problems.map((problem, idx) => (
              <li key={idx}>{problem}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-semibold">Goals</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-2.5">
            {project.goals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-10 flex flex-col gap-6">
        <h3 className="text-xl font-semibold">Tech Stack</h3>
        <div className="flex flex-wrap gap-4">
          {project.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-900 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {techIcons[tech] ?? null}
              <span className="text-gray-800 dark:text-gray-300">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
