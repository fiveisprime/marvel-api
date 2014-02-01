var marvel = require('../');

describe('client', function() {

  it('should throw if no options are provided', function() {
    (function() {
      marvel.createClient();
    }).should.throw();
  });

  it('should throw if missing private key', function() {
    (function() {
      marvel.createClient({ publicKey: 'key' });
    }).should.throw();
  });

  it('should throw if missing public key', function() {
    (function() {
      marvel.createClient({ privateKey: 'key' });
    }).should.throw();
  });

  it('should initialize with both public and private keys', function() {
    var client = marvel.createClient({
      publicKey: 'public'
    , privateKey: 'private'
    });

    client.should.exist;
  });
});