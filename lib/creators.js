//
//     Marvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//

var request = require('request')
  , util    = require('util')
  , Q       = require('q');

module.exports = function(options, utils) {
  var pubkey    = options.publicKey
    , privkey   = options.privateKey
    , internals = {};

  //
  // Get a list of creators.
  //    Accepts a limit that defaults to 20;
  //    Accepts an offset that defaults to 0;
  //
  internals.findAll = function(limit, offset, fn) {
    var deferred = Q.defer()
      , ts = utils.timestamp();

    if (typeof limit === 'function') {
      fn = limit;
      limit = 20;
    }

    if (typeof offset === 'function') {
      fn = offset;
      offset = 0;
    }

    request({
      url: 'http://gateway.marvel.com/v1/public/creators'
    , json: true
    , qs: {
        ts: ts
      , apikey: pubkey
      , hash: utils.createHash(ts, privkey, pubkey)
      , limit: limit || 20
      , offset: offset || 0
      }
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

    //
  // Get a single creator with the specified name.
  //    Accepts a String first name;
  //    Accepts a String middle name;
  //    Accepts a String last name;
  //
  internals.findByName = function(first, middle, last, fn) {
    var deferred = Q.defer()
      , ts = utils.timestamp();

    if (typeof middle === 'function') {
      fn = middle;
      middle = '';
    }

    if (typeof last === 'function') {
      fn = last;
      last = '';
    }

    var qs = {
        ts: ts
      , apikey: pubkey
      , hash: utils.createHash(ts, privkey, pubkey)
      , firstName: first
      };

    if (middle) {
      qs.middleName = middle;
    }

    if (last) {
      qs.lastName = last;
    }

    request({
      url: 'http://gateway.marvel.com/v1/public/creators'
    , json: true
    , qs: qs
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

  //
  // Get a single creator with the specified ID.
  //    Accepts a String ID;
  //
  internals.find = function(id, fn) {
    var deferred = Q.defer()
      , ts = utils.timestamp();

    request({
      url: 'http://gateway.marvel.com/v1/public/creators/' + id
    , json: true
    , qs: {
        ts: ts
      , apikey: pubkey
      , hash: utils.createHash(ts, privkey, pubkey)
      }
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

  //
  // Get a list of comics filtered by creator ID.
  //    Accepts a String ID;
  //    Accepts a limit that defaults to 20;
  //    Accepts an offset that defaults to 0;
  //
  internals.comics = function(id, limit, offset, fn) {
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

    request({
      url: util.format('http://gateway.marvel.com/v1/public/creators/%s/comics', id)
    , json: true
    , qs: {
        ts: ts
      , apikey: pubkey
      , hash: utils.createHash(ts, privkey, pubkey)
      , limit: limit || 20
      , offset: offset || 0
      }
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
