const { Router } = require('express');
const router = Router();
const { getDays, getDay, updateDays } =  require('../controllers/days.controllers');

// retorna la lista completa de dias feriados
router.route('/')
  .get(getDays)

router.route('/:id')
  .get(getDay)
  .put(updateDays)

module.exports = router;