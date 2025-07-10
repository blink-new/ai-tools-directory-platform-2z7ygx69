import { Sidebar } from '@/components/layout/Sidebar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, ExternalLink, Video, Layers, Tag, Users, Globe } from 'lucide-react'
import { ToolDetailTabs } from '@/components/tools/ToolDetailTabs'
import { ToolAlternatives } from '@/components/tools/ToolAlternatives'
import { ToolVideo } from '@/components/tools/ToolVideo'

// Mock tool data (replace with API later)
const tool = {
  name: 'ChatGPT',
  logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=64&h=64&fit=crop&crop=center',
  category: 'Conversational AI',
  description: 'Advanced AI chatbot for conversations, content creation, and problem-solving. Powered by GPT-4 with multimodal capabilities.',
  features: [
    'Conversational AI',
    'Content generation',
    'Code writing',
    'Web search',
    'Image understanding',
    'API access',
  ],
  pricing: [
    { plan: 'Free', price: '$0', features: ['Basic chat', 'Limited usage'] },
    { plan: 'Plus', price: '$20/mo', features: ['Priority access', 'GPT-4', 'Faster responses'] },
  ],
  rating: 4.8,
  reviewCount: 12547,
  video: 'https://www.youtube.com/embed/2F3pLzK6pL8',
  website: 'https://chat.openai.com/',
  tags: ['Chat', 'Content', 'Code', 'Analysis'],
  useCases: ['Customer support', 'Content creation', 'Learning assistant'],
  integrations: ['Zapier', 'Slack', 'Notion'],
  pros: ['Very easy to use', 'Accurate answers', 'Fast responses'],
  cons: ['Sometimes makes mistakes', 'Limited context window'],
}

export function ToolDetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-3">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-8">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={tool.logo} alt={tool.name} className="w-16 h-16 object-contain" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                {tool.name}
                <Badge className="ml-3 bg-primary-100 text-primary-700 text-xs">Featured</Badge>
              </h1>
              <div className="flex items-center space-x-3 mb-2">
                <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="font-semibold text-gray-800">{tool.rating}</span>
                  <span className="text-gray-500 ml-1">({tool.reviewCount} reviews)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                {tool.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="text-xs px-2 py-1">{tag}</Badge>
                ))}
              </div>
              <Button asChild className="mt-2 bg-primary hover:bg-primary/90">
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Tool
                </a>
              </Button>
            </div>
          </div>

          <Card className="mb-8 p-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 mb-4">{tool.description}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-primary font-medium">
                <Video className="w-4 h-4 mr-1" />
                Video Demo
              </div>
              <div className="flex items-center text-primary font-medium">
                <Layers className="w-4 h-4 mr-1" />
                Features
              </div>
              <div className="flex items-center text-primary font-medium">
                <Tag className="w-4 h-4 mr-1" />
                Use Cases
              </div>
              <div className="flex items-center text-primary font-medium">
                <Users className="w-4 h-4 mr-1" />
                Reviews
              </div>
              <div className="flex items-center text-primary font-medium">
                <Globe className="w-4 h-4 mr-1" />
                Integrations
              </div>
            </div>
            <ToolVideo videoUrl={tool.video} />
          </Card>

          <Card className="mb-8 p-6">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {tool.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </Card>

          <Card className="mb-8 p-6">
            <h2 className="text-xl font-semibold mb-4">Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tool.pricing.map((plan, i) => (
                <div key={i} className="border rounded-xl p-4">
                  <div className="font-bold text-lg text-primary mb-2">{plan.plan}</div>
                  <div className="text-2xl font-bold mb-2">{plan.price}</div>
                  <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                    {plan.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <ToolDetailTabs tool={tool} />

          <ToolAlternatives />
        </main>
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default ToolDetailPage
