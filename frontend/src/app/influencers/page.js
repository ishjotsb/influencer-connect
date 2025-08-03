"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, Star, Users, Globe, Camera, Plus, Sparkles, Instagram, Loader2, ArrowRight, Edit2, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InfluencersPage() {
  const router = useRouter();
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newInfluencer, setNewInfluencer] = useState({
    name: '',
    category: '',
    instagram: '',
    followers: '',
    location: ''
  });

  // Filter states
  const [filters, setFilters] = useState({
    category: '',
    minFollowers: '',
    maxFollowers: ''
  });
  
  // Get unique categories for filter dropdown
  const categories = [...new Set(influencers.map(influencer => influencer.category))];

  // Apply filters to influencers
  const filteredInfluencers = influencers.filter(influencer => {
    // Filter by category
    if (filters.category && influencer.category !== filters.category) {
      return false;
    }
    
    // Filter by minimum followers
    if (filters.minFollowers && influencer.followers < parseInt(filters.minFollowers)) {
      return false;
    }
    
    // Filter by maximum followers
    if (filters.maxFollowers && influencer.followers > parseInt(filters.maxFollowers)) {
      return false;
    }
    
    return true;
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      category: '',
      minFollowers: '',
      maxFollowers: ''
    });
  };

  // Handle delete influencer
  const handleDeleteInfluencer = async (id) => {
    if (!window.confirm('Are you sure you want to delete this influencer?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/influencers/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete influencer');
      }

      // Remove the influencer from the list
      setInfluencers(prev => prev.filter(infl => infl._id !== id));
      
    } catch (error) {
      console.error('Error deleting influencer:', error);
      alert('Failed to delete influencer');
    }
  };

  // Handle edit influencer
  const handleEditInfluencer = (influencer) => {
    setEditingId(influencer._id);
    setNewInfluencer({
      name: influencer.name,
      category: influencer.category,
      instagram: influencer.instagram || '',
      followers: influencer.followers?.toString() || '',
      location: influencer.location || ''
    });
    setShowForm(true);
  };

  // Update handleAddInfluencer to handle both add and update
  const handleAddInfluencer = async () => {
    if (!newInfluencer.name || !newInfluencer.category) {
      alert('Please fill in at least name and category');
      return;
    }

    const influencerData = {
      name: newInfluencer.name,
      category: newInfluencer.category,
      instagram: newInfluencer.instagram,
      followers: parseInt(newInfluencer.followers) || 0,
      location: newInfluencer.location
    };

    try {
      setAdding(true);
      
      let response;
      if (editingId) {
        // Update existing influencer
        response = await fetch(`http://localhost:8000/api/influencers/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(influencerData),
        });
      } else {
        // Create new influencer
        response = await fetch('http://localhost:8000/api/influencers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(influencerData),
        });
      }

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save influencer');
      }
      
      const result = await response.json();
      
      if (editingId) {
        // Update the existing influencer in the list
        setInfluencers(prev => 
          prev.map(infl => infl._id === editingId ? result.data || result : infl)
        );
      } else {
        // Add the new influencer to the list
        setInfluencers(prev => [...prev, result.data || result]);
      }
      
      // Reset form
      setNewInfluencer({ name: '', category: '', instagram: '', followers: '', location: '' });
      setShowForm(false);
      setEditingId(null);
      
    } catch (error) {
      console.error('Error saving influencer:', error);
      alert(error.message || 'Error saving influencer');
    } finally {
      setAdding(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setNewInfluencer({ name: '', category: '', instagram: '', followers: '', location: '' });
  };

  // Fetch influencers from API
  const fetchInfluencers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/influencers');
      if (!response.ok) {
        throw new Error('Failed to fetch influencers');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      // If the response has a data property, use that, otherwise use the whole response
      setInfluencers(Array.isArray(data) ? data : (data.data || []));
    } catch (error) {
      console.error('Error fetching influencers:', error);
      // You might want to show an error message to the user here
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch on component mount
  useEffect(() => {
    fetchInfluencers();
  }, [fetchInfluencers]);

  const formatFollowers = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
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
              <span className="text-slate-700 text-sm font-medium">Creator Network</span>
            </div>
            <h1 className="text-6xl font-bold text-slate-800 mb-4">
              Our <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Influencers</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Connect with top-tier content creators who drive engagement and convert audiences
            </p>
            
            {/* Add Influencer Button */}
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-8 py-4 bg-gradient-to-r from-rose-300 to-pink-300 text-white text-lg font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              Add New Influencer
            </button>
          </div>

          {/* Add Influencer Form */}
          {showForm && (
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-rose-200 shadow-lg mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-rose-300 to-pink-300 rounded-2xl">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold text-slate-800">
                    {editingId ? 'Edit Influencer' : 'Add New Influencer'}
                  </h1>
                  <button
                    onClick={handleCancel}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Influencer Name *</label>
                  <input
                    type="text"
                    value={newInfluencer.name}
                    onChange={(e) => setNewInfluencer({...newInfluencer, name: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="Enter name..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Category *</label>
                  <input
                    type="text"
                    value={newInfluencer.category}
                    onChange={(e) => setNewInfluencer({...newInfluencer, category: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="Fashion, Lifestyle, Tech..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Instagram URL</label>
                  <input
                    type="url"
                    value={newInfluencer.instagram}
                    onChange={(e) => setNewInfluencer({...newInfluencer, instagram: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="https://www.instagram.com/username"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Followers</label>
                  <input
                    type="number"
                    value={newInfluencer.followers}
                    onChange={(e) => setNewInfluencer({...newInfluencer, followers: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="1000000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Location</label>
                  <input
                    type="text"
                    value={newInfluencer.location}
                    onChange={(e) => setNewInfluencer({...newInfluencer, location: e.target.value})}
                    className="w-full p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all"
                    placeholder="New York, USA"
                  />
                </div>
                <div className="flex items-end gap-4">
                  <button
                    onClick={handleAddInfluencer}
                    disabled={adding}
                    className="flex-1 py-4 bg-gradient-to-r from-rose-300 to-pink-300 text-white font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {adding ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                    {adding ? 'Adding...' : 'Add Influencer'}
                  </button>
                  <button
                    onClick={handleCancel}
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
              <p className="text-slate-600 text-lg">Loading influencers...</p>
            </div>
          )}

          {/* Influencers Grid */}
          {!loading && (
            <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-sky-300 to-blue-300 rounded-2xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800">
                  Influencers ({filteredInfluencers.length} of {influencers.length})
                </h2>
              </div>
              
              {influencers.length === 0 ? (
                <div className="text-center py-16">
                  <Camera className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-600 mb-2">No Influencers Found</h3>
                  <p className="text-slate-500 mb-6">Start building your network by adding your first influencer</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-rose-300 to-pink-300 text-white font-bold rounded-2xl hover:from-rose-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
                  >
                    <Plus className="w-5 h-5" />
                    Add First Influencer
                  </button>
                </div>
              ) : (
                <div className="w-full">
                  {/* Filters */}
                  <div className="mb-8 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-end gap-4 flex-wrap">
                      <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                        <select
                          name="category"
                          value={filters.category}
                          onChange={handleFilterChange}
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        >
                          <option value="">All Categories</option>
                          {categories.map(category => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Min Followers</label>
                        <input
                          type="number"
                          name="minFollowers"
                          value={filters.minFollowers}
                          onChange={handleFilterChange}
                          placeholder="Min followers"
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        />
                      </div>
                      <div className="flex-1 min-w-[200px]">
                        <label className="block text-sm font-medium text-slate-700 mb-1">Max Followers</label>
                        <input
                          type="number"
                          name="maxFollowers"
                          value={filters.maxFollowers}
                          onChange={handleFilterChange}
                          placeholder="Max followers"
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-rose-300 focus:border-transparent"
                        />
                      </div>
                      <button
                        onClick={resetFilters}
                        className="px-4 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-xl transition-colors duration-200"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredInfluencers.map((influencer) => (
                    <div key={influencer.id || influencer._id} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 shadow-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-bold text-slate-800 truncate">{influencer.name}</h3>
                          {influencer.instagram && (
                            <a 
                              href={influencer.instagram} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-slate-600 hover:text-rose-500 transition-colors flex items-center gap-1 text-sm"
                            >
                              <Instagram className="w-4 h-4" />
                              Instagram
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span className="text-slate-600 truncate">{influencer.category}</span>
                        </div>
                        
                        {influencer.followers && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-sky-400 flex-shrink-0" />
                            <span className="text-slate-600">{formatFollowers(influencer.followers)} followers</span>
                          </div>
                        )}
                        
                        {influencer.location && (
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-slate-600 truncate">{influencer.location}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-slate-200 flex gap-2">
                        <button 
                          onClick={() => handleEditInfluencer(influencer)}
                          className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                          <Edit2 className="w-4 h-4" />
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteInfluencer(influencer._id)}
                          className="flex-1 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}