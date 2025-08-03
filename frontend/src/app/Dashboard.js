"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { Star, Users, Target, Calendar, DollarSign, Plus, Sparkles, TrendingUp, Globe, Camera, ArrowRight, Zap, Shield, BarChart3, Menu } from 'lucide-react';

export default function LandingPage() {
  const router = useRouter();

  const handleViewInfluencers = () => {
    router.push('/influencers');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-48 h-48 sm:w-72 sm:h-72 bg-lavender-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-8 sm:left-40 w-48 h-48 sm:w-72 sm:h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Navigation */}
        <nav className="flex justify-between items-center max-w-7xl mx-auto mb-8 sm:mb-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-rose-300 to-pink-300 rounded-xl flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-slate-700">ViralConnect</span>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-600 hover:text-slate-800 transition-colors">Features</button>
            <button className="text-slate-600 hover:text-slate-800 transition-colors">Pricing</button>
            <button className="text-slate-600 hover:text-slate-800 transition-colors">About</button>
            <button className="px-6 py-2 bg-gradient-to-r from-rose-300 to-pink-300 text-white rounded-full hover:from-rose-400 hover:to-pink-400 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
        </nav>

        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 border border-rose-200">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            <span className="text-slate-700 text-xs sm:text-sm font-medium">The Future of Influencer Marketing</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-800 mb-6 sm:mb-8 leading-tight px-2">
            Create <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Viral</span><br />
            Campaigns That<br />
            <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Convert</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            Connect brands with top-tier influencers, manage campaigns effortlessly, and track performance with AI-powered analytics
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
            <button 
              onClick={handleViewInfluencers}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-300 to-pink-300 text-white text-lg font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              View Influencers
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-700 text-lg font-bold rounded-2xl hover:bg-white/80 transition-all duration-300 flex items-center justify-center gap-2" onClick={() => router.push('/campaign')}>
              View Campaigns
              <div className="w-3 h-3 bg-slate-400 rounded-full animate-pulse"></div>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-sky-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-slate-700 mb-2">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">10K+</span>
              </div>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg">Active Influencers</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-emerald-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-slate-700 mb-2">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">5K+</span>
              </div>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg">Campaigns Launched</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-rose-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-slate-700 mb-2">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">98%</span>
              </div>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg">Success Rate</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-amber-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-slate-700 mb-2">
                <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">$100M+</span>
              </div>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg">Revenue Generated</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
          {/* Features Section */}
          <section className="text-center mb-12 sm:mb-20 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Everything You Need to <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Dominate</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-12 sm:mb-16">
              Our platform combines cutting-edge technology with intuitive design to deliver unmatched results
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-300 to-pink-300 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">AI-Powered Matching</h3>
                <p className="text-slate-600 text-base sm:text-lg">Our advanced algorithm matches brands with perfect influencers based on audience demographics, engagement rates, and brand alignment.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-sky-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-sky-300 to-blue-300 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Real-Time Analytics</h3>
                <p className="text-slate-600 text-base sm:text-lg">Track campaign performance with detailed analytics, engagement metrics, and ROI calculations in real-time dashboards.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-300 to-green-300 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">Secure Payments</h3>
                <p className="text-slate-600 text-base sm:text-lg">Automated payment processing with escrow protection ensures secure transactions for both brands and influencers.</p>
              </div>
            </div>
          </section>

          {/* Top Influencers Showcase */}
          <section className="bg-white/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-lg mx-4 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                Meet Our <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Top Creators</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">Connect with influencers who drive real results</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-rose-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">Sarah Chen</h3>
                    <p className="text-slate-600 text-sm sm:text-base">@sarahfashion</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                    <span className="text-slate-600 text-sm sm:text-base">Fashion & Lifestyle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
                    <span className="text-slate-600 text-sm sm:text-base">2.1M followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-slate-600 text-sm sm:text-base">8.5% engagement</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-sky-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-sky-300 to-blue-300 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">Alex Rivera</h3>
                    <p className="text-slate-600 text-sm sm:text-base">@techwithalex</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                    <span className="text-slate-600 text-sm sm:text-base">Tech & Gaming</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
                    <span className="text-slate-600 text-sm sm:text-base">1.8M followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-slate-600 text-sm sm:text-base">12.3% engagement</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-300 to-green-300 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">Maya Patel</h3>
                    <p className="text-slate-600 text-sm sm:text-base">@mayawellness</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                    <span className="text-slate-600 text-sm sm:text-base">Health & Fitness</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
                    <span className="text-slate-600 text-sm sm:text-base">950K followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-slate-600 text-sm sm:text-base">15.7% engagement</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-orange-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">David Kim</h3>
                    <p className="text-slate-600 text-sm sm:text-base">@davidtravel</p>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                    <span className="text-slate-600 text-sm sm:text-base">Travel & Adventure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 text-sky-400" />
                    <span className="text-slate-600 text-sm sm:text-base">1.3M followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-slate-600 text-sm sm:text-base">9.8% engagement</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Success Stories */}
          <section className="bg-white/60 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-lg mx-4 sm:mx-0">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Success</span> Stories
              </h2>
              <p className="text-lg sm:text-xl text-slate-600">See how brands achieve incredible results with our platform</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-sky-200 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-sky-300 to-blue-300 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">TechStart Launch</h3>
                    <p className="text-slate-600 text-sm sm:text-base">Product Launch Campaign</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400">500%</div>
                    <div className="text-slate-600 text-sm sm:text-base">ROI Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-sky-400">2.5M</div>
                    <div className="text-slate-600 text-sm sm:text-base">Reach</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm sm:text-base">&quot;ViralConnect helped us reach our target audience with precision. The campaign exceeded all expectations!&quot;</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-rose-200 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">FashionForward</h3>
                    <p className="text-slate-600 text-sm sm:text-base">Brand Awareness Campaign</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400">300%</div>
                    <div className="text-slate-600 text-sm sm:text-base">Sales Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-rose-400">1.8M</div>
                    <div className="text-slate-600 text-sm sm:text-base">Engagement</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm sm:text-base">&quot;The influencer matching was perfect. Our brand visibility skyrocketed and sales followed suit!&quot;</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-rose-200/50 to-pink-200/50 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-8 sm:p-16 border border-rose-200 mx-4 sm:mx-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Ready to Go <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Viral?</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 sm:mb-12">
              Join thousands of brands and influencers who trust ViralConnect to create campaigns that convert
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <button className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-rose-300 to-pink-300 text-white text-lg sm:text-xl font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3">
                View Influencers
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button className="px-8 sm:px-12 py-4 sm:py-6 bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-700 text-lg sm:text-xl font-bold rounded-2xl hover:bg-white/80 transition-all duration-300" onClick={() => router.push('/campaign')}>
                View Campaigns
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}