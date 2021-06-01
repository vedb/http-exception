'use strict'

const assert = require('assert')
const _ = require('lodash/fp')
const camelCase = require('../src/utils/camelCase')

describe('camelCase', () => {
  it('is a function', () => assert(_.isFunction(camelCase)))

  it('it formats a space-delimited string to camel case', () => {
    const output = camelCase('internal server error')
    const expected = 'internalServerError'

    assert(output === expected)
  })
})
