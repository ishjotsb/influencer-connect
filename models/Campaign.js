const mongoose = require("mongoose");

const campaignSchema = new mongoose.Schema({
    
    brand: {
        type: String,
        required: true
    },
    objective: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    influencerIds: {
        type: [String],
        ref: "Influencer"
    }

});

module.exports = mongoose.model("Campaign", campaignSchema);