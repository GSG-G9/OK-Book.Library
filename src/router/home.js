const router = require('express').Router();
const { rootRouter, homeRouter } = require('../controllers');

router.get('/', rootRouter);
router.get('/home', homeRouter);

module.exports = router;
