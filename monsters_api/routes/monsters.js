const { Router } = require('express');
const {
  getAllMonsters,
  getMonster,
  createMonster,
  updateMonster,
  deleteMonster,
} = require('../repositories/monsters');

const router = Router();

router.route('/').get(getAllMonsters).post(createMonster);
router.route('/:id').get(getMonster).put(updateMonster).delete(deleteMonster);

module.exports = router;
