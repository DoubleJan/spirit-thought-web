
import request from '@/utils/request';

export async function getHomeMessage(params: any) {
  const res = await request({
    url: '/api/article',
    method: 'get' as Method.get,
    data: {
      env: 'dev',
    }
  });
  if (res.code === '000000') {
    console.log(res);
  }
}