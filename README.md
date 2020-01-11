# HttpException

> HttpException is a small, easy-to-use, and dependency-free HTTP error library for Node.

[Exceptions vs Errors](https://nodejs.org/api/errors.html#errors_exceptions_vs_errors)

HttpException is still a work in progress.

## Features

HttpException improves the error handling experience while keeping the familiar
JavaScript native Error object API. It supports creating custom error objects
and comes with smart defaults. Use the HTTP status code functions to create
status-specific errors. All status codes included in Node's http module are
supported.

[Node's http module](https://nodejs.org/api/http.html)

* Small size (~2 KB)
* Familiar native Error API
* No third-party dependencies
* Uses Node's http module's status codes

## Install

Using npm:

```
npm install --save http-exception
```

Once installed, import and use:

```javascript
const HttpException = require('http-exception').default

// via the HttpException class
const errorOne = new HttpException()

// via the createError factory
const errorTwo = HttpException.createError()

// via HttpException's static HTTP status-specific methods
const errorThree = HttpException.internalServerError()

throw errorOne
```

## Introduction

HttpException extends the native Error object. As a result, HttpException
inherits Error's prototype properties, including those properties' [property
descriptor
configurations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
(configurable, enumerable, writable). The inherited properties are `message`
and `stack`. Both properties are not enumerable. This may change in the near future.

All Error objects returned from HttpException have the following shape:

```javascript
{
  code: 'internal-server-error',
  message: 'Internal Server Error',
  stack: 'stack...',
  status: 500
}
```
The example above looks like what a normal Error object returns, with the
addition of `code` and `status` properties. If no parameters are provided to
HttpException APIs, newly created HttpException objects will default to these
internal server error properties. The properties are set to the appropriate
values when using status-specific methods.

Note that the `code` property is not the same as the `status` property. Having
`code` a part of HTTP error objects is particularly powerful allowing teams to
build a declarative language around their application's error handling. It
provides a new vector of error customization for your backend's error handling
processes and client's will have an easier time parsing responses. The
rationale is that in a typical backend application there are many ways
exceptions can be thrown. The same types of exceptions typically repeat across
the application and it's good if we can describe what these error are rather
than have to tell the app how to throw the specific error each time.

TODO: decide how to handle HttpException property enumerability and
property/descriptor inheritance

## Syntax

### new HttpException([message])

* `message` { String }

Returns a new HttpException object.

```javascript
throw new HttpException()
```

### HttpException\[httpStatusType\]([message])

* `message` { String }

Returns a new HttpException object.

```javascript
const message = 'Missing x property from payload'
const error = HttpException.badRequest(message)

throw error
```

### HttpException.createError([options])

* `options` { Object }

Return a new HttpException object.

```javascript
const error = HttpException.createError({
  message: 'No user found'
})

throw error
```

## Bugs and feature requests

Have a bug or feature request? [Please open a new issue](https://github.com/vedb/http-exception/issues/new)

## Licence

[MIT](https://github.com/vedb/http-exception/blob/master/LICENSE)
