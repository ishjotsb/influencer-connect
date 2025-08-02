const express = require('express');
const router = express.Router();
const {
    createInfluencer,
    getInfluencers,
    getInfluencer,
    updateInfluencer,
    deleteInfluencer
} = require('../controllers/influencerController');

router.post('/', createInfluencer);

router.get('/', getInfluencers);

router.get('/:id', getInfluencer);

router.put('/:id', updateInfluencer);

router.delete('/:id', deleteInfluencer);

module.exports = router;