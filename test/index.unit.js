'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export fcash-lib', function() {
    var fcash = require('../');
    should.exist(fcash.lib);
    should.exist(fcash.lib.Transaction);
    should.exist(fcash.lib.Block);
  });
});
