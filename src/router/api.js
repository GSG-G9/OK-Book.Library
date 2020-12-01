const router = require('express').Router();
const { bookSearch } = require('../controllers');

router.get('/search/:searchInput', bookSearch);

module.exports = router;
