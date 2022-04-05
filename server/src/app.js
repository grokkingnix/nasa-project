// Third-party imports
const express = require("express");
const cors = require("cors");

// Local imports
const planetsRouter = require("./routes/planets/planets.router");

// Assign express
const app = express()

// MIddleware
app.use(cors({
	origin: "http://localhost:3000",
}));

// Parse any incoming json
app.use(express.json());

// planetsRouter middleware
app.use(planetsRouter);

module.exports = app;
