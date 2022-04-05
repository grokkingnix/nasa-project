// Built-in imports
const express = require("express");

// Local imports
const {
	getAllPlanets,
} = require("./planets.contorller");

// Assign exrepss.Router
const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
