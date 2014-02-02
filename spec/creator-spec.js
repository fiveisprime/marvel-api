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

  it('should call #comics with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/creators/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    creators.comics('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/creators/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    creators.comics('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/creators/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    creators.comics('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  describe('errors', function() {

    it('should catch errors from #findAll', function(done) {
      var route = util.format(
        '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      creators.findAll()
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #findByName', function(done) {
      var route = util.format(
        '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&firstName=test-man&middleName=&lastName='
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      creators.findByName('test-man')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #find', function(done) {
      var route = util.format(
        '/v1/public/creators/%s?ts=%s&apikey=public-test&hash=%s'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      creators.find('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #comics', function(done) {
      var route = util.format(
        '/v1/public/creators/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      creators.comics('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });
  });

  describe('optional parameters with callbacks', function() {

    it('should call #findAll with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      creators.findAll(function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #findAll with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/creators?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      creators.findAll(10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;

        done();
      });
    });

    it('should call #comics with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/creators/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '4110'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      creators.comics('4110', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #comics with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/creators/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '4110'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      creators.comics('4110', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });
  });
});
