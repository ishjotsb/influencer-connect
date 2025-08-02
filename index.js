require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;

const connectToDb = require("./config/dbConfig");

connectToDb();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});