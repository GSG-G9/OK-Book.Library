const fetch = require('node-fetch');
const filterData = require('./dataFilter');
const urlCreater = require('./urlCreater');

const bookApi = (() => {
  const search = (searchInput) => {
    const { API_KEY } = process.env;
    return fetch(urlCreater({
      q: searchInput,
      key: API_KEY,
    }))
      .then((res) => res.json())
      .then((data) => filterData(data));
  };

  return { search };
})();

module.exports = { bookApi };
