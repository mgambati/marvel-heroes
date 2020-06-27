import { AxiosRequestConfig } from "axios";

/**
 * Devido a um bug no Axios, default params não sofre merge com params da request;
 * Para resolver isso usa-se um interceptor
 */
export function addApikeyParamsInterceptor(
  config: AxiosRequestConfig
): AxiosRequestConfig {
  config.params = {
    ...config.params,
    apikey: process.env["REACT_APP_MARVEL_API_KEY"],
  };

  return config;
}
