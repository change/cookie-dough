var expect = require('chai').expect;

var createApp = require('./koa');
var request = require('supertest');
var ext = require('../extensions/koa');

describe('cookie-dough: koa extension', function() {
  var app;
  beforeEach(function() {
    app = createApp();
  });

  describe('set', function() {
    it('works', function (done) {
      app.use(function *() {
        var instance = ext(this.cookies);
        instance.set('world', 'you');
      });

      request.agent(app.listen())
        .get('/')
        .expect('Set-Cookie', /world=you;/)
        .end(done);
    });
  });

  describe('remove', function() {
    it('works', function (done) {
      app.use(function *() {
        var instance = ext(this.cookies);
        instance.set('handsome', 'me');
        instance.remove('handsome');
      });

      request.agent(app.listen())
        .get('/')
        .expect('Set-Cookie', /handsome=;/)
        .end(done);
    });
  });
});
