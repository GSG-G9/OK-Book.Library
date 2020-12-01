const fetch = require('node-fetch');
const filterData = require('./dataFilter');

const bookApi = (() => {
  const search = (searchInput) => new Promise((resolve, reject) => {
    const { API_KEY } = process.env;
    fetch(`https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        resolve(filterData(data));
      })
      .catch((error) => {
        reject(error);
      });
  });

  return { search };
})();

module.exports = { bookApi };
