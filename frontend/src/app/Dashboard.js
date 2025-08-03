"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Star, Users, Target, Calendar, DollarSign, Plus, Sparkles, TrendingUp, Globe, Camera, ArrowRight, Zap, Shield, BarChart3 } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  const handleViewInfluencers = () => {
    router.push('/influencers');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-lavender-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 px-4 py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center max-w-7xl mx-auto mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-300 to-pink-300 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-700">ViralConnect</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-600 hover:text-slate-800 transition-colors">Features</button>
            <button className="text-slate-600 hover:text-slate-800 transition-colors">Pricing</button>
            <button className="text-slate-600 hover:text-slate-800 transition-colors">About</button>
            <button className="px-6 py-2 bg-gradient-to-r from-rose-300 to-pink-300 text-white rounded-full hover:from-rose-400 hover:to-pink-400 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-rose-200">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-slate-700 text-sm font-medium">The Future of Influencer Marketing</span>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold text-slate-800 mb-8 leading-tight">
            Create <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Viral</span><br />
            Campaigns That<br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Convert</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Connect brands with top-tier influencers, manage campaigns effortlessly, and track performance with AI-powered analytics
          </p>
          <div className="flex justify-center gap-6 mb-16">
            <button 
              onClick={handleViewInfluencers}
              className="px-8 py-4 bg-gradient-to-r from-rose-300 to-pink-300 text-white text-lg font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
            >
              View Influencers
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-700 text-lg font-bold rounded-2xl hover:bg-white/80 transition-all duration-300 flex items-center gap-2" onClick={() => router.push('/campaign')}>
              View Campaigns
              <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-sky-200 min-w-48">
              <div className="flex items-center justify-center gap-3 text-slate-700 mb-2">
                <Users className="w-8 h-8 text-sky-400" />
                <span className="text-4xl font-bold">10K+</span>
              </div>
              <p className="text-slate-500 text-lg">Active Influencers</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-emerald-200 min-w-48">
              <div className="flex items-center justify-center gap-3 text-slate-700 mb-2">
                <Target className="w-8 h-8 text-emerald-400" />
                <span className="text-4xl font-bold">5K+</span>
              </div>
              <p className="text-slate-500 text-lg">Campaigns Launched</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-rose-200 min-w-48">
              <div className="flex items-center justify-center gap-3 text-slate-700 mb-2">
                <TrendingUp className="w-8 h-8 text-rose-400" />
                <span className="text-4xl font-bold">98%</span>
              </div>
              <p className="text-slate-500 text-lg">Success Rate</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 border border-amber-200 min-w-48">
              <div className="flex items-center justify-center gap-3 text-slate-700 mb-2">
                <DollarSign className="w-8 h-8 text-amber-400" />
                <span className="text-4xl font-bold">$100M+</span>
              </div>
              <p className="text-slate-500 text-lg">Revenue Generated</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-20">
          {/* Features Section */}
          <section className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Everything You Need to <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Dominate</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-16">
              Our platform combines cutting-edge technology with intuitive design to deliver unmatched results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-300 to-pink-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">AI-Powered Matching</h3>
                <p className="text-slate-600 text-lg">Our advanced algorithm matches brands with perfect influencers based on audience demographics, engagement rates, and brand alignment.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-sky-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-300 to-blue-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Real-Time Analytics</h3>
                <p className="text-slate-600 text-lg">Track campaign performance with detailed analytics, engagement metrics, and ROI calculations in real-time dashboards.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-emerald-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-300 to-green-300 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Secure Payments</h3>
                <p className="text-slate-600 text-lg">Automated payment processing with escrow protection ensures secure transactions for both brands and influencers.</p>
              </div>
            </div>
          </section>

          {/* Top Influencers Showcase */}
          <section className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-slate-200 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                Meet Our <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Top Creators</span>
              </h2>
              <p className="text-xl text-slate-600">Connect with influencers who drive real results</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Sarah Chen</h3>
                    <p className="text-slate-600">@sarahfashion</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-600">Fashion & Lifestyle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-600">2.1M followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-600">8.5% engagement</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sky-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-300 to-blue-300 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Alex Rivera</h3>
                    <p className="text-slate-600">@techwithalex</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-600">Tech & Gaming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-600">1.8M followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-600">12.3% engagement</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">Maya Patel</h3>
                    <p className="text-slate-600">@mayawellness</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-600">Health & Fitness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-600">950K followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-600">15.7% engagement</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">David Kim</h3>
                    <p className="text-slate-600">@davidtravel</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-600">Travel & Adventure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400" />
                    <span className="text-slate-600">1.3M followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-slate-600">9.8% engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-slate-200 shadow-lg">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Success</span> Stories
              </h2>
              <p className="text-xl text-slate-600">See how brands achieve incredible results with our platform</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-sky-200 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-300 to-blue-300 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">TechStart Launch</h3>
                    <p className="text-slate-600">Product Launch Campaign</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">500%</div>
                    <div className="text-slate-600">ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-400">2.5M</div>
                    <div className="text-slate-600">Reach</div>
                  </div>
                </div>
                <p className="text-slate-600">&quot;ViralConnect helped us reach our target audience with precision. The campaign exceeded all expectations!&quot;</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-rose-200 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">FashionForward</h3>
                    <p className="text-slate-600">Brand Awareness Campaign</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400">300%</div>
                    <div className="text-slate-600">Sales Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-400">1.8M</div>
                    <div className="text-slate-600">Engagement</div>
                  </div>
                </div>
                <p className="text-slate-600">&quot;The influencer matching was perfect. Our brand visibility skyrocketed and sales followed suit!&quot;</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-rose-200/50 to-pink-200/50 backdrop-blur-lg rounded-3xl p-16 border border-rose-200">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Ready to Go <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Viral?</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-12">
              Join thousands of brands and influencers who trust ViralConnect to create campaigns that convert
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-12 py-6 bg-gradient-to-r from-rose-300 to-pink-300 text-white text-xl font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3">
                View Influencers
                <ArrowRight className="w-6 h-6" />
              </button>
              <button className="px-12 py-6 bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-700 text-xl font-bold rounded-2xl hover:bg-white/80 transition-all duration-300" onClick={() => router.push('/campaign')}>
                View Campaigns
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}