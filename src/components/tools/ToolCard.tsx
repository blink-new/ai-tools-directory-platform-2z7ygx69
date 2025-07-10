import { Star, Bookmark, ExternalLink, Crown, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ToolCardProps {
  tool: {
    id: string
    name: string
    description: string
    category: string
    logo: string
    rating: number
    reviewCount: number
    pricing: 'Free' | 'Freemium' | 'Paid'
    featured?: boolean
    sponsored?: boolean
    tags: string[]
  }
}

export function ToolCard({ tool }: ToolCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case 'Free':
        return 'bg-green-100 text-green-800'
      case 'Freemium':
        return 'bg-blue-100 text-blue-800'
      case 'Paid':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {/* Sponsored Badge */}
      {tool.sponsored && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-amber-100 text-amber-800 text-xs">
            <Crown className="w-3 h-3 mr-1" />
            Sponsored
          </Badge>
        </div>
      )}

      {/* Featured Badge */}
      {tool.featured && !tool.sponsored && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-purple-100 text-purple-800 text-xs">
            <Zap className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        </div>
      )}

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src={tool.logo} 
                alt={tool.name}
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.nextElementSibling?.setAttribute('style', 'display: block')
                }}
              />
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ display: 'none' }}>
                {tool.name.charAt(0)}
              </div>
            </div>
            <div>
              <CardTitle className="text-lg font-semibold group-hover:text-primary-600 transition-colors">
                {tool.name}
              </CardTitle>
              <Badge variant="secondary" className="text-xs mt-1">
                {tool.category}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <CardDescription className="text-sm text-gray-600 mb-4 line-clamp-3">
          {tool.description}
        </CardDescription>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex">
            {renderStars(tool.rating)}
          </div>
          <span className="text-sm text-gray-600">
            {tool.rating} ({tool.reviewCount} reviews)
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs px-2 py-1">
              {tag}
            </Badge>
          ))}
          {tool.tags.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-1">
              +{tool.tags.length - 3} more
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Badge className={`text-xs ${getPricingColor(tool.pricing)}`}>
            {tool.pricing}
          </Badge>
          <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Tool
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}