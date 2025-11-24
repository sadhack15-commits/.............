const express = require('express');
const router = express.Router();

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Example API
router.get('/status', (req, res) => {
  res.json({ 
    status: 'online',
    server: 'Glitch',
    protection: 'enabled'
  });
});

router.post('/data', (req, res) => {
  res.json({ 
    message: 'Data received',
    data: req.body 
  });
});

module.exports = router;
