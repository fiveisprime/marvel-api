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

  it('should call #findByName with just a first name', function(done) {
    var route = util.format(
      '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&firstName=austin&middleName=&lastName='
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    creators.findByName('austin')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findByName with a first and middle name', function(done) {
    var route = util.format(
      '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&firstName=austin&middleName=dave&lastName='
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    creators.findByName('austin', 'dave')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findByName with a first, middle and last name', function(done) {
    var route = util.format(
      '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&firstName=austin&middleName=dave&lastName=cam'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    creators.findByName('austin', 'dave', 'cam')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #find with the correct id', function(done) {
    var route = util.format(
      '/v1/public/creators/%s?ts=%s&apikey=public-test&hash=%s'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    creators.find('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });
});
