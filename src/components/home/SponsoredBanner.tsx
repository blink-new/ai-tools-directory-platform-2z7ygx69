import { Crown, ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export function SponsoredBanner() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-amber-200">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <Badge className="bg-amber-100 text-amber-800 mb-4 inline-flex items-center">
                  <Crown className="w-4 h-4 mr-2" />
                  Sponsored
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Transform Your Business with AI-Powered Analytics
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Discover how DataSense AI is helping 10,000+ businesses make data-driven decisions 
                  with powerful predictive analytics and automated insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="text-sm">
                    <Zap className="w-3 h-3 mr-1" />
                    Real-time Analytics
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Predictive Insights
                  </Badge>
                  <Badge variant="outline" className="text-sm">
                    Easy Integration
                  </Badge>
                </div>
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="md:w-1/3 md:pl-8">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">DataSense AI</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Business Intelligence Platform
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <div>
                      <div className="font-semibold text-amber-600">4.9★</div>
                      <div className="text-gray-500">Rating</div>
                    </div>
                    <div>
                      <div className="font-semibold text-amber-600">10K+</div>
                      <div className="text-gray-500">Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}