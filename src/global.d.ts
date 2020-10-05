

 declare interface Setting {
  baseURL: string
  [props: string]: any
}

declare interface EnvSetting {
  development: Setting
  production: Setting
  [props: string]: any
}

declare enum Method {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE',
  options = 'OPTIONS'
}

declare interface ResponseData {
  code: string
  msg: string
  data?: any
  [props: string]: any
}

declare interface RequestParams {
  url: string,
  method: Method,
  data?: any
  headers?: any
  reponseType?: string
  [props: string]: any
}

declare type RequestFunction = (params: RequestParams) => Response

declare module 'constants.ts' {
  export default Setting;
}