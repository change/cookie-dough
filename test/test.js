var sinon = require('sinon'); 
var expect = require('chai').expect;
var cookie = require('../');

describe('cookie-dough', function() {
  var sandbox;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function() {
    sandbox.restore();
  });

  describe('set', function() {
    it('should use the instance `set`', function() {
      var set = sandbox.spy();
      cookie.init({ set: set });
      cookie.set('key', 'val');
      expect(set.calledOnce).to.be.true;
    });
  });

  describe('get', function() {
    it('should use the instance `get`', function() {
      var get = sandbox.spy();
      cookie.init({ get: get });
      cookie.get('key');
      expect(get.calledOnce).to.be.true;
    });
  });

  describe('remove', function() {
    it('should use the instance `remove`', function() {
      var remove = sandbox.spy();
      cookie.init({ remove: remove });
      cookie.remove('key');
      expect(remove.calledOnce).to.be.true;
    });
  });

  describe('all', function() {
    it('should use the instance `all`', function() {
      var all = sandbox.spy();
      cookie.init({ all: all });
      cookie.all();
      expect(all.calledOnce).to.be.true;
    });
  });
});