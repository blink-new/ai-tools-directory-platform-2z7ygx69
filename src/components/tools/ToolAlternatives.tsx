import { ToolCard } from './ToolCard'

const alternatives = [
  {
    id: '2',
    name: 'Claude AI',
    description: 'AI assistant for business and productivity.',
    category: 'Conversational AI',
    logo: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=64&h=64&fit=crop&crop=center',
    rating: 4.6,
    reviewCount: 3200,
    pricing: 'Freemium',
    tags: ['Chat', 'Business', 'Productivity'],
    featured: false,
    sponsored: false,
  },
  {
    id: '3',
    name: 'Bard',
    description: 'Google’s conversational AI for research and creativity.',
    category: 'Conversational AI',
    logo: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=64&h=64&fit=crop&crop=center',
    rating: 4.5,
    reviewCount: 2100,
    pricing: 'Free',
    tags: ['Chat', 'Research', 'Google'],
    featured: false,
    sponsored: false,
  },
  {
    id: '4',
    name: 'YouChat',
    description: 'Conversational AI with web search integration.',
    category: 'Conversational AI',
    logo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=64&h=64&fit=crop&crop=center',
    rating: 4.3,
    reviewCount: 1100,
    pricing: 'Free',
    tags: ['Chat', 'Web Search'],
    featured: false,
    sponsored: false,
  },
]

export function ToolAlternatives() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Alternatives</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {alternatives.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}
