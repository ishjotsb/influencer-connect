const Campaign = require('../models/Campaign');

const createCampaign = async (req, res) => {
    try {
        const { brand, objective, budget, startDate, endDate, influencerIds } = req.body;
        
        const campaign = new Campaign({
            brand,
            objective,
            budget,
            startDate: startDate || Date.now(),
            endDate: endDate || Date.now(),
            influencerIds: influencerIds || []
        });

        const savedCampaign = await campaign.save();
        
        res.status(201).json({
            success: true,
            data: savedCampaign
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find().sort({ startDate: -1 });
        
        res.status(200).json({
            success: true,
            count: campaigns.length,
            data: campaigns
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        
        if (!campaign) {
            return res.status(404).json({
                success: false,
                error: 'Campaign not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: campaign
        });
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                error: 'Campaign not found'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const updateCampaign = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { brand, objective, budget, startDate, endDate, influencerIds } = req.body;
        
        const campaign = await Campaign.findById(req.params.id);
        
        if (!campaign) {
            return res.status(404).json({
                success: false,
                error: 'Campaign not found'
            });
        }
        
        // Update fields if they are provided in the request
        if (brand !== undefined) campaign.brand = brand;
        if (objective !== undefined) campaign.objective = objective;
        if (budget !== undefined) campaign.budget = budget;
        if (startDate !== undefined) campaign.startDate = startDate;
        if (endDate !== undefined) campaign.endDate = endDate;
        if (influencerIds !== undefined) campaign.influencerIds = influencerIds;
        
        const updatedCampaign = await campaign.save();
        
        res.status(200).json({
            success: true,
            data: updatedCampaign
        });
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                error: 'Campaign not found'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const deleteCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        
        if (!campaign) {
            return res.status(404).json({
                success: false,
                error: 'Campaign not found'
            });
        }
        
        await campaign.remove();
        
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                error: 'Campaign not found'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

module.exports = {
    createCampaign,
    getCampaigns,
    getCampaign,
    updateCampaign,
    deleteCampaign
};