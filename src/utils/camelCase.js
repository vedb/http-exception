'use strict'

const capitalize = require('./capitalize')

module.exports = (string = '') => {
  const punctuationRe = /'/g
  const [first = '', ...rest] = string.replace(punctuationRe, '').split(' ')

  return first.toLowerCase() + rest.map(capitalize).join('')
}
