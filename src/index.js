const express = require('express');
const router = express.Router();
const climateController = require('../controllers/climateController');

// Define a route to get climate data
router.get('/climate', climateController.getClimateData);

module.exports = router;

 
