import http from 'http'
import kebabCase from './utils/kebabCase'

export const defaults = {
  code: 'internal-server-error',
  message: 'Internal Server Error',
  status: 500
}

export const isErrorStatus = status => {
  const minErrorStatus = 400

  return Number(status) >= minErrorStatus
}

export const errorStatusCodes = Object.keys(http.STATUS_CODES)
  .filter(isErrorStatus)
  .map(status => {
    const message = http.STATUS_CODES[status]

    return {
      code: kebabCase(message),
      message,
      status: Number(status)
    }
  })
