//
//     Marvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//

module.exports = function(options) {

  var internals = {};

  internals.characters = require('./characters')(options);
  internals.creators   = require('./creators')(options);
  internals.stories    = require('./stories')(options);
  internals.comics     = require('./comics')(options);
  internals.events     = require('./events')(options);
  internals.series     = require('./series')(options);

  return internals;
};
