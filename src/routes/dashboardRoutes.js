const express = require('express');
const router = express.Router();
const { calculaIntencaoVotos } = require('../utils/calculaVotos');

router.get('/dashboard', (req, res) => {
    const resultados = calculaIntencaoVotos('P1');
    res.render('dashboard', { resultados });
});

module.exports = router;