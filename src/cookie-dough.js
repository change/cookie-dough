var cookie = require('cookie')
  , isServer = !!(typeof window === 'undefined')
  , parsedCookies

function get(key) {
  return parsedCookies[key]
}

function set(name, value, options) {
  parsedCookies[name] = value;

  if (isServer) {
    var res = options && options.res;
    if (!res) throw new Error('Must specify `res` when setting cookie.');

    console.log('serialize all of the cookies?')
    /*
    res.setHeader('Set-Cookie', cookieStr);
    */
  } else {
    document.cookie = cookie.serialize(name, value, options);
  }
}


module.exports = function (req) {
  // should this be so strongly tied to express?
  if (isServer) {
    parsedCookies = req.cookies;
  } else {
    parsedCookies = cookie.parse(document.cookie);
  }

  function CookieDough (key, value, opts) {
    if (arguments.length === 1) {
      return get(key, opts);
    }

    return set(key, value, opts);
  }

  CookieDough.__proto__.remove = function (key) {
    set(key, '', {expires: new Date(0)})
  }

  return CookieDough;
}

