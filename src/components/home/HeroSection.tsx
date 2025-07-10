import { Search, TrendingUp, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export function HeroSection() {
  const trendingSearches = [
    'ChatGPT', 'Midjourney', 'Notion AI', 'Jasper', 'Stable Diffusion'
  ]

  const stats = [
    { label: 'AI Tools', value: '1,200+' },
    { label: 'Categories', value: '50+' },
    { label: 'Reviews', value: '25K+' },
    { label: 'Users', value: '100K+' }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-primary-100 text-primary-800 hover:bg-primary-200 px-4 py-2 text-sm font-medium btn-primary">
            <Sparkles className="w-4 h-4 mr-2" />
            Discover the Future of AI
          </Badge>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Find the Perfect
            <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}AI Tool
            </span>
            <br />
            for Your Next Project
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
            Discover, compare, and choose from over 1,200+ AI tools. 
            From content creation to business automation, find the perfect AI solution.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search AI tools, categories, or use cases..."
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-primary-400 focus:ring-primary-200 bg-white shadow-lg"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 px-6 py-2"
              >
                Search
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Trending Searches */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <span className="text-sm text-gray-500 mr-2 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              Trending:
            </span>
            {trendingSearches.map((search, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary-100 hover:text-primary-800 transition-colors"
              >
                {search}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}