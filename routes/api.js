const express = require('express');
const router = express.Router();

const visitorController = require('../controllers/visitor');

router.get('/visitors', visitorController.index);

module.exports = router;