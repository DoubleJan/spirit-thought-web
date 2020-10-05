import Axios, { AxiosRequestConfig } from 'axios';
import Constants from '@/constants';
import monitor from './monitor';

export default async function request(params: RequestParams): Promise<ResponseData> {
  const { url, method, data, headers = {}, responseType = 'json', ...options } = params;
  const _method: Method = method.toLowerCase() as Method;

  const config: AxiosRequestConfig = {
    timeout: 10000,
    url,
    baseURL: Constants.hostname,
    responseType,
    headers,
    ...options
  }

  if (_method === Method.get.toLowerCase()) {
    config.params = data;
  } else {
    config.data = data;
  }

  return Axios[_method](config)
    .then(resp => {
      const { data }: { data: ResponseData } = resp;
      return data;
    })
    .catch(err => {
      monitor.netError({ api: url, method, error: err })
    })
}


