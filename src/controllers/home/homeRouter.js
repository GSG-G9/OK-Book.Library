const { join } = require('path');

exports.homeRouter = (req, res) => {
  res.sendfile(join(__dirname, '..', '..', '..', 'public', 'index.html'));
};
