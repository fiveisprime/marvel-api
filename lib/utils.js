//
//     Marvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//

var crypto  = require('crypto');

exports.timestamp = function() {
  return parseInt(Date.now() / 1000, 10);
};

exports.createHash = function(ts, privkey, pubkey) {
  var preHash = ts + privkey + pubkey
    , hash    = crypto.createHash('md5').update(preHash).digest('hex');

  return hash;
};

exports.formatResponse = function(body) {
  var res = {};

  res.data = body.data.results;
  res.meta = {
    offset: body.data.offset
  , limit: body.data.limit
  , total: body.data.total
  , count: body.data.count
  };

  return res;
};
