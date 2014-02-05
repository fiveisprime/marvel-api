//
//     Marvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//

module.exports = function(options) {

  var internals = {}
    , utils = require('./utils');

  internals.characters = require('./characters')(options, utils);
  internals.creators   = require('./creators')(options, utils);
  internals.stories    = require('./stories')(options, utils);
  internals.comics     = require('./comics')(options, utils);
  internals.events     = require('./events')(options, utils);
  internals.series     = require('./series')(options, utils);

  return internals;
};
