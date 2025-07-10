import { Mail, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const benefits = [
    'Weekly AI tool roundups',
    'Exclusive deals and discounts',
    'Early access to new features',
    'Industry insights and trends'
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-indigo-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with AI Innovation
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Join 50,000+ AI enthusiasts and get the latest tools, trends, and insights delivered to your inbox.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-4">What you'll get:</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-primary-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white border-0 focus:ring-2 focus:ring-primary-200"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-white text-primary-700 hover:bg-primary-50 py-3 font-semibold"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
              <p className="text-primary-200 text-sm mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-primary-200 text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-primary-200 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Weekly</div>
              <div className="text-primary-200 text-sm">Updates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">0</div>
              <div className="text-primary-200 text-sm">Spam Emails</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}