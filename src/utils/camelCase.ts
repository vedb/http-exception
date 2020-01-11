import capitalize from './capitalize'

export default (string = '') => {
  const punctuationRe = /'/g
  const [first = '', ...rest] = string.replace(punctuationRe, '').split(' ')

  return first.toLowerCase() + rest.map(capitalize).join('')
}
