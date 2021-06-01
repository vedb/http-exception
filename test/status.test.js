'use strict'

const assert = require('assert')
const http = require('http')
const _ = require('lodash/fp')
const status = require('../src/status')

describe('status', function() {
  describe('isErrorStatus', () => {
    it('returns true for numbers greater or equal than 400', () => {
      const numbers = Array(10)
        .fill()
        .map(() => _.random(400, 600))

      assert(numbers.every(status.isErrorStatusCode))
    })

    it('returns false for numbers less than 400', () => {
      const numbers = Array(10)
        .fill()
        .map(() => _.random(399))

      assert(numbers.every(_.negate(status.isErrorStatusCode)))
    })
  })

  describe('errorStatusCodes', () => {
    it('contains http module error status codes', () => {
      const httpErrorStatusCodes = Object.keys(http.STATUS_CODES).filter(
        status.isErrorStatusCode
      )

      const hasStatusCodes = httpErrorStatusCodes.every(code =>
        status.errorStatusCodes.includes(code)
      )

      assert(hasStatusCodes)
    })
  })
})
