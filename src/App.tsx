import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedTools } from '@/components/home/FeaturedTools'
import { CategoriesSection } from '@/components/home/CategoriesSection'
import { SponsoredBanner } from '@/components/home/SponsoredBanner'
import { NewsletterSignup } from '@/components/home/NewsletterSignup'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTools />
        <CategoriesSection />
        <SponsoredBanner />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}

export default App