const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/route1', logger('Has Entrado en la Ruta 1'), (req, res) => {
    res.send('Estas en la Ruta 1');
});

module.exports = router;
