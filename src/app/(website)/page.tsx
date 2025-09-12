import { HireBanner } from "@/components/common/banner";
import { Header } from "@/components/header/header";
import { CaseStudySection } from "@/components/home/case-studies";
import { ClientsSection } from "@/components/home/client-section";
import type { Metadata } from "next";
import { ContactSection } from "@/components/home/contact-us";
import { DevelopmentApproachSection } from "@/components/home/development-approch-section";
import DevelopmentProcess from "@/components/home/development-process-section";
import FeaturedResources from "@/components/home/featured-resources-section";
import { Footer } from "@/components/home/footer";
import { GreatSoftwareSection } from "@/components/home/great-software-section";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import TechStackTabs from "@/components/home/tech-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import { TrustSection } from "@/components/home/trust-section";


export const metadata: Metadata = {
  title: "ZaufLabs",
  description: "Welcome to ZaufLabs — building world-class digital solutions.",
  icons: {
    icon: "/favicon.ico",
  },
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
        <TestimonialsSection />
        <CaseStudySection />
        <GreatSoftwareSection />
        <DevelopmentApproachSection />
        <TechStackTabs />
        <DevelopmentProcess />
        <FeaturedResources />
        <ContactSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-24">
          <HireBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
