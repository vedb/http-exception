const capitalize = require('./capitalize')

const camelCase = (string = '') => {
  const punctuationRe = /'/g
  const [first = '', ...rest] = string.replace(punctuationRe, '').split(' ')

  return first.toLowerCase() + rest.map(capitalize).join('')
}

module.exports = camelCase
