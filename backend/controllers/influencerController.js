const Influencer = require('../models/Influencer');

const createInfluencer = async (req, res) => {
    try {
        const { name, category, instagram, followers, location } = req.body;
        
        const influencer = new Influencer({
            name,
            category,
            instagram,
            followers,
            location
        });

        const savedInfluencer = await influencer.save();
        
        res.status(201).json({
            success: true,
            data: savedInfluencer
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getInfluencers = async (req, res) => {
    try {
        const influencers = await Influencer.find().sort({ createdAt: -1 });
        
        res.status(200).json({
            success: true,
            count: influencers.length,
            data: influencers
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const getInfluencer = async (req, res) => {
    try {
        const influencer = await Influencer.findById(req.params.id);
        
        if (!influencer) {
            return res.status(404).json({
                success: false,
                error: 'Influencer not found'
            });
        }
        
        res.status(200).json({
            success: true,
            data: influencer
        });
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                error: 'Influencer not found'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const updateInfluencer = async (req, res) => {

    try {
        const { name, category, instagram, followers, location } = req.body;
        
        const influencer = await Influencer.findById(req.params.id);
        
        if (!influencer) {
            return res.status(404).json({
                success: false,
                error: 'Influencer not found'
            });
        }
        
        influencer.name = name || influencer.name;
        influencer.category = category || influencer.category;
        influencer.instagram = instagram || influencer.instagram;
        if (followers) influencer.followers = followers;
        influencer.location = location || influencer.location;
        
        const updatedInfluencer = await influencer.save();
        
        res.status(200).json({
            success: true,
            data: updatedInfluencer
        });
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                error: 'Influencer not found'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

const deleteInfluencer = async (req, res) => {
    try {
        const influencer = await Influencer.findById(req.params.id);
        
        if (!influencer) {
            return res.status(404).json({
                success: false,
                error: 'Influencer not found'
            });
        }
        
        await influencer.deleteOne();
        
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.error(err);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                error: 'Influencer not found'
            });
        }
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

module.exports = {
    createInfluencer,
    getInfluencers,
    getInfluencer,
    updateInfluencer,
    deleteInfluencer
};