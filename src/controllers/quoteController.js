const quotes = require('../models/quoteModel');

// Simulate async operation with random delay
const getRandomQuote = async (req, res) => {
  const delay = Math.floor(Math.random() * 2000); // 0–2000ms

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
  }, delay);
};

const healthCheck = (req, res) => {
  res.send('Node.js Quotes API is running.');
};

module.exports = {
  getRandomQuote,
  healthCheck,
};