'use strict'

const statusCodes = require('http').STATUS_CODES
const kebabCase = require('./utils/kebabCase')

const defaults = {
  code: 'internal-server-error',
  message: 'Internal Server Error',
  status: 500
}
module.exports.defaults = defaults

const isErrorStatus = status => {
  const minErrorStatus = 400

  return Number(status) >= minErrorStatus
}
module.exports.isErrorStatus = isErrorStatus

const errorStatusCodes = Object.keys(statusCodes)
  .filter(isErrorStatus)
  .map(status => {
    const message = statusCodes[status]

    return {
      code: kebabCase(message),
      message,
      status: Number(status)
    }
  })
module.exports.errorStatusCodes = errorStatusCodes
