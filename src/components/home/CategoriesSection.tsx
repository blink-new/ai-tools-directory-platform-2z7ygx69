import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export function CategoriesSection() {
  const categories = [
    {
      id: 'content-creation',
      name: 'Content Creation',
      description: 'AI tools for writing, video, audio, and creative content',
      icon: '✍️',
      gradient: 'from-purple-500 to-pink-500',
      toolCount: 145,
      popular: ['ChatGPT', 'Jasper', 'Copy.ai']
    },
    {
      id: 'image-generation',
      name: 'Image Generation',
      description: 'Create stunning visuals with AI-powered image tools',
      icon: '🎨',
      gradient: 'from-blue-500 to-cyan-500',
      toolCount: 89,
      popular: ['Midjourney', 'DALL-E', 'Stable Diffusion']
    },
    {
      id: 'productivity',
      name: 'Productivity',
      description: 'Boost efficiency with AI-powered productivity tools',
      icon: '⚡',
      gradient: 'from-green-500 to-emerald-500',
      toolCount: 203,
      popular: ['Notion AI', 'Grammarly', 'Otter.ai']
    },
    {
      id: 'business',
      name: 'Business & Finance',
      description: 'AI solutions for business automation and analysis',
      icon: '💼',
      gradient: 'from-orange-500 to-red-500',
      toolCount: 156,
      popular: ['Salesforce AI', 'QuickBooks AI', 'HubSpot']
    },
    {
      id: 'development',
      name: 'Development',
      description: 'AI-powered coding and development tools',
      icon: '💻',
      gradient: 'from-indigo-500 to-purple-500',
      toolCount: 112,
      popular: ['GitHub Copilot', 'Tabnine', 'Replit']
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'AI tools for marketing, SEO, and social media',
      icon: '📢',
      gradient: 'from-pink-500 to-rose-500',
      toolCount: 134,
      popular: ['Hootsuite AI', 'Surfer SEO', 'Canva AI']
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore AI Tools by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect AI solution for your specific needs across different industries and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900">{category.toolCount}</div>
                    <div className="text-sm text-gray-500">tools</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {category.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-500 mb-2">Popular tools:</div>
                  <div className="flex flex-wrap gap-1">
                    {category.popular.map((tool, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full justify-between group-hover:bg-primary-50 group-hover:text-primary-700 transition-colors">
                  Explore Category
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary-200 text-primary-700 hover:bg-primary-50">
            View All Categories
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}