import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { TrustSection } from "@/components/trust-section";
import { Footer } from "@/components/footer";
import { HireBanner } from "@/components/banner";
import { DevelopmentApproachSection } from "@/components/development-approch-section";
import { GreatSoftwareSection } from "@/components/great-software-section";
import { ClientsSection } from "@/components/client-section";
import { CaseStudySection } from "@/components/case-studies";
import TestimonialsSection from "@/components/testimonials-section";
import TechStackTabs from "@/components/tech-section";
import DevelopmentProcess from "@/components/development-process-section";
import FeaturedResources from "@/components/featured-resources-section";


export const metadata = {
  title: "My Awesome Site",
  description:
    "Welcome to My Awesome Site — explore features, blogs, and resources for developers.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-black dark:text-white">
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ClientsSection />
        {/* <WorkSection /> */}
        <TestimonialsSection />
        <CaseStudySection />
        <GreatSoftwareSection />
        <DevelopmentApproachSection />
        <TechStackTabs />
        <DevelopmentProcess />
        <FeaturedResources />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-24">
          <HireBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
