var cookie = require('cookie');

module.exports = function () {
  return {
    set: function (name, value, options) {
      return document.cookie = cookie.serialize(name, value, options);
    },
    get: function (name) {
      return cookie.parse(document.cookie)[name];
    },
    remove: function (name) {
      return !!(document.cookie = cookie.serialize(name, '', { expires: new Date(0) }));
    }
  }
}

