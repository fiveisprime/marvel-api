exports.createClient = function(options) {

  if (!options) {
    throw new Error('You must provide API credentials');
  }

  if (!options.privateKey) {
    throw new Error('You must specify a private API key');
  }

  if (!options.publicKey) {
    throw new Error('You must specify a public API key');
  }

  return require('./lib/marvel')(options);
};
