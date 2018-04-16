'use strict'

module.exports = ([first = '', ...rest]) =>
  first.toUpperCase() + rest.map(char => char.toLowerCase()).join('')
