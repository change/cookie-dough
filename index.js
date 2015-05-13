var cookie = require('cookie');

module.exports = function (req) {
  return {
    set: function (name, value, options) {
      var cookieStr = cookie.serialize(name, value, options);
      req.res.cookie.call(req.res, name, value, options);
      return cookieStr;
    },

    get: function (name) {
      return req.cookies[name];
    },

    remove: function (name, options) {
      var opts = options || {};
      opts.expires = new Date(0);

      return !!(req.res.cookie(name, '', opts));
    },

    all: function () {
      return req.cookies;
    }
  }
};
