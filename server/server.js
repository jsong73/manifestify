const express = require("express");
const app = express();
const db = require("./config/connection")

const PORT = process.env.PORT || 3004;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once("connected", () => {
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`)
})
})