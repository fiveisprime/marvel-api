const utils = require('../lib/utils');

describe('utils', function() {

  it('should create a timestamp', function() {
    const ts = utils.timestamp();

    ts.should.exist;
    (typeof ts === 'number').should.equal(true);
  });

  it('should create a hash', function() {
    const hash = utils.createHash(utils.timestamp(), 'test', 'test');

    hash.should.exist;
  });
});
