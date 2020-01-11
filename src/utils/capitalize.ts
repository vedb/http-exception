export default ([first = '', ...rest] = '') =>
  first.toUpperCase() + rest.map(char => char.toLowerCase()).join('')
