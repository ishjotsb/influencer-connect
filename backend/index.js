require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

const connectToDb = require("./config/dbConfig");
const influencerRoute = require("./routes/influencerRoute");
const campaignRoute = require("./routes/campaignRoute");

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/influencers", influencerRoute);
app.use("/api/campaigns", campaignRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});