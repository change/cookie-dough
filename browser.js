var cookie = require('cookie');

return {
  set: function (name, value, options) {
    return document.cookie = cookie.serialize(name, value, options);
  },

  get: function (name) {
    return cookie.parse(document.cookie)[name];
  },

  remove: function (name, options) {
    var opts = options || {};
    opts.expires = new Date(0);

    return !!(document.cookie = cookie.serialize(name, '', opts));
  },

  all: function () {
    return cookie.parse(document.cookie);
  },

  /**
   * no-op for client
   *
   * @todo
   * throw warning instead of silently doing nothing
   */
  init: function() { }
};
