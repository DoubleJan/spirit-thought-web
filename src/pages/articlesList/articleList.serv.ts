
import request from '@/utils/request';

export async function getArticlesList(params?: any) {
  return await request({
    url: '/api/articles',
    method: 'get' as Method.get,
    data: params
  });
}