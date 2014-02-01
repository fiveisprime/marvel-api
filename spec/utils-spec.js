var utils = require('../lib/utils');

describe('utils', function() {

  it('should create a timestamp', function() {
    var ts = utils.timestamp();

    ts.should.exist;
    (typeof ts === 'number').should.equal(true);
  });

  it('should create a hash', function() {
    var hash = utils.createHash(utils.timestamp(), 'test', 'test');

    hash.should.exist;
  });
});
