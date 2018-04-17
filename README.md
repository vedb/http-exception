# HttpException

> HttpException is a small, easy-to-use, and dependency-free HTTP error library for Node.

(Exceptions vs Errors)[https://nodejs.org/api/errors.html#errors_exceptions_vs_errors]

## Features

HttpException improves the error handling experience while matching the
familiar JavaScript native Error object API. It comes with support for creating
custom error objects and with sensible defaults. Use the available HTTP status
code functions to create status-specific errors. All status codes included in
Node's http moddule are supported.

(Node's http module)[https://nodejs.org/api/http.html]

* Familiar native Error API
* Small size (~2 KB)
* No third-party dependencies
* Uses Node's http module's status codes
* Well-tested

## Install

Using npm:

```
npm install --save http-exception
```

Once installed, import and use:

```
const HttpException = require('http-exception')

// via the HttpException class
const errorOne = new HttpException()

// via the createError factory
const errorTwo = HttpException.createError()

// via HttpException's static HTTP methods
const errorThree = HttpException.internalServerError()

throw errorOne
```

## API

### new HttpException([message])

* `message` { String }

Creates a new HttpException object with the supplied message.

### HttpException.createError([options])

* `options` { Object }

Returns an instance of HttpException with the supplied properties.

### HttpException[httpStatusType]([message])

* `message` { String }

Returns an instance of HttpException with the supplied message.

## Todo

HttpException is still a work in progress. Although a well-tested basic level
of functionality is available now, a list of outstanding items and features to
complete is below:

1. Implement a standard mechanism to add custom static exception methods.
2. Consider enabling the customization/initialization of the error objects returned by
   HttpException.
3. Consider exposing elements of `status`.
4. Consider making the library isomorphic.
5. Write tests for stack trace filtering.

## Bugs and feature requests

Have a bug or feature request? (Please open a new issue)[https://github.com/vedb/http-exception/issues/new]

## Licence

[MIT](https://github.com/vedb/http-exception/blob/master/LICENSE)
