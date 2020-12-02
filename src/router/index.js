const router = require('express').Router();
const { notFoundRoute } = require('../controllers/notFound');
const api = require('./api');
const home = require('./home');

router.use('/api/v1', api);
router.use('/', home);
router.use('/notFound', notFoundRoute);

module.exports = router;
