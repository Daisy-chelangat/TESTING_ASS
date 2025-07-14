const express = require('express');
const router = express.Router();
const {
  createBug,
  getBugs,
  updateBug,
  deleteBug,
} = require('../controllers/bugController');

router.route('/').post(createBug).get(getBugs);
router.route('/:id').put(updateBug).delete(deleteBug);

module.exports = router;
