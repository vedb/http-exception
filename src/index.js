'use strict'

const http = require('http')
const camelCase = require('./utils/camelCase')
const kebabCase = require('./utils/kebabCase')
const { errorStatusCodes } = require('./status')

class HttpException extends Error {
  constructor(message = 'Internal Server Error') {
    super(message)

    this.code = 'internal-server-error'
    this.status = 500
  }

  static createError({ message, ...restOptions } = {}) {
    const error = new HttpException(message)

    Object.keys(restOptions).forEach(key => {
      error[key] = restOptions[key]
    })

    Error.captureStackTrace(error, HttpException.createError)

    return error
  }
}

errorStatusCodes.forEach(status => {
  const statusMessage = http.STATUS_CODES[status]

  const code = kebabCase(statusMessage)
  const method = camelCase(statusMessage)

  HttpException[method] = (message = statusMessage) => {
    const error = HttpException.createError({
      code,
      message,
      status
    })

    Error.captureStackTrace(error, HttpException[method])

    return error
  }
})

module.exports = HttpException
