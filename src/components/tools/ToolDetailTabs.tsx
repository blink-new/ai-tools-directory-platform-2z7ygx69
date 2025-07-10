import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Star } from 'lucide-react'

export function ToolDetailTabs({ tool }: { tool: any }) {
  return (
    <Tabs defaultValue="reviews" className="mb-8">
      <TabsList className="mb-4">
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="pros">Pros & Cons</TabsTrigger>
        <TabsTrigger value="usecases">Use Cases</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
      </TabsList>
      <TabsContent value="reviews">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-gray-800">{tool.rating}</span>
            <span className="text-gray-500">({tool.reviewCount} reviews)</span>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="font-semibold mb-1">“Amazing AI assistant!”</div>
            <div className="text-gray-700 text-sm mb-1">ChatGPT has changed the way I work. Highly recommended!</div>
            <div className="text-xs text-gray-400">by Jane Doe</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="font-semibold mb-1">“Great for content creation”</div>
            <div className="text-gray-700 text-sm mb-1">I use it daily for blog posts and emails.</div>
            <div className="text-xs text-gray-400">by John Smith</div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="pros">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold mb-2 text-green-700">Pros</div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {tool.pros.map((pro: string, i: number) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-red-700">Cons</div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              {tool.cons.map((con: string, i: number) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="usecases">
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {tool.useCases.map((uc: string, i: number) => (
            <li key={i}>{uc}</li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="integrations">
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {tool.integrations.map((int: string, i: number) => (
            <li key={i}>{int}</li>
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  )
}
