"use client"
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function AssignPage() {
    const router = useRouter();
    const params = useParams();

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    
    // Get campaign ID from URL params instead of manually parsing
    const id = params?.id || params?.campaignId; // Adjust based on your route structure
    
    const [campaign, setCampaign] = useState(null);
    const [influencers, setInfluencers] = useState([]);
    const [selectedInfluencer, setSelectedInfluencer] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [assigning, setAssigning] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Only fetch data when we have a valid ID
        if (id) {
            fetchCampaignDetails();
            fetchInfluencers();
        } else {
            setError('Campaign ID not found in URL');
            setLoading(false);
        }
    }, [id]); // Add id as dependency

    const fetchCampaignDetails = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/campaigns/${id}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                setCampaign(data.data);
            } else {
                setError(data.message || 'Failed to fetch campaign details');
            }
        } catch (err) {
            setError('Error fetching campaign details');
            console.error('Error:', err);
        }
    };

    const fetchInfluencers = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/influencers`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.success) {
                setInfluencers(data.data);
            } else {
                setError(data.message || 'Failed to fetch influencers');
            }
        } catch (err) {
            setError('Error fetching influencers');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleInfluencerSelect = (influencerId) => {
        setSelectedInfluencer(influencerId);
        setSuccessMessage('');
        setError(null);
    };

    const handleAssignInfluencer = async () => {
        if (!selectedInfluencer) return;

        setAssigning(true);
        setError(null);
        setSuccessMessage('');

        try {
            const response = await fetch(`${apiUrl}/api/campaigns/add-influencer`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    campaignId: id,
                    influencerId: selectedInfluencer
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (data.success) {
                setSuccessMessage('Influencer assigned successfully!');
                setSelectedInfluencer('');
                // Add a small delay before navigation to show success message
                setTimeout(() => {
                    router.push(`/campaign`);
                }, 1500);
            } else {
                setError(data.message || 'Failed to assign influencer');
            }
        } catch (err) {
            setError('Error assigning influencer');
            console.error('Error:', err);
        } finally {
            setAssigning(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const formatBudget = (budget) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(budget);
    };

    // Show loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
                    <div className="text-lg text-gray-600">Loading campaign details...</div>
                </div>
            </div>
        );
    }

    // Show error state when there's an error and no campaign data
    if (error && !campaign) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 flex items-center justify-center">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h3>
                        <p className="text-gray-600 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
            {/* Header */}
            <div className="bg-white border-b border-pink-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">
                                Assign <span className="text-pink-500">Influencers</span>
                            </h1>
                            <p className="mt-2 text-gray-600">Connect the right influencers to your campaign</p>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                            <span>Campaign ID: {id}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {campaign && (
                    <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8 mb-8">
                        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-rose-200" onClick={() => router.push('/campaign')}>
                            <ArrowLeft className="w-5 h-5 text-amber-400" />
                            <span className="text-slate-700 text-sm font-medium">Back to campaigns</span>
                        </div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Campaign Overview</h2>
                            <div className="flex items-center space-x-2 bg-pink-50 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-pink-700">Active Campaign</span>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Brand</label>
                                            <p className="text-lg font-bold text-gray-900">{campaign.brand}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Objective</label>
                                            <p className="text-lg font-bold text-gray-900">{campaign.objective}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Center Column */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                            </svg>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Budget</label>
                                            <p className="text-2xl font-bold text-green-600">{formatBudget(campaign.budget)}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Assigned Influencers</label>
                                            <p className="text-2xl font-bold text-purple-600">
                                                {campaign.influencerIds?.length || 0}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Column */}
                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                            <p className="text-lg font-bold text-gray-900">{formatDate(campaign.startDate)}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6">
                                    <div className="flex items-center mb-3">
                                        <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">End Date</label>
                                            <p className="text-lg font-bold text-gray-900">{formatDate(campaign.endDate)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Assign New Influencer</h2>
                            <p className="text-gray-600">Select an influencer to add to your campaign</p>
                        </div>
                    </div>
                    
                    {/* Success Message */}
                    {successMessage && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="text-sm font-medium text-green-800">{successMessage}</div>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && campaign && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl">
                            <div className="flex items-center">
                                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <div className="text-sm font-medium text-red-800">{error}</div>
                            </div>
                        </div>
                    )}
                    
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="influencer-select" className="block text-sm font-semibold text-gray-700 mb-3">
                                Select Influencer
                            </label>
                            <select
                                id="influencer-select"
                                value={selectedInfluencer}
                                onChange={(e) => handleInfluencerSelect(e.target.value)}
                                className="block w-full px-4 py-3 border-2 border-pink-100 rounded-xl shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200"
                                disabled={assigning}
                            >
                                <option value="">🔍 Choose an influencer...</option>
                                {influencers.map((influencer) => (
                                    <option key={influencer._id} value={influencer._id}>
                                        {influencer.name} • {influencer.category} • {influencer.followers.toLocaleString()} followers
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {selectedInfluencer && (
                            <div className="mt-8 transform transition-all duration-300 ease-in-out">
                                {(() => {
                                    const selected = influencers.find(inf => inf._id === selectedInfluencer);
                                    return selected ? (
                                        <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-pink-100">
                                            <div className="flex items-center justify-between mb-6">
                                                <h3 className="text-xl font-bold text-gray-900">Selected Influencer</h3>
                                                <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-full shadow-sm">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                    <span className="text-xs font-medium text-green-700">Ready to Assign</span>
                                                </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                                    <div className="flex items-center mb-2">
                                                        <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                                                            <span className="text-white text-sm font-bold">👤</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">Name</span>
                                                    </div>
                                                    <p className="text-lg font-bold text-gray-900">{selected.name}</p>
                                                </div>
                                                
                                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                                    <div className="flex items-center mb-2">
                                                        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                                                            <span className="text-white text-sm font-bold">🏷️</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">Category</span>
                                                    </div>
                                                    <p className="text-lg font-bold text-gray-900">{selected.category}</p>
                                                </div>
                                                
                                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                                    <div className="flex items-center mb-2">
                                                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                                                            <span className="text-white text-sm font-bold">👥</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">Followers</span>
                                                    </div>
                                                    <p className="text-lg font-bold text-blue-600">{selected.followers.toLocaleString()}</p>
                                                </div>
                                                
                                                <div className="bg-white rounded-xl p-4 shadow-sm">
                                                    <div className="flex items-center mb-2">
                                                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                                                            <span className="text-white text-sm font-bold">📍</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">Location</span>
                                                    </div>
                                                    <p className="text-lg font-bold text-gray-900">{selected.location}</p>
                                                </div>
                                                
                                                <div className="bg-white rounded-xl p-4 shadow-sm md:col-span-2">
                                                    <div className="flex items-center mb-2">
                                                        <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                                                            <span className="text-white text-sm font-bold">📱</span>
                                                        </div>
                                                        <span className="text-sm font-medium text-gray-700">Instagram</span>
                                                    </div>
                                                    <a 
                                                        href={selected.instagram} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-lg font-bold text-pink-600 hover:text-pink-800 transition-colors duration-200 flex items-center"
                                                    >
                                                        {selected.instagram}
                                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null;
                                })()}
                            </div>
                        )}
                        
                        <div className="flex justify-end space-x-4 pt-6 border-t border-pink-100">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-3 border-2 border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-200"
                                disabled={assigning}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleAssignInfluencer}
                                disabled={!selectedInfluencer || assigning}
                                className="px-8 py-3 border-2 border-transparent rounded-xl shadow-lg text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
                            >
                                {assigning ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Assigning...
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Assign Influencer
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}