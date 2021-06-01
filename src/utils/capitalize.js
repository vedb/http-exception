const capitalize = ([first = '', ...rest] = '') => {
  return first.toUpperCase() + rest.map(char => char.toLowerCase()).join('')
}

module.exports = capitalize
