const mongoose = require("mongoose");

const influencerSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    instagram: {
        type: String,
        required: true
    },
    followers: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Influencer", influencerSchema);
