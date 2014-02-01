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

  //
  // Get a list of characters.
  //    Accepts a limit that defaults to 20;
  //    Accepts an offset that defaults to 0;
  //
  internals.findAll = function(limit, offset, fn) {
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
      'http://gateway.marvel.com/v1/public/characters?ts=%s&apikey=%s&hash=%s'
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

  internals.findByName = function(name, fn) {
    var deferred = Q.defer()
      , ts = utils.timestamp();

    var url = util.format(
      'http://gateway.marvel.com/v1/public/characters?ts=%s&apikey=%s&hash=%s'
    , ts
    , pubkey
    , utils.createHash(ts, privkey, pubkey));

    request({
      url: url
    , qs: {
        name: name
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

  //
  // Get a single character with the specified ID.
  //    Accepts a String ID;
  //
  internals.find = function(id, fn) {
    var deferred = Q.defer()
      , ts = utils.timestamp();

    var url = util.format(
      'http://gateway.marvel.com/v1/public/characters/%s?ts=%s&apikey=%s&hash=%s'
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

  //
  // Get a list of comics filtered by character ID.
  //    Accepts a String ID;
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

    var url = util.format(
      'http://gateway.marvel.com/v1/public/characters/%s/comics?ts=%s&apikey=%s&hash=%s'
    , id
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

  //
  // Get a list of events filtered by character ID.
  //    Accepts a String ID;
  //
  internals.events = function(id, limit, offset, fn) {
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
      'http://gateway.marvel.com/v1/public/characters/%s/events?ts=%s&apikey=%s&hash=%s'
    , id
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

  //
  // Get a list of stories filtered by character ID.
  //    Accepts a String ID;
  //
  internals.stories = function(id, limit, offset, fn) {
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
      'http://gateway.marvel.com/v1/public/characters/%s/stories?ts=%s&apikey=%s&hash=%s'
    , id
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

  return internals;
};
