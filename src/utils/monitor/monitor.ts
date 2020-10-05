
// 监控和错误输出

import {  NetWorkError } from '.';

function netError(param: NetWorkError) {
  console.error(`【NETWORK_ERROR】 ${param.api}(${param.method.toUpperCase()}): `, param.error);
}


export default {
  netError
}


