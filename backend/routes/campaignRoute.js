const express = require('express');
const router = express.Router();
const {
    createCampaign,
    getCampaigns,
    getCampaign,
    updateCampaign,
    deleteCampaign,
    addInfluencerToCampaign
} = require('../controllers/campaignController');

router.post('/', createCampaign);

router.get('/', getCampaigns);

router.get('/:id', getCampaign);

router.put('/:id', updateCampaign);

router.delete('/:id', deleteCampaign);

router.post('/add-influencer', addInfluencerToCampaign);

module.exports = router;