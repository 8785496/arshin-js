const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login', {layout: false});
});

router.get('*', function (req, res) {
  res.render('admin', {layout: false});
});

module.exports = router;
