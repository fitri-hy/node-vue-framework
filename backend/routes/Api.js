const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
  res.json({ message: 'Node-Vue Framework' });
});

module.exports = router;
