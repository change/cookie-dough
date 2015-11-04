var express = require('express');
var cookie = require('../index.js');
var cookieParser = require('cookie-parser');

module.exports = function createApp() {
  var app = express();
  app.use(cookieParser());
  return app;
};