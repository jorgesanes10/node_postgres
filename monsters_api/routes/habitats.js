const { Router } = require('express');
const pool = require('../db');
const {
  getAllHabitats,
  getHabitat,
  createHabitat,
} = require('../repositories/habitats');

const router = Router();

router.get('/:id', getHabitat);
router.route('/').get(getAllHabitats).post(createHabitat);

module.exports = router;
