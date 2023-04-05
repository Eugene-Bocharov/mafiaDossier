const express = require('express');
/* eslint-disable-next-line */
const router = express.Router();

const testController = require('../controllers/testController');

router.get('/test', testController.testget);

module.exports = router;
