// export default function Home() {
//   return (
//     <h1>hello from this app</h1>
//   );
// }
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CheckCircle, Star, Users, Zap, Target, Brain, ArrowRight, Menu , Quote} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer";

export default function LandingPage() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      content: "PathAI transformed my career transition from marketing to tech. The personalized roadmap made learning React and Python so much more manageable.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager",
      company: "InnovateLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The AI recommendations are incredibly accurate. It's like having a personal tutor who knows exactly what I need to learn next.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "UX Designer",
      company: "DesignStudio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "I love how PathAI adapts to my learning pace. The progress tracking keeps me motivated and the community features make learning fun.",
      rating: 5
    }
  ]

  return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />G
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-[#FFFADC] text-[#98CD00] border-[#A4DD00] hover:bg-[#FFFADC]">
                    🚀 AI-Powered Learning Revolution
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl">
                    Build Your Perfect
                    <span className="block bg-gradient-to-r from-[#B6F500] to-[#A4DD00] bg-clip-text text-transparent">
                    Learning Roadmap
                  </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    Transform your learning journey with AI-generated personalized roadmaps. Master any skill with
                    structured paths, interactive milestones, and intelligent progress tracking.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                      size="lg"
                      className="bg-[#B6F500] hover:bg-[#A4DD00] text-black font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Learning Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-gray-200 text-gray-700 font-medium text-lg px-8 py-6 rounded-xl hover:border-[#B6F500] hover:text-[#98CD00] transition-all duration-300 bg-transparent"
                  >
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                          <div
                              key={i}
                              className="h-8 w-8 rounded-full bg-gradient-to-br from-[#B6F500] to-[#A4DD00] border-2 border-white"
                          />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">50K+ learners</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 fill-[#B6F500] text-[#B6F500]" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">4.9/5 rating</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10">
                  <Image
                      src="/ai-learning-roadmap.png"
                      alt="AI Learning Roadmap Visualization"
                      width={600}
                      height={600}
                      className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#B6F500]/20 to-[#A4DD00]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#98CD00]/20 to-[#A4DD00]/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-[#FFFADC]/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-white text-[#98CD00] border-[#A4DD00]">✨ Powerful Features</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Everything you need to
                <span className="block bg-gradient-to-r from-[#B6F500] to-[#A4DD00] bg-clip-text text-transparent">
                accelerate learning
              </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered platform combines cutting-edge technology with proven learning methodologies to create the
                ultimate educational experience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Brain,
                  title: "AI-Generated Roadmaps",
                  description:
                      "Get personalized learning paths created by advanced AI that adapts to your goals, experience level, and learning style.",
                },
                {
                  icon: Target,
                  title: "Smart Milestones",
                  description:
                      "Break down complex topics into achievable milestones with intelligent progress tracking and adaptive difficulty.",
                },
                {
                  icon: Zap,
                  title: "Interactive Learning",
                  description:
                      "Engage with dynamic content, quizzes, and hands-on projects that make learning both effective and enjoyable.",
                },
                {
                  icon: Users,
                  title: "Community Support",
                  description:
                      "Connect with fellow learners, share progress, and get help from our vibrant community of knowledge seekers.",
                },
                {
                  icon: CheckCircle,
                  title: "Progress Analytics",
                  description:
                      "Track your learning journey with detailed analytics, insights, and recommendations for continuous improvement.",
                },
                {
                  icon: Star,
                  title: "Expert Validation",
                  description:
                      "All roadmaps are reviewed by industry experts to ensure you're learning the most relevant and up-to-date skills.",
                },
              ].map((feature, index) => (
                  <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl group hover:-translate-y-1"
                  >
                    <CardHeader className="pb-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#B6F500] to-[#A4DD00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
          {/* Feature showcase */}
          <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-2xl w-[75%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">

                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our platform combines cutting-edge AI with proven learning methodologies to create the most effective educational experience possible.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#B6F500] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Adaptive learning algorithms</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#A4DD00] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Real-time progress optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#98CD00] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Collaborative learning environment</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                    src="https://mocha-cdn.com/0198901f-1777-7ba8-a8c3-5f39d7c19e0a/feature-icons.png"
                    alt="Learning features visualization"
                    className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>


        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Loved by
                <span className="bg-gradient-to-r from-[#B6F500] to-[#A4DD00] bg-clip-text text-transparent"> Learners Worldwide</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join thousands of successful learners who have transformed their careers with PathAI's personalized learning approach.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                  <div
                      key={index}
                      className="bg-gradient-to-br from-white to-[#FFFADC]/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <Quote className="w-8 h-8 text-[#B6F500]" />
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#B6F500] text-[#B6F500]" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-20 bg-gradient-to-r from-[#B6F500] to-[#A4DD00] rounded-3xl p-8 lg:p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Join Our Growing Community</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gray-900">50,000+</div>
                  <div className="text-gray-800">Active Learners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">1M+</div>
                  <div className="text-gray-800">Learning Paths</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">95%</div>
                  <div className="text-gray-800">Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-gray-800">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-[#FFFADC]/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-white text-[#98CD00] border-[#A4DD00]">💰 Simple Pricing</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Choose your
                <span className="block bg-gradient-to-r from-[#B6F500] to-[#A4DD00] bg-clip-text text-transparent">
                learning plan
              </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Start free and upgrade as you grow. All plans include our core AI-powered features.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "Free",
                  description: "Perfect for getting started",
                  features: [
                    "3 AI-generated roadmaps",
                    "Basic progress tracking",
                    "Community access",
                    "Mobile app access",
                  ],
                  cta: "Get Started Free",
                  popular: false,
                },
                {
                  name: "Pro",
                  price: "$19",
                  period: "/month",
                  description: "For serious learners",
                  features: [
                    "Unlimited roadmaps",
                    "Advanced analytics",
                    "Priority support",
                    "Expert validation",
                    "Custom milestones",
                    "Team collaboration",
                  ],
                  cta: "Start Pro Trial",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For teams and organizations",
                  features: [
                    "Everything in Pro",
                    "Custom integrations",
                    "Dedicated support",
                    "Advanced admin tools",
                    "SSO integration",
                    "Custom branding",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                  <Card
                      key={index}
                      className={`relative border-0 shadow-lg bg-white rounded-2xl ${plan.popular ? "ring-2 ring-[#B6F500] scale-105" : ""}`}
                  >
                    {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-[#B6F500] text-black font-semibold px-4 py-1">Most Popular</Badge>
                        </div>
                    )}
                    <CardHeader className="text-center pb-8 pt-8">
                      <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        {plan.period && <span className="text-gray-600">{plan.period}</span>}
                      </div>
                      <CardDescription className="text-gray-600 mt-2">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-[#B6F500] flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                      </ul>
                      <Button
                          className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                              plan.popular
                                  ? "bg-[#B6F500] hover:bg-[#A4DD00] text-black shadow-lg hover:shadow-xl"
                                  : "bg-gray-900 hover:bg-gray-800 text-white"
                          }`}
                      >
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-br from-[#B6F500] to-[#A4DD00] rounded-3xl p-12 md:p-16 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                  Ready to transform your learning journey?
                </h2>
                <p className="text-xl text-black/80 leading-relaxed">
                  Join thousands of learners who are already using AI to accelerate their growth. Start building your
                  personalized roadmap today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="max-w-md bg-white border-0 text-gray-900 placeholder:text-gray-500 py-6 px-6 rounded-xl text-lg"
                  />
                  <Button
                      size="lg"
                      className="bg-black hover:bg-gray-800 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <p className="text-sm text-black/60">No credit card required • 14-day free trial • Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
         <Footer/>
        </div>
  )
}
