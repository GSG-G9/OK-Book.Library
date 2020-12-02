const router = require('express').Router();
const { bookSearch, clientError } = require('../controllers');

router.get('/search/:searchInput', bookSearch);

router.use(clientError);

module.exports = router;
