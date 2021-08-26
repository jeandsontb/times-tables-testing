const { Router } = require('express');

const router = Router();

const tableController = require('../controllers/table');

router.get('/', tableController.list);
router.get('/for/:id', tableController.table);

module.exports = router;