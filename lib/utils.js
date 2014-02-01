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
