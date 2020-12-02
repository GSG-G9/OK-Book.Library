/* eslint-disable no-restricted-syntax */
const mapObj = (obj, callback) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      callback(key, obj[key]);
    }
  }
};

// get the query obj and convert it to string
const getQueryString = (options) => {
  let queryString = '?';
  mapObj(options, (key, value) => {
    queryString += `${key}=${value}&`;
  });
  return queryString.substr(0, queryString.length - 1);
};

const createGoogleaBookUrl = (options) => `https://www.googleapis.com/books/v1/volumes/${getQueryString(
  options,
)}`;
module.exports = createGoogleaBookUrl;
