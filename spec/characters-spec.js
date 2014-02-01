var nock  = require('nock')
  , util  = require('util')
  , utils = require('../lib/utils')
  , rootUrl = 'http://gateway.marvel.com'
  , ts, hash;

var characters = require('../lib/characters')({
  publicKey: 'public-test'
, privateKey: 'private-test'
});

describe('characters', function() {

  beforeEach(function() {
    ts = utils.timestamp();
    hash = utils.createHash(ts, 'private-test', 'public-test');
  });

  it('should call #findAll with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.findAll()
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.findAll(10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.findAll(10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findByName with the correct parameters', function(done) {
    var route = util.format(
      '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&name=test-man'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    characters.findByName('test-man')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #find with the correct id', function(done) {
    var route = util.format(
      '/v1/public/characters/%s?ts=%s&apikey=public-test&hash=%s'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    characters.find('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.comics('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.comics('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.comics('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #events with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.events('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #events with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.events('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #events with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.events('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct default parameters', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.stories('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct limit', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.stories('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct limit and offset', function(done) {
    var route = util.format(
      '/v1/public/characters/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    characters.stories('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  describe('errors', function() {

    it('should catch errors from #findAll', function(done) {
      var route = util.format(
        '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      characters.findAll()
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #findByName', function(done) {
      var route = util.format(
        '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&name=test-man'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      characters.findByName('test-man')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #find', function(done) {
      var route = util.format(
        '/v1/public/characters/%s?ts=%s&apikey=public-test&hash=%s'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      characters.find('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #comics', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      characters.comics('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #events', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      characters.events('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #stories', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      characters.stories('1234')
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
        '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.findAll(function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #findAll with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.findAll(10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;

        done();
      });
    });

    it('should call #comics with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.comics('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #comics with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.comics('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #events with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.events('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #events with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.events('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #stories with the correct defaults', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.stories('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #stories with the correct limit', function(done) {
      var route = util.format(
        '/v1/public/characters/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      characters.stories('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });
  });
});
