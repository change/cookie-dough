var cookie = require('cookie'),
    isServer = !!(typeof window === 'undefined');

function CookieDough(req) {
  var parsedCookies;

  if (isServer) {
    if (!req) {
      throw new Error('Must specify `req` for cookie-dough');
    }

    parsedCookies = req.cookies;
  } else {
    parsedCookies = cookie.parse(document.cookie);
  }

  this.get = function get(name) {
    return parsedCookies[name];
  };

  this.set = function set(name, value, options) {
    parsedCookies[name] = value;

    if (isServer) {
      var res = options && options.res;
      if (!res) {
        throw new Error('Must specify `res` when setting cookie');
      }

      return res.cookie(name, value, options);
    } else {
      return document.cookie = cookie.serialize(name, value, options);
    }
  };

  this.remove = function remove(name) {
    this.set(key, '', { expires: new Date(0) });
    delete parsedCookies[name];
  };

}

module.exports = CookieDough;
