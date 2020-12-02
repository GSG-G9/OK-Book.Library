const { join } = require('path');

exports.notFound = (req, res) => {
  res.sendfile(join(__dirname, '..', '..', 'public', 'notFound.html'));
};
