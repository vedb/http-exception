import http from 'http'

export const isErrorStatusCode = (status: number | string) =>
  Number(status) >= 400

export const errorStatusCodes = Object.keys(http.STATUS_CODES).filter(
  isErrorStatusCode
)
