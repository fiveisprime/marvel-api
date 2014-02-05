var nock  = require('nock')
  , util  = require('util')
  , utils = require('../lib/utils')
  , rootUrl = 'http://gateway.marvel.com'
  , ts, hash;

var events = require('../lib/events')({
  publicKey: 'public-test'
, privateKey: 'private-test'
}, utils);

utils.timestamp = function() {
  return 1234;
};

utils.createHash = function() {
  return '5678';
};

describe('events', function() {

  beforeEach(function() {
    ts = utils.timestamp();
    hash = utils.createHash(ts, 'private-test', 'public-test');
  });

  it('should call #findAll with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.findAll()
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.findAll(10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.findAll(10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findByName with the correct parameters', function(done) {
    var route = util.format(
      '/v1/public/events?ts=%s&apikey=public-test&hash=%s&name=test-man'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    events.findByName('test-man')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #find with the correct id', function(done) {
    var route = util.format(
      '/v1/public/events/%s?ts=%s&apikey=public-test&hash=%s'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    events.find('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/events/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.comics('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/events/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.comics('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/events/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.comics('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #characters with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/events/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.characters('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #characters with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/events/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.characters('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #characters with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/events/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.characters('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/events/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.stories('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/events/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.stories('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/events/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    events.stories('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  describe('error handling', function() {

    it('should catch errors from #findAll', function(done) {
      var route = util.format(
        '/v1/public/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      events.findAll()
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #findByName', function(done) {
      var route = util.format(
        '/v1/public/events?ts=%s&apikey=public-test&hash=%s&name=test-man'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      events.findByName('test-man')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #find', function(done) {
      var route = util.format(
        '/v1/public/events/%s?ts=%s&apikey=public-test&hash=%s'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      events.find('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #comics', function(done) {
      var route = util.format(
        '/v1/public/events/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      events.comics('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #characters', function(done) {
      var route = util.format(
        '/v1/public/events/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      events.characters('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #stories', function(done) {
      var route = util.format(
        '/v1/public/events/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      events.stories('1234')
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
        '/v1/public/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.findAll(function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #findAll with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.findAll(10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;

        done();
      });
    });

    it('should call #comics with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/events/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.comics('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #comics with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/events/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.comics('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #characters with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/events/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.characters('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #characters with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/events/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.characters('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #stories with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/events/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.stories('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #stories with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/events/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      events.stories('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });
  });
});
