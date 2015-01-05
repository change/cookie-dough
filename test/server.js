var express = require('express'),
    CookieDough = require('../index.js'),
    cookieParser = require('cookie-parser'),
    app = express();

app.use(cookieParser());

app.get('/', function (req, res) {
  var cookie = new CookieDough(req);
  console.log('set', cookie.set('test', 'value5'));
  console.log('get', cookie.get('test'));
  console.log('remove', cookie.remove('test'));
  console.log('all', cookie.all());
  res.json({});
});

app.listen(3030, function () {
  console.log('App is running on port 3030');
})
