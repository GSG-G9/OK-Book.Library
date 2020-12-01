const { bookApi } = require('../../utils/apiData/bookFetch');

const bookSearch = (req, res) => {
  const { searchInput } = req.params;
  bookApi.search(searchInput)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send(err));
};

module.exports = bookSearch;
