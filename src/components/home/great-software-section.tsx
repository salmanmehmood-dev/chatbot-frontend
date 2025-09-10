import Image from "next/image";

const items = [
  {
    image: "/software-image1.png",
    title: "Build the Right Team to Scale",
    desc: "Finding the right talent is never easy. We help you assemble teams that align with your culture, follow your processes, and stay long-term.",
    extra: "Our delivery model helps you cut costs and deliver within budget.",
    quote:
      "Simform quickly understood our needs and built a dedicated team that scaled with us seamlessly.",
    name: "Jeewa Markram",
    role: "CEO, TechNova",
  },
  {
    image: "/software-image2.png",
    title: "Accelerate Product Development",
    desc: "Speed is critical in today’s market. Our agile approach ensures faster releases without compromising on quality or user experience.",
    extra: "We integrate with your workflows to deliver on time, every time.",
    quote:
      "Their agile process reduced our time-to-market by half while keeping quality intact.",
    name: "Aisha Khan",
    role: "Product Head, FinEdge",
  },
  {
    image: "/software-image3.png",
    title: "Ensure Long-Term Reliability",
    desc: "Great software isn’t just about launch—it’s about stability and growth. We provide ongoing support, updates, and performance monitoring.",
    extra: "Your product evolves with your business, not against it.",
    quote:
      "Their support and reliability gave us the confidence to scale globally without downtime.",
    name: "Lucas Pereira",
    role: "CTO, HealthSync",
  },
];

export function GreatSoftwareSection() {
  return (
    <section id="aboutus" className="py-24 sm:py-32 bg-section-background dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-28">
          <div className="mx-auto h-1.5 w-20 bg-brand-gradient dark:bg-brand-gradient-dark mb-8 rounded-full" />
          <p className="text-section-subheading text-4xl sm:text-3xl mb-4 dark:text-accent-mint">Way of Building</p>
          <h2 className="text-4xl sm:text-3xl font-extrabold text-section-heading dark:text-white">Great Software</h2>
        </div>

        {/* Case Blocks */}
        <div className="space-y-20">
          {items.map((item, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row ${isReversed ? "lg:flex-row-reverse" : ""} items-center gap-12`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-section-heading mb-10 dark:text-accent-mint">{item.title}</h3>
                  <p className="text-section-body mb-10 dark:text-white/80">
                    {item.desc}
                  </p>
                   <p className="text-sm font-medium mb-10">
                    <span className="bg-clip-text text-transparent bg-text-gradient dark:bg-text-gradient-dark animate-pulse">
                      {item.extra}
                    </span>
                  </p>
                  <blockquote className="border-l-4 pl-4 border-section-quote text-sm italic text-transparent bg-clip-text bg-text-gradient dark:bg-text-gradient-dark mb-6 dark:border-accent-mint dark:text-white/70">
                    “{item.quote}”
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <Image
                      src="https://xsgames.co/randomusers/avatar.php?g=female"
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm text-section-heading dark:text-accent-mint">{item.name}</div>
                      <div className="text-section-role text-xs dark:text-white/60">{item.role}</div>
                    </div>
                  </div>
                </div>

                {/* Image with Accents */}
                <div className="relative w-full lg:w-1/2 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt="Team"
                    className="rounded-xl object-cover w-full h-auto"
                    width={600}
                    height={400}
                  />
                  <div className="absolute top-0 left-0 w-6 h-6 bg-mint-neon-gradient dark:bg-mint-neon-gradient-dark rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
