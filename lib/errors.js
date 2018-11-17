'use strict';

var createError = require('errno').create;

var FcashNodeError = createError('FcashNodeError');

var RPCError = createError('RPCError', FcashNodeError);

module.exports = {
  Error: FcashNodeError,
  RPCError: RPCError
};
