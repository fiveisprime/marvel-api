module.exports = function(options) {

  var internals = {};
  
  internals.characters = require('./characters')(options);

  return internals;
};
