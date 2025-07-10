import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ToolCard } from '@/components/tools/ToolCard'

export function FeaturedTools() {
  const featuredTools = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'Advanced AI chatbot for conversations, content creation, and problem-solving. Powered by GPT-4 with multimodal capabilities.',
      category: 'Conversational AI',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop&crop=center',
      rating: 4.8,
      reviewCount: 12547,
      pricing: 'Freemium' as const,
      featured: true,
      tags: ['Chat', 'Content', 'Code', 'Analysis']
    },
    {
      id: '2',
      name: 'Midjourney',
      description: 'Create stunning, high-quality images from text descriptions. Perfect for artists, designers, and creative professionals.',
      category: 'Image Generation',
      logo: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=64&h=64&fit=crop&crop=center',
      rating: 4.7,
      reviewCount: 8934,
      pricing: 'Paid' as const,
      featured: true,
      tags: ['Art', 'Design', 'Images', 'Creative']
    },
    {
      id: '3',
      name: 'Notion AI',
      description: 'Enhance your productivity with AI-powered writing, summarization, and brainstorming directly in your workspace.',
      category: 'Productivity',
      logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop&crop=center',
      rating: 4.6,
      reviewCount: 5627,
      pricing: 'Freemium' as const,
      featured: true,
      tags: ['Writing', 'Notes', 'Productivity', 'Collaboration']
    },
    {
      id: '4',
      name: 'Jasper',
      description: 'AI copywriting assistant that helps create marketing copy, blog posts, and social media content at scale.',
      category: 'Content Creation',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=64&h=64&fit=crop&crop=center',
      rating: 4.5,
      reviewCount: 4253,
      pricing: 'Paid' as const,
      featured: true,
      tags: ['Copywriting', 'Marketing', 'Content', 'Business']
    },
    {
      id: '5',
      name: 'Stable Diffusion',
      description: 'Open-source AI image generator that creates detailed images from text descriptions with full control and customization.',
      category: 'Image Generation',
      logo: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=64&h=64&fit=crop&crop=center',
      rating: 4.4,
      reviewCount: 7891,
      pricing: 'Free' as const,
      featured: true,
      tags: ['Open Source', 'Images', 'Art', 'Customizable']
    },
    {
      id: '6',
      name: 'Grammarly',
      description: 'AI-powered writing assistant that helps improve grammar, style, and clarity in your writing across all platforms.',
      category: 'Writing Assistant',
      logo: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=64&h=64&fit=crop&crop=center',
      rating: 4.3,
      reviewCount: 15627,
      pricing: 'Freemium' as const,
      featured: true,
      tags: ['Grammar', 'Writing', 'Editing', 'Productivity']
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Featured Tools</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Most Popular AI Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the AI tools that are transforming how people work, create, and solve problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary-600 hover:bg-primary-700">
            View All Tools
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}