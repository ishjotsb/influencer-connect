"use client"
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Target, Calendar, DollarSign, TrendingUp, Plus, Sparkles, Loader2, Briefcase, X, Users, Instagram, Youtube, Twitter } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CampaignPage() {
  const router = useRouter();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showInfluencersModal, setShowInfluencersModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [influencers, setInfluencers] = useState([]);
  const [loadingInfluencers, setLoadingInfluencers] = useState(false);
  const [newCampaign, setNewCampaign] = useState({
    brand: '',
    objective: '',
    budget: '',
    startDate: '',
    endDate: ''
  });

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Fetch campaigns from API
  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/campaigns`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCampaigns(data.data);
      } else {
        console.error('Failed to fetch campaigns');
      }
    } catch (error) {
      console.error('Error fetching campaigns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewInfluencers = (campaign) => {
    setSelectedCampaign(campaign);
    setShowInfluencersModal(true);
    
    // Fetch influencers data when modal opens
    if (campaign.influencerIds && campaign.influencerIds.length > 0) {
      setInfluencers(campaign.influencerIds);
      setLoadingInfluencers(false);
    }
  };

  const handleCloseModal = () => {
    setShowInfluencersModal(false);
    setSelectedCampaign(null);
    setInfluencers([]);
    setLoadingInfluencers(false);
  };

  const handleAssignInfluencer = (campaignId) => {
    router.push(`/assign/${campaignId}`);
  }

  const handleAddCampaign = async () => {
    if (!newCampaign.brand || !newCampaign.objective || !newCampaign.budget) {
      alert('Please fill in at least brand, objective, and budget');
      return;
    }

    try {
      setAdding(true);
      const campaignData = {
        brand: newCampaign.brand,
        objective: newCampaign.objective,
        budget: parseFloat(newCampaign.budget),
        startDate: newCampaign.startDate ? new Date(newCampaign.startDate).toISOString() : new Date().toISOString(),
        endDate: newCampaign.endDate ? new Date(newCampaign.endDate).toISOString() : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      };

      const response = await fetch(`${apiUrl}/api/campaigns`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaignData),
      });

      if (response.ok) {
        const responseData = await response.json();
        const addedCampaign = responseData.data || responseData;
        setCampaigns(prevCampaigns => [...prevCampaigns, addedCampaign]);
        setNewCampaign({ brand: '', objective: '', budget: '', startDate: '', endDate: '' });
        setShowForm(false);
        fetchCampaigns();
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Failed to add campaign:', errorData);
        alert(errorData.message || 'Failed to add campaign');
      }
    } catch (error) {
      console.error('Error adding campaign:', error);
      alert('Error adding campaign');
    } finally {
      setAdding(false);
    }
  };

  const formatBudget = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount}`;
  };

  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCampaignStatus = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (now < start) return { status: 'Upcoming', color: 'bg-blue-100 text-blue-700' };
    if (now > end) return { status: 'Completed', color: 'bg-gray-100 text-gray-700' };
    return { status: 'Active', color: 'bg-green-100 text-green-700' };
  };

  const getPlatformIcon = (platform) => {
    switch (platform?.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-4 h-4 text-pink-500" />;
      case 'youtube':
        return <Youtube className="w-4 h-4 text-red-500" />;
      case 'twitter':
        return <Twitter className="w-4 h-4 text-blue-500" />;
      default:
        return <Users className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-rose-200" onClick={() => router.push('/')}>
              <ArrowLeft className="w-5 h-5 text-amber-400" />
              <span className="text-slate-700 text-sm font-medium">Back to dashboard</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-rose-200">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-slate-700 text-sm font-medium">Marketing Hub</span>
            </div>
            <h1 className="text-6xl font-bold text-slate-800 mb-4">
              Active <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Campaigns</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Manage your marketing campaigns and track performance across all channels
            </p>
            
            {/* Add Campaign Button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-8 py-4 bg-gradient-to-r from-rose-300 to-pink-300 text-white text-lg font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              Add New Campaign
            </button>
          </div>

          {/* Add Campaign Form */}
          {showForm && (
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-rose-200 shadow-lg mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-rose-300 to-pink-300 rounded-2xl">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">Create New Campaign</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Brand Name *</label>
                  <input
                    type="text"
                    value={newCampaign.brand}
                    onChange={(e) => setNewCampaign({...newCampaign, brand: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="Enter brand name..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Campaign Objective *</label>
                  <input
                    type="text"
                    value={newCampaign.objective}
                    onChange={(e) => setNewCampaign({...newCampaign, objective: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="Launch new product line..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Budget *</label>
                  <input
                    type="number"
                    value={newCampaign.budget}
                    onChange={(e) => setNewCampaign({...newCampaign, budget: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="750000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Start Date</label>
                  <input
                    type="date"
                    value={newCampaign.startDate}
                    onChange={(e) => setNewCampaign({...newCampaign, startDate: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">End Date</label>
                  <input
                    type="date"
                    value={newCampaign.endDate}
                    onChange={(e) => setNewCampaign({...newCampaign, endDate: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex items-end gap-4">
                  <button
                    onClick={handleAddCampaign}
                    disabled={adding}
                    className="flex-1 py-4 bg-gradient-to-r from-rose-300 to-pink-300 text-white font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {adding ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                    {adding ? 'Creating...' : 'Create Campaign'}
                  </button>
                  <button
                    onClick={() => setShowForm(false)}
                    className="px-6 py-4 bg-white/60 backdrop-blur-sm border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-white/80 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <Loader2 className="w-12 h-12 animate-spin text-rose-400 mx-auto mb-4" />
              <p className="text-slate-600 text-lg">Loading campaigns...</p>
            </div>
          )}

          {/* Campaigns Grid */}
          {!loading && (
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-sky-300 to-blue-300 rounded-2xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  All Campaigns ({campaigns.length})
                </h2>
              </div>
              
              {campaigns.length === 0 ? (
                <div className="text-center py-16">
                  <Briefcase className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-600 mb-2">No Campaigns Found</h3>
                  <p className="text-slate-500 mb-6">Start driving results by creating your first campaign</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-rose-300 to-pink-300 text-white font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
                  >
                    <Plus className="w-5 h-5" />
                    Create First Campaign
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {campaigns.map((campaign) => {
                    const statusInfo = getCampaignStatus(campaign.startDate, campaign.endDate);
                    const influencerCount = campaign.influencerIds ? campaign.influencerIds.length : 0;
                    
                    return (
                      <div key={campaign.id || campaign._id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
                              <Target className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-slate-800 truncate">{campaign.brand}</h3>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.color} mt-1`}>
                                {statusInfo.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-2">
                            <TrendingUp className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm leading-relaxed">{campaign.objective}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-600 font-semibold">{formatBudget(campaign.budget)} budget</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-400 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">
                              {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">
                              {influencerCount} {influencerCount === 1 ? 'influencer' : 'influencers'} assigned
                            </span>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
                          <button 
                            onClick={() => handleViewInfluencers(campaign)}
                            className="w-full py-2 bg-gradient-to-r from-blue-300 to-cyan-300 text-white font-bold rounded-xl hover:from-blue-400 hover:to-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-sm"
                          >
                            View Influencers ({influencerCount})
                          </button>
                          <button 
                            onClick={() => {
                                handleAssignInfluencer(campaign._id)
                            }}
                            className="w-full py-2 bg-gradient-to-r from-purple-300 to-pink-300 text-white font-bold rounded-xl hover:from-purple-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-sm"
                          >
                            Assign Influencer
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Influencers Modal */}
      {showInfluencersModal && selectedCampaign && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-300 to-cyan-300 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Campaign Influencers</h3>
                  <p className="text-blue-100">{selectedCampaign.brand}</p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-white/20 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {loadingInfluencers ? (
                <div className="text-center py-16">
                  <Loader2 className="w-12 h-12 animate-spin text-blue-400 mx-auto mb-4" />
                  <p className="text-slate-600 text-lg">Loading influencers...</p>
                </div>
              ) : !selectedCampaign.influencerIds || selectedCampaign.influencerIds.length === 0 ? (
                <div className="text-center py-16">
                  <Users className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-slate-600 mb-2">No Influencers Assigned</h4>
                  <p className="text-slate-500 mb-6">This campaign doesn&apos;t have any influencers assigned yet</p>
                  <button 
                    onClick={() => {
                        handleAssignInfluencer(selectedCampaign._id)
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-300 to-pink-300 text-white font-bold rounded-2xl hover:from-purple-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Assign Influencers
                  </button>
                </div>
              ) : influencers.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-slate-600 mb-4">
                    <p className="text-lg font-semibold">Influencer IDs Found:</p>
                    <div className="bg-slate-100 rounded-xl p-4 mt-2 max-w-md mx-auto">
                      {selectedCampaign.influencerIds.map((id, index) => (
                        <div key={index} className="text-sm text-slate-700 py-1 px-2 bg-white rounded mb-1 last:mb-0">
                          {id}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-500 mb-6">Unable to load influencer details from the API</p>
                  <button 
                    onClick={() => fetchInfluencers(selectedCampaign.influencerIds)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-300 to-cyan-300 text-white font-bold rounded-2xl hover:from-blue-400 hover:to-cyan-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Retry Loading
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {influencers.map((influencer, index) => (
                    <div key={influencer.id || influencer._id || index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full flex items-center justify-center text-white text-xl font-bold">
                          {influencer.name ? influencer.name.charAt(0) : '?'}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-xl font-bold text-slate-800">{influencer.name || 'Unknown Influencer'}</h5>
                          <div className="flex items-center gap-2 text-slate-600 mb-1">
                            {getPlatformIcon(influencer.platform)}
                            <span className="text-sm">{influencer.username || '@username'}</span>
                          </div>
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                            {influencer.category || 'General'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-blue-50 rounded-xl">
                          <div className="text-2xl font-bold text-blue-600">
                            {influencer.followers ? formatFollowers(influencer.followers) : 'N/A'}
                          </div>
                          <div className="text-xs text-blue-500 font-medium">Followers</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-xl">
                          <div className="text-2xl font-bold text-green-600">
                            {influencer.engagement ? `${influencer.engagement}%` : 'N/A'}
                          </div>
                          <div className="text-xs text-green-500 font-medium">Engagement</div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 bg-gradient-to-r from-blue-300 to-cyan-300 text-white text-sm font-bold rounded-xl hover:from-blue-400 hover:to-cyan-400 transition-all duration-300">
                          View Profile
                        </button>
                        <button className="flex-1 py-2 bg-gradient-to-r from-purple-300 to-pink-300 text-white text-sm font-bold rounded-xl hover:from-purple-400 hover:to-pink-400 transition-all duration-300">
                          Message
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}