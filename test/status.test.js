'use strict'

const assert = require('assert')
const _ = require('lodash/fp')
const status = require('../src/status')

const applyToObjProp = _.curry((fn, prop, obj) => fn(obj[prop]))

const isPropString = applyToObjProp(_.isString)
const isPropNumber = applyToObjProp(_.isNumber)

describe('status', function() {
  describe('defaults', () => {
    it('is an object', () => assert(_.isObject(status.defaults)))

    it('has a code property set to internal-server-error', () =>
      assert(status.defaults.code === 'internal-server-error'))

    it('has a status property set to 500', () =>
      assert(status.defaults.status === 500))

    it('has a message property set to Internal Server Error', () =>
      assert(status.defaults.message === 'Internal Server Error'))
  })

  describe('isErrorStatus', () => {
    it('is a function', () => assert(_.isFunction(status.isErrorStatus)))

    it('returns true for numbers greater or equal than 400', () => {
      const numbers = Array(10)
        .fill()
        .map(() => _.random(400, 600))

      assert(numbers.every(status.isErrorStatus))
    })

    it('returns false for numbers less than 400', () => {
      const numbers = Array(10)
        .fill()
        .map(() => _.random(399))

      assert(numbers.every(_.negate(status.isErrorStatus)))
    })
  })

  describe('errorStatusCodes', () => {
    it('is an array', () => assert(Array.isArray(status.errorStatusCodes)))

    it('contains objects only', () =>
      assert(status.errorStatusCodes.every(_.isObject)))

    describe('error status code objects', () => {
      it('has only code, message, and status properties', () => {
        const properties = ['code', 'message', 'status']

        const isValid = status.errorStatusCodes.every(item =>
          Object.keys(item).every(key => properties.includes(key))
        )

        assert(isValid)
      })

      it('has string as the code property type', () =>
        assert(status.errorStatusCodes.every(isPropString('code'))))

      it('has string as the message property type', () =>
        assert(status.errorStatusCodes.every(isPropString('message'))))

      it('has number as the status property type', () =>
        assert(status.errorStatusCodes.every(isPropNumber('status'))))
    })
  })
})
