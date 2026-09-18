const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("CI Docker Pipeline Application Running");
});

app.get("/health", (req, res) => {
    res.status(500).json({
        status: "DOWN",
        message: "Simulated deployment failure"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});