marvel-api
==========

Node.js wrapper for working with the official Marvel Comics API

#Usage

Initialize an API client using your public and private API keys.

```js
var marvel = require('marvel-api').createClient({
  publicKey: 'my-public-key'
, privateKey: 'my-private-key'
});
```

All methods return promises but also accept a callback.

```js
marvel.characters.getAll(function(err, results) {
  if (err) {
    return console.error(err);
  }

  console.log(results);
});
```

```js
marvel.characters.getAll()
  .then(console.log)
  .fail(console.error)
  .done();
```

# Implemented

### Characters

**GetAll**

Get all characters within range. Accepts a limit and/or offset. Offset defaults
to 0; limit defaults to 20 with a maximum of 100.

```js
// Get the first 20 characters.
marvel.characters.getAll()
  .then(console.log)
  .fail(console.error)
  .done();
```

```js
// Get the first 5 characters.
marvel.characters.getAll(5)
  .then(console.log)
  .fail(console.error)
  .done();
```

```js
// Get the 3 characters starting at index 30.
marvel.characters.getAll(3, 30)
  .then(console.log)
  .fail(console.error)
  .done();
```

**GetById**

Get the character with the specified index.

```js
// Get the first 5 characters.
marvel.characters.getById('1011227')
  .then(console.log)
  .fail(console.error)
  .done();
```

# Todo

...everything else... :(

# License

Copyright (c) 2014, Matt Hernandez <matt@modulus.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
