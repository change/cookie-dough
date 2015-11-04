var cookie = require('cookie');
var instance = null;

module.exports = {
  set: function (key, value, options) {
    return instance.set(key, value, options);
  },

  get: function (key) {
    return instance.get(key);
  },

  remove: function (key, options) {
    return instance.remove(key, options);
  },

  all: function () {
    return instance.all();
  },

  init: function(ext) {
    instance = ext;
  }
};
