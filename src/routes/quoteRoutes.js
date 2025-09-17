const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/', quoteController.healthCheck);
router.get('/quote', quoteController.getRandomQuote);

module.exports = router;