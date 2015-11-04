var expect = require('chai').expect;
var request = require('supertest');

var createApp = require('./express');
var ext = require('../extensions/express');

describe('cookie-dough: express extension', function() {
  var app;
  beforeEach(function() {
    app = createApp();
  });

  describe('set', function() {
    it('works', function (done) {
      app.get('/', function(req, res) {
        var instance = ext(req);
        var world = instance.set('world', 'you');
        res.end();
      });

      request(app)
        .get('/')
        .expect(function(res) {
          var cookies = res.headers['set-cookie'].join(';');
          expect(cookies).to.contain('world=you;');
        })
        .end(done);
    });
  });

  describe('remove', function() {
    it('works', function (done) {
      app.get('/', function(req, res) {
        var instance = ext(req);
        instance.set('handsome', 'me');
        instance.remove('handsome');
        res.end();
      });

      request(app)
        .get('/')
        .expect(function(res) {
          var cookies = res.headers['set-cookie'].join(';');
          expect(cookies).to.contain('handsome=;');
        })
        .end(done);
    });
  });
});
