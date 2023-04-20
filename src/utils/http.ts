import type { AxiosRequestConfig } from 'axios'
// @ts-ignore
// eslint-disable-next-line import/no-relative-packages
import buildURL from '../../node_modules/axios/lib/helpers/buildURL'

type ParamsSerializer = AxiosRequestConfig['paramsSerializer']

export function getFullURL(
  baseURL: string,
  url: string,
  params: Record<string, any>,
  paramsSerializer?: ParamsSerializer
) {
  if (url.startsWith('http')) {
    return buildURL(url, params, paramsSerializer)
  }
  return buildURL(
    `${baseURL.endsWith('/') ? baseURL : `${baseURL}/`}${
      url.startsWith('/') ? url.slice(1) : url
    }`,
    params,
    paramsSerializer
  )
}
