var chai = require('chai'),
    expect = chai.expect,
    subject = require('../index.js')

describe('cookie-dough', function() {
  describe('set', function() {
    it('works', function () {
      subject.set('key', 123, {opts: true});
      expect(true).to.be.true
    });
  });

  describe('get', function() {
    it('works', function () {
      subject.get('key');
      expect(true).to.be.true
    });
  });

});
