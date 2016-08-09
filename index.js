var cookie = require('cookie');

module.exports = function (req) {
  // This is a temp hack for remembering what has been set until express has a better api for cookies
  // see https://github.com/expressjs/express/pull/2237
  var cookiesSet = {};

  return {
    set: function (name, value, options) {
      var cookieStr = cookie.serialize(name, value, options);

      // if we don't have a request object, store everything in an object
      // and one can return all the cookies from the set
      if (req) {
          req.res.cookie.call(req.res, name, value, options);
      }

      cookiesSet[name] = value;
      return cookieStr;
    },

    get: function (name) {
      return cookiesSet[name] || req.cookies[name];
    },

    remove: function (name, options) {
      var opts = options || {};
      opts.expires = new Date(0);

      try {
          if (req) {
              req.res.cookie(name, '', opts)
          }

          delete cookiesSet[name];
          return true;
      } catch (e) {
          return false;
      }
    },

    all: function () {
      return cookiesSet;
    }
  }
};
