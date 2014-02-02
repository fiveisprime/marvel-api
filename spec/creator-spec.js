var nock  = require('nock')
  , util  = require('util')
  , utils = require('../lib/utils')
  , rootUrl = 'http://gateway.marvel.com'
  , ts, hash;

var creators = require('../lib/creators')({
  publicKey: 'public-test'
, privateKey: 'private-test'
});

describe('creators', function() {

  beforeEach(function() {
    ts = utils.timestamp();
    hash = utils.createHash(ts, 'private-test', 'public-test');
  });

  it('should call #findAll with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    creators.findAll()
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    creators.findAll(10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    creators.findAll(10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });
});
