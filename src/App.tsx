import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Sidebar } from '@/components/layout/Sidebar'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedTools } from '@/components/home/FeaturedTools'
import { CategoriesSection } from '@/components/home/CategoriesSection'
import { SponsoredBanner } from '@/components/home/SponsoredBanner'
import { NewsletterSignup } from '@/components/home/NewsletterSignup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToolDetailPage from '@/pages/ToolDetailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <main className="lg:col-span-3">
                  <HeroSection />
                  <FeaturedTools />
                  <CategoriesSection />
                  <SponsoredBanner />
                  <NewsletterSignup />
                </main>
                <div className="lg:col-span-1">
                  <Sidebar />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        } />
        <Route path="/tool/:slug" element={<ToolDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App