const router = require('express').Router();
const api = require('./api');
const home = require('./home');

router.use('/api/v1', api);
router.use('/', home);

module.exports = router;
