var cookie = require('cookie');

module.exports = function(cookies) {
  return {
    set: function (key, value, options) {
      var cookieStr = cookie.serialize(key, value, options);
      cookies.set(key, value, options);
      return cookieStr;
    },

    get: function (key) {
      return cookies.get(key);
    },

    remove: function (key, options) {
      options = options || {};
      options.expires = new Date(0);

      return cookies.set(key, '', options);
    },

    all: function () {
      return cookies.get();
    }
  }
}
