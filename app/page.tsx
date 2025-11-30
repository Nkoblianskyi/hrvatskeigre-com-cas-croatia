import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RankingsSection } from "@/components/rankings-section"
import { AboutSection } from "@/components/about-section"
import { ResponsibleGamingSection } from "@/components/responsible-gaming-section"
import { GuideSection } from "@/components/guide-section"
import { OurChoiceSection } from "@/components/our-choice-section"
import { Footer } from "@/components/footer"
import { WelcomeModal } from "@/components/welcome-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WelcomeModal />
      <Header />
      <main>
        <HeroSection />
        <RankingsSection />
        <AboutSection />
        <ResponsibleGamingSection />
        <GuideSection />
        <OurChoiceSection />
      </main>
      <Footer />
    </div>
  )
}
