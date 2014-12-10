var cookie = require('cookie'),
    isServer = !!(typeof window === 'undefined');

if (isServer) {
  module.exports = function (req) {
    return {
      set: req.res.cookie,
      get: function (name) {
        return req.cookies[name];
      },
      remove: function (name) {
        req.res.cookie(name, '', { expires: new Date(0) });
      }
    }
  };
} else {
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
}
