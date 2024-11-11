const express = require('express');
const router = express.Router();
const logger = require('../middlewares/logger');

router.get('/route2', logger('Has entrado en la Ruta 2'), (req, res) => {
    res.send('Estas en la Ruta 2');
});

module.exports = router;
