'use strict'

const assert = require('assert')
const _ = require('lodash/fp')
const capitalize = require('../src/utils/capitalize')

describe('capitalize', () => {
  it('is a function', () => assert(_.isFunction(capitalize)))

  it('it capitalizes a word', () => {
    const output = capitalize('capitalize')
    const expected = 'Capitalize'

    assert(output === expected)
  })

  it('it capitalizes a sentence', () => {
    const output = capitalize('capitalize this sentence')
    const expected = 'Capitalize this sentence'

    assert(output === expected)
  })
})
