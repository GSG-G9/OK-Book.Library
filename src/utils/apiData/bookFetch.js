const fetch = require('node-fetch');
const filterData = require('./dataFilter');

const bookApi = (() => {
  const search = (searchInput) => {
    const { API_KEY } = process.env;
    return fetch(`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=${searchInput}`)
      .then((res) => res.json())
      .then((data) => filterData(data));
  };

  return { search };
})();

module.exports = { bookApi };
