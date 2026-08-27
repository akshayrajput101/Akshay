const contactHandler = require('./contact');

module.exports = async function handler(req, res) {
  return contactHandler(req, res);
};
