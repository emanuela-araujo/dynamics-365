import { Header } from "@/components/portfolio/header"
import { HeroSection } from "@/components/portfolio/hero-section"
import { CaseStudySection } from "@/components/portfolio/case-study-section"
import { ArchitectureSection } from "@/components/portfolio/architecture-section"
import { InterfaceSection } from "@/components/portfolio/interface-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CaseStudySection />
        <ArchitectureSection />
        <InterfaceSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  )
}
