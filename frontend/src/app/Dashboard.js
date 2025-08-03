import React from 'react';
import { Star, Users, Target, Calendar, DollarSign, Plus, Sparkles, TrendingUp, Globe, Camera } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">Influencer Marketing Platform</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Viral</span> Campaigns
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Connect brands with top influencers and track campaign performance in real-time
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="font-semibold">2</span>
                <span className="text-white/70">Influencers</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <Target className="w-5 h-5 text-green-400" />
                <span className="font-semibold">2</span>
                <span className="text-white/70">Campaigns</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center gap-2 text-white">
                <TrendingUp className="w-5 h-5 text-pink-400" />
                <span className="font-semibold">98%</span>
                <span className="text-white/70">Success Rate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Add Influencer Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Add New Influencer</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Influencer Name</label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Enter name..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Category</label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Fashion, Lifestyle, Tech..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Instagram Handle</label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="@username"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Followers</label>
                <input
                  type="number"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="1000000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Location</label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="New York, USA"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-2xl hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Add Influencer
                </button>
              </div>
            </form>
          </div>

          {/* Create Campaign Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Create New Campaign</h2>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Brand Name</label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Nike, Apple, etc..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Campaign Objective</label>
                <input
                  type="text"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Brand awareness, sales..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Budget ($)</label>
                <input
                  type="number"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="50000"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">Start Date</label>
                <input
                  type="date"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80 font-medium">End Date</label>
                <input
                  type="date"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Create Campaign
                </button>
              </div>
            </form>
          </div>

          {/* Influencers Grid */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Top Influencers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample Influencer 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">John Doe</h3>
                    <p className="text-white/70">@johndoe</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/80">Fashion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80">850,000 followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-400" />
                    <span className="text-white/80">New York</span>
                  </div>
                </div>
              </div>

              {/* Sample Influencer 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Emma Smith</h3>
                    <p className="text-white/70">@emmasmith</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/80">Lifestyle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80">1,200,000 followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-400" />
                    <span className="text-white/80">Los Angeles</span>
                  </div>
                </div>
              </div>

              {/* Sample Influencer 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">James Brown</h3>
                    <p className="text-white/70">@jamesbrown</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/80">Tech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80">680,000 followers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-green-400" />
                    <span className="text-white/80">San Francisco</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaigns Overview */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Active Campaigns</h2>
            </div>
            <div className="space-y-6">
              {/* Sample Campaign 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Summer Collection</h3>
                    <p className="text-white/70">Fashion Co.</p>
                  </div>
                  <div className="px-4 py-2 rounded-full text-sm font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    Active
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80 text-sm">Promote summer fashion collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-white/80 text-sm">$500,000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80 text-sm">2025-06-01</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80 text-sm">2025-09-01</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Assigned Influencers:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30">John Doe</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30">Emma Smith</span>
                  </div>
                </div>
              </div>

              {/* Sample Campaign 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Winter Collection</h3>
                    <p className="text-white/70">Winterwear Inc.</p>
                  </div>
                  <div className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Upcoming
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80 text-sm">Market winter clothing line</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-white/80 text-sm">$300,000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80 text-sm">2025-11-01</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80 text-sm">2025-12-31</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Assigned Influencers:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30">James Brown</span>
                    <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30">Sophia Lee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}