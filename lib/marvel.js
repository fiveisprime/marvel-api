module.exports = function(options) {
  privkey = options.privateKey;
  pubkey = options.publicKey;

  var internals = {};
  
  internals.characters = require('./characters')(options);

  return internals;
};
