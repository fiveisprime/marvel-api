//
//     Marvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//

var request = require('request')
  , util    = require('util')
  , utils   = require('./utils')
  , Q       = require('q');

module.exports = function(options) {
  var pubkey    = options.publicKey
    , privkey   = options.privateKey
    , internals = {};

  internals.getAll = function(limit, offset, fn) {
    if (typeof limit === 'function') {
      fn = limit;
      limit = 20;
    }

    if (typeof offset === 'function') {
      fn = offset;
      offset = 0;
    }

    var deferred = Q.defer()
      , ts = utils.timestamp();

    var url = util.format(
      'http://gateway.marvel.com/v1/public/%s?ts=%s&apikey=%s&hash=%s'
    , 'characters'
    , ts
    , pubkey
    , utils.createHash(ts, privkey, pubkey));

    request({
      url: url
    , qs: {
        limit: limit || 20
      , offset: offset || 0
      }
    }, function(err, response) {
      if (err) {
        return deferred.reject(err);
      }

      if (response.statusCode !== 200) {
        return deferred.reject(new Error(response.body));
      }

      var res = JSON.parse(response.body);

      deferred.resolve(res.data.results);

    });

    return deferred.promise.nodeify(fn);
  };

  internals.getById = function(id, fn) {
    var deferred = Q.defer()
      , ts = utils.timestamp();

    var url = util.format(
      'http://gateway.marvel.com/v1/public/%s/%s?ts=%s&apikey=%s&hash=%s'
    , 'characters'
    , id
    , ts
    , pubkey
    , utils.createHash(ts, privkey, pubkey));

    request(url, function(err, response) {
      if (err) {
        return deferred.reject(err);
      }

      if (response.statusCode !== 200) {
        return deferred.reject(new Error(response.body));
      }

      var res = JSON.parse(response.body);

      deferred.resolve(res.data.results);

    });

    return deferred.promise.nodeify(fn);
  };

  return internals;
};
