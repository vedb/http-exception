const http = require('http')

const isErrorStatusCode = status => Number(status) >= 400

const errorStatusCodes = Object.keys(http.STATUS_CODES).filter(
  isErrorStatusCode
)

module.exports = {
  errorStatusCodes,
  isErrorStatusCode
}
