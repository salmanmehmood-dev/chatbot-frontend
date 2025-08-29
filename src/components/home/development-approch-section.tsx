import {
  Code,
  ShieldCheck,
  Users,
  CheckCircle,
  Wand2,
  Bug,
} from "lucide-react";

const features = [
  {
    icon: <Code className="w-6 h-6 text-white" />,
    bg: "bg-gray-800",
    title: "UX Driven Engineering",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-blue-400",
    title: "Developing Shared Understanding",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <Wand2 className="w-6 h-6 text-white" />,
    bg: "bg-accent",
    title: "Proven Experience and Expertise",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    bg: "bg-teal-400",
    title: "Security & Intellectual Property (IP)",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-white" />,
    bg: "bg-yellow-400",
    title: "Code Reviews",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    icon: <Bug className="w-6 h-6 text-white" />,
    bg: "bg-brand-dark",
    title: "Quality Assurance & Testing",
    desc: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
];

export function DevelopmentApproachSection() {
  return (
    <section id="howitworks" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Accent Bar */}
  <div className="mx-auto h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />

        {/* Section Header */}
        <div className="text-center mb-24">
          <p className="text-4xl text-mutedForeground mb-4 dark:text-accent-mint">Our Design and</p>
          <h2 className="text-4xl sm:text-4xl font-bold text-foreground dark:text-white">
            Development Approach
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-xl p-6 py-15 flex items-start gap-4 hover:shadow-md transition dark:bg-gray-900 dark:border-accent-mint dark:text-white"
            >
              {/* Icon */}
              <div className={`rounded-xl p-3 ${item.bg} shrink-0`}>
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2 dark:text-accent-mint">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed dark:text-white/80">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
