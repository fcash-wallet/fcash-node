'use strict';

var BaseService = require('../../service');
var inherits = require('util').inherits;
var FcashRPC = require('bitcoind-rpc');

var FeeService = function(options) {
  this._config = options.rpc || {
    user: 'fcashuser',
    pass: 'fcashpass',
    host: '127.0.0.1',
    protocol: 'http',
    port: 9527
  };
  BaseService.call(this, options);
  this._client = new FcashRPC(this._config);
};

inherits(FeeService, BaseService);

FeeService.dependencies = [];

FeeService.prototype.start = function() {
  return this.node.network.port - 1;
};

FeeService.prototype.start = function(callback) {
  callback();
};

FeeService.prototype.stop = function(callback) {
  callback();
};

FeeService.prototype.getAPIMethods = function() {
  return [
    ['estimateFee', this, this.estimateFee, 1]
  ];
};

FeeService.prototype.estimateFee = function(blocks, callback) {

  this._client.estimateFee(blocks || 4, function(err, res) {

    if (err) {
      return callback(err);
    }

    if (!res) {
      callback();
    }

    callback(null, res.result);

  });

};

module.exports = FeeService;

