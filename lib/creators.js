//
//     Marvel-API
//     Copyright(c) 2014 Matt Hernandez <matt@modulus.io>
//     ISC Licensed
//

var request = require('request')
  , utils   = require('./utils')
  , Q       = require('q');

module.exports = function(options) {
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

      deferred.resolve(response.body.data.results);

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

    request({
      url: 'http://gateway.marvel.com/v1/public/creators'
    , json: true
    , qs: {
        ts: ts
      , apikey: pubkey
      , hash: utils.createHash(ts, privkey, pubkey)
      , firstName: first
      , middleName: middle || ''
      , lastName: last || ''
      }
    }, function(err, response) {
      if (err) {
        return deferred.reject(err);
      }

      if (response.statusCode !== 200) {
        return deferred.reject(new Error(response.body));
      }

      deferred.resolve(response.body.data.results);

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

      deferred.resolve(response.body.data.results);

    });

    return deferred.promise.nodeify(fn);
  };

  return internals;
};
