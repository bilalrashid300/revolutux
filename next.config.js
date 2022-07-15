// next.config.js
const { i18n } = require('./next-i18next.config');

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  i18n
}