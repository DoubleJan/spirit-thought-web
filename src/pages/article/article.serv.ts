import request from '@/utils/request';


export async function getArticleContent(params: any) {
  return await request({
    url: `/api/article/${params.articleId}`,
    method: 'get' as Method.get,
    data: params
  });
}

