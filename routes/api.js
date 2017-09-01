const express = require('express');
const router = express.Router();

const visitorController = require('../controllers/visitor');

router.get('/visitors', visitorController.getAll);
router.get('/visitors/:id', visitorController.get);

module.exports = router;