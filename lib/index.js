//
//     Marvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//

module.exports = function(options) {

  var internals = {}
    , utils = require('./utils')
    , request = require('request')
    , Q = require('q');

  internals.characters = require('./characters')(options, utils);
  internals.creators   = require('./creators')(options, utils);
  internals.stories    = require('./stories')(options, utils);
  internals.comics     = require('./comics')(options, utils);
  internals.events     = require('./events')(options, utils);
  internals.series     = require('./series')(options, utils);
  internals.query      = function(target, query, fn) {
    var deferred = Q.defer()
      , ts = utils.timestamp()
      , pubkey = options.publicKey
      , privkey = options.privateKey;

    request({
      url: 'http://gateway.marvel.com/v1/public/' + target
    , json: true
    , qs: Object.assign({
        ts: ts
      , apikey: pubkey
      , hash: utils.createHash(ts, privkey, pubkey)
      }, query)
    }, function(err, response) {
      if (err) {
        return deferred.reject(err);
      }

      if (response.statusCode !== 200) {
        return deferred.reject(new Error(response.body));
      }

      deferred.resolve(utils.formatResponse(response.body));

    });

    return deferred.promise.nodeify(fn);
  };

  return internals;
};
