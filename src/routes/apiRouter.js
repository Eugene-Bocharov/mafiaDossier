const express = require('express');

const mafiasRouter = require('./mafiasRouter');
const testRouter = require('./testRouter');
/* eslint-disable-next-line */
const router = express.Router();

router.use('/mafias', mafiasRouter);
router.use('/tests', testRouter);

module.exports = router;
