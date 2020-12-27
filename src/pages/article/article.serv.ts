import request from '@/utils/request';
import Constants from '@/constants';


export async function getArticleContent(params: any){
  return await request({
    url: `/files/articles/${params.articleId}/index.md`,
    method: 'get' as Method.get,
    // data: params,
    responseType: 'text',
    baseURL: Constants.fileURL
  });
}

