var cookie = require('cookie')

module.exports = {
  set: function (key, value, options) { console.log(arguments); },
  get: function (key, value, options) { console.log(arguments); }
}

