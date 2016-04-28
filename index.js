var cookie = require('cookie');

module.exports = function (req) {
  // This is a temp hack for remembering what has been set until express has a better api for cookies
  // see https://github.com/expressjs/express/pull/2237
  var cookiesSet = {}
  return {
    set: function (name, value, options) {
      var cookieStr = cookie.serialize(name, value, options);
      req.res.cookie.call(req.res, name, value, options);
      cookiesSet[name] = value
      return cookieStr;
    },

    get: function (name) {
      return cookiesSet[name] || req.cookies[name];
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
