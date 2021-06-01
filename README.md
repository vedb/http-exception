# HttpException

> A small, easy to use, and zero dependency http error library.

## Features

- Small size (~2 KB)
- Zero dependencies

## Install

Using npm:

```
npm install --save http-exception
```

Once installed, import and use:

```javascript
const HttpException = require('http-exception')

// via the HttpException class
new HttpException('message')

// via HttpException's status methods
HttpException.internalServerError('message')

// via the createError factory
HttpException.createError({
  message: 'message'
})
```

## Bugs and feature requests

Have a bug or feature request? [Please open a new issue](https://github.com/vedrxn/http-exception/issues/new)

## Licence

[MIT](https://github.com/vedrxn/http-exception/blob/master/LICENSE)
