const kebabCase = (string = '') => {
  const whiteSpaceRe = /\s/g
  const punctuationRe = /'/gi

  return string
    .replace(whiteSpaceRe, '-')
    .replace(punctuationRe, '')
    .toLowerCase()
}

module.exports = kebabCase
