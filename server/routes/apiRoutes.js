const express = require('express');
const router = express.Router();

const { getAllTransactions } = require('../controllers/transactionController');
const { getStatistics } = require('../controllers/statisticsController');
const { getPriceRangeData } = require('../controllers/chartController');
const { getCategoryItemCount } = require('../controllers/pieChartController');
const { getCombinedData } = require('../controllers/combinedController');
const { initializeDatabase } = require('../controllers/initController');

// List all transactions route with search and pagination
router.post('/transactions', getAllTransactions);

// Statistics route
router.post('/statistics', getStatistics);

// Bar chart route
router.post('/bar-chart', getPriceRangeData);

// Pie chart route
router.get('/pie-chart', getCategoryItemCount);

// Combined data route
router.get('/combined-data', getCombinedData);

// Initialize database route
router.post('/init-db', initializeDatabase);

module.exports = router;
