cookie-dough
============

An isomorphic JavaScript cookie library.

Wraps https://www.npmjs.com/package/cookie to work on the client and server.  Also, required is having parsed cookies in express (for now).

## Usage


### Geting a cookie

```js
// client-side
// automatically parses the cookies for the page
var cookie = require('cookie-dough')();
cookie.get('name');

// server-side
var express = require('express'),
    CookieDough = require('cookie-dough'),
    cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
  var cookie = new CookieDough(req); // req is required when creating an instance
  cookie.get('name');
});
```

### Getting all the cookies
```js
// client-side
// automatically parses the cookies for the page
var cookie = require('cookie-dough')();

// returns an object with all of the cookies
// format: { cookieName: "cookie value" }
cookie.all();

// server-side
var express = require('express'),
    CookieDough = require('cookie-dough'),
    cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
  var cookie = new CookieDough(req);
  cookie.all();
});
```

### Setting a cookie

```js
// client-side
var cookie = require('cookie-dough')();
cookie.set('name', 'value', { /* options */ });

// server-side
var express = require('express'),
    CookieDough = require('cookie-dough'),
    cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
  var cookie = new CookieDough(req);
  cookie.set('name', 'value', { /* options */ });
});
```

The options that you can set on a cookie:

*path* - cookie path

*expires* - absolute expiration date for the cookie (Date object)

*maxAge* - relative max age of the cookie from when the client receives it (seconds)

*domain* - domain for the cookie

*secure* - true or false

*httpOnly* - true or false


### Removing a cookie

```js
// client-side
var cookie = require('cookie-dough')();
cookie.remove('name', { /* options */ });

// server-side
var express = require('express'),
    CookieDough = require('cookie-dough'),
    cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
  var cookie = new CookieDough(req);
  cookie.remove('name');
});
```

The options that can be set to remove a cookie are: 

*path* - cookie path

*domain* - domain for the cookie
