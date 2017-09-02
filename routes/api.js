const express = require('express');
const router = express.Router();

const visitorController = require('../controllers/visitor');
const emailController = require('../controllers/email');
const requestController = require('../controllers/request');

router.get('/visitors', visitorController.getAll);
router.get('/visitors/:id', visitorController.get);

router.get('/emails', emailController.getAll);
router.get('/emails/:id', emailController.get);

router.get('/requests', requestController.getAll);
router.get('/requests/:id', requestController.get);

module.exports = router;