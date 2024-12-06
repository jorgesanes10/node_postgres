const { Router } = require('express');
const pool = require('../db');
const { getAllLives, getConditions } = require('../repositories/lives');

const router = Router();

router.get('/', getAllLives);
router.get('/conditions', getConditions);

module.exports = router;
