let nock  = require('nock')
  , util  = require('util')
  , utils = require('../lib/utils')
  , rootUrl = 'http://gateway.marvel.com'
  , ts, hash;

const series = require('../lib/series')({
  publicKey: 'public-test'
, privateKey: 'private-test'
}, utils);

utils.timestamp = function() {
  return 1234;
};

utils.createHash = function() {
  return '5678';
};

describe('series', function() {

  beforeEach(function() {
    ts = utils.timestamp();
    hash = utils.createHash(ts, 'private-test', 'public-test');
  });

  it('should call #findAll with the correct default parameters', function(done) {
    const route = util.format(
      '/v1/public/series?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.findAll()
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit', function(done) {
    const route = util.format(
      '/v1/public/series?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.findAll(10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findAll with the correct limit and offset', function(done) {
    const route = util.format(
      '/v1/public/series?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.findAll(10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #findByTitle with the correct parameters', function(done) {
    const route = util.format(
      '/v1/public/series?ts=%s&apikey=public-test&hash=%s&title=test-man'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    series.findByTitle('test-man')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #find with the correct id', function(done) {
    const route = util.format(
      '/v1/public/series/%s?ts=%s&apikey=public-test&hash=%s'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: {} } });

    series.find('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct default parameters', function(done) {
    const route = util.format(
      '/v1/public/series/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.comics('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit', function(done) {
    const route = util.format(
      '/v1/public/series/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.comics('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #comics with the correct limit and offset', function(done) {
    const route = util.format(
      '/v1/public/series/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.comics('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #events with the correct default parameters', function(done) {
    const route = util.format(
      '/v1/public/series/%s/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.events('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #events with the correct limit', function(done) {
    const route = util.format(
      '/v1/public/series/%s/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.events('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #events with the correct limit and offset', function(done) {
    const route = util.format(
      '/v1/public/series/%s/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.events('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct default parameters', function(done) {
    const route = util.format(
      '/v1/public/series/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.stories('1234')
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct limit', function(done) {
    const route = util.format(
      '/v1/public/series/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.stories('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #stories with the correct limit and offset', function(done) {
    const route = util.format(
      '/v1/public/series/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.stories('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #characters with the correct limit', function(done) {
    const route = util.format(
      '/v1/public/series/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.characters('1234', 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  it('should call #characters with the correct limit and offset', function(done) {
    const route = util.format(
      '/v1/public/series/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=10&offset=10'
    , '1234'
    , ts
    , hash);

    nock(rootUrl)
      .get(route)
      .reply(200, { data: { results: [] } });

    series.characters('1234', 10, 10)
      .then(function(data) {
        data.should.exist;
        done();
      })
      .done();
  });

  describe('error handling', function() {

    it('should catch errors from #findAll', function(done) {
      const route = util.format(
        '/v1/public/series?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      series.findAll()
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #findByTitle', function(done) {
      const route = util.format(
        '/v1/public/series?ts=%s&apikey=public-test&hash=%s&title=test-man'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      series.findByTitle('test-man')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #find', function(done) {
      const route = util.format(
        '/v1/public/series/%s?ts=%s&apikey=public-test&hash=%s'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      series.find('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #comics', function(done) {
      const route = util.format(
        '/v1/public/series/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      series.comics('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #events', function(done) {
      const route = util.format(
        '/v1/public/series/%s/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      series.events('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #characters', function(done) {
      const route = util.format(
        '/v1/public/series/%s/characters?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      series.characters('1234')
        .fail(function(err) {
          err.should.exist;
          err.message.should.equal('Not found');

          done();
        })
        .done();
    });

    it('should catch errors from #stories', function(done) {
      const route = util.format(
        '/v1/public/series/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(404, 'Not found');

      series.stories('1234')
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
      const route = util.format(
        '/v1/public/series?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.findAll(function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #findAll with the correct limit', function(done) {
      const route = util.format(
        '/v1/public/series?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.findAll(10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;

        done();
      });
    });

    it('should call #comics with the correct defaults', function(done) {
      const route = util.format(
        '/v1/public/series/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.comics('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #comics with the correct limit', function(done) {
      const route = util.format(
        '/v1/public/series/%s/comics?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.comics('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #events with the correct defaults', function(done) {
      const route = util.format(
        '/v1/public/series/%s/events?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.events('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #events with the correct limit', function(done) {
      const route = util.format(
        '/v1/public/series/%s/events?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.events('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #stories with the correct defaults', function(done) {
      const route = util.format(
        '/v1/public/series/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=20&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.stories('1234', function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });

    it('should call #stories with the correct limit', function(done) {
      const route = util.format(
        '/v1/public/series/%s/stories?ts=%s&apikey=public-test&hash=%s&limit=10&offset=0'
      , '1234'
      , ts
      , hash);

      nock(rootUrl)
        .get(route)
        .reply(200, { data: { results: [] } });

      series.stories('1234', 10, function(err, data) {
        (err === null).should.equal(true);
        data.should.exist;
        done();
      });
    });
  });
});
