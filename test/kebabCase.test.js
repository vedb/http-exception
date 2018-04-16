'use strict'

const assert = require('assert')
const _ = require('lodash/fp')
const kebabCase = require('../src/utils/kebabCase')

describe('kebabCase', () => {
  it('is a function', () => assert(_.isFunction(kebabCase)))

  it('it formats whitespace in an input string', () => {
    const output = kebabCase('internal server error')
    const expected = 'internal-server-error'

    assert(output === expected)
  })

  it('it formats punctuation in an input string', () => {
    const output = kebabCase("formatter's function")
    const expected = 'formatters-function'

    assert(output === expected)
  })

  it('it returns a lower case string', () => {
    const output = kebabCase('INTERNAL SERVER ERROR')
    const expected = output.toLowerCase()

    assert(output === expected)
  })
})
