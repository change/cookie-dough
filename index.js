var cookie = require('cookie'),
    isServer = !!(typeof window === 'undefined'),
    parsedCookies;

function get(key) {
  return parsedCookies[key];
}

function set(name, value, options) {
  parsedCookies[name] = value;

  if (isServer) {
    var res = options && options.res;
    if (!res) {
      throw new Error('Must specify `res` when setting cookie.');
    }

    res.cookie(name, value, options);
  } else {
    document.cookie = cookie.serialize(name, value, options);
  }
}


module.exports = function (req) {
  if (isServer) {
    parsedCookies = req.cookies;
  } else {
    parsedCookies = cookie.parse(document.cookie);
  }

  return {
    get: get,
    set: set,
    remove: function (key) {
      set(key, '', { expires: new Date(0) })
    }
  };
}
