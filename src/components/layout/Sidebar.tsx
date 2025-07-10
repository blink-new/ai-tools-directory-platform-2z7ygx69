import { Crown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function Sidebar() {
  const promotedTools = [
    {
      id: '1',
      name: 'Synth AI',
      description: 'Generate high-quality audio with AI voice synthesis.',
      logo: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=64&h=64&fit=crop&crop=center',
      category: 'Audio Generation'
    },
    {
      id: '2',
      name: 'CodeGenius',
      description: 'AI-powered code completion and generation.',
      logo: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=64&h=64&fit=crop&crop=center',
      category: 'Development'
    },
    {
      id: '3',
      name: 'MarketMage',
      description: 'Automate your marketing campaigns with AI.',
      logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=64&h=64&fit=crop&crop=center',
      category: 'Marketing'
    }
  ]

  return (
    <aside className="w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Crown className="w-5 h-5 mr-2 text-primary" />
            Promoted Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {promotedTools.map((tool) => (
            <div key={tool.id} className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      <Button className="w-full">
        Advertise with us
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </aside>
  )
}