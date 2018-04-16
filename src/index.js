'use strict'

const camelCase = require('./utils/camelCase')
const { defaults, errorStatusCodes } = require('./status')

class HttpException extends Error {
  constructor(...args) {
    super(...args)

    this.message = this.message || defaults.message

    this.code = defaults.code
    this.status = defaults.status
  }
  static createError(options = {}) {
    const { message, ...restOptions } = options
    const error = new HttpException(message)

    Error.captureStackTrace(error, HttpException.createError)

    return Object.assign(error, restOptions)
  }
}

errorStatusCodes.forEach(item => {
  const method = camelCase(item.message)

  HttpException[method] = (message = item.message) => {
    const error = HttpException.createError({
      ...item,
      message
    })

    Error.captureStackTrace(error, HttpException[method])

    return error
  }
})

module.exports = HttpException
