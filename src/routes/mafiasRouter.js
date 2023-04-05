const express = require('express');
/* eslint-disable-next-line */
const router = express.Router();

const mafiasController = require('../controllers/mafiasController');

router.get('/all', mafiasController.getAllMafias);
router.get('/topthree', mafiasController.getThree);
router.get('/:id', mafiasController.getMafiaById);
router.post('/', mafiasController.createMafia);
router.delete('/all', mafiasController.deleteAllMafias);
router.delete('/:id', mafiasController.deleteMafia);

module.exports = router;
