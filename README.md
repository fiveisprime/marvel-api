marvel-api [![Build Status](https://travis-ci.org/fiveisprime/marvel-api.png?branch=master)](https://travis-ci.org/fiveisprime/marvel-api)
==========

Node.js wrapper for working with the official Marvel Comics API

# Usage

Head over to [developer.marvel.com](http://developer.marvel.com) and sign up/in
to get your API keys. Install the module using [npm](https://npmjs.org) and
initialize an API client using the public and private API keys for your
account.

```js
var api = require('marvel-api');

var marvel = api.createClient({
  publicKey: 'my-public-key'
, privateKey: 'my-private-key'
});
```

All methods return promises but also accept a callback.

..use the promise...

```js
marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();
```

..or use a callback.

```js
marvel.characters.findAll(function(err, results) {
  if (err) {
    return console.error(err);
  }

  console.log(results);
});
```

### Example

Find Spider-Man's ID then the first 20 comics he's been in.

```js
marvel.characters.findByName('spider-man')
  .then(function(chars) {
    console.log('Found character ID', chars[0].id);
    return marvel.characters.comics(chars[0].id);
  })
  .then(console.log)
  .fail(console.error)
  .done();
```

# API

the API is broken into pieces based on the data that will be worked with. Each
object has methods for interacting with the specific bits of data for that
object with some reasonable defaults.

## Characters

###  #findAll

Fetch all characters within range. Accepts a limit and/or offset. Offset defaults
to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 characters.

```js
marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();
```

Fetch the first 5 characters.

```js
marvel.characters.findAll(5)
  .then(console.log)
  .fail(console.error)
  .done();
```

Fetch 3 characters starting at index 30.

```js
marvel.characters.findAll(3, 30)
  .then(console.log)
  .fail(console.error)
  .done();
```

### #findByName

Fetch characters (returns an array) with the specified name.

```js
marvel.characters.findByName('spider-man')
  .then(console.log)
  .fail(console.error)
  .done();
```

###  #find

Fetch a single character with the specified ID.

```js
marvel.characters.find('1011227')
  .then(console.log)
  .fail(console.error)
  .done();
```

### #comics

Fetch a list of comics filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

```js
marvel.characters.comics('1011334')
  .then(console.log)
  .fail(console.error)
  .done();
```

### #events

Fetch a list of events filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

```js
marvel.characters.events('1011334')
  .then(console.log)
  .fail(console.error)
  .done();
```

### #stories

Fetch a tories of events filtered by character ID.

Optionally accepts a limit [20] and an offset [0].

```js
marvel.characters.stories('1011334')
  .then(console.log)
  .fail(console.error)
  .done();
```

## Creators

###  #findAll

Fetch all creators within range. Accepts a limit and/or offset. Offset defaults
to 0; limit defaults to 20 with a maximum of 100.

Fetch the first 20 creators.

```js
marvel.creators.findAll()
  .then(console.log)
  .fail(console.error)
  .done();
```

Fetch the first 5 creators.

```js
marvel.creators.findAll(5)
  .then(console.log)
  .fail(console.error)
  .done();
```

Fetch 3 creators starting at index 30.

```js
marvel.creators.findAll(3, 30)
  .then(console.log)
  .fail(console.error)
  .done();
```

## Stories

### #Todo

## Comics

### #Todo

## Events

### #Todo

## Series

### #Todo

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
