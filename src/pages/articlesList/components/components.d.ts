export interface ArticleData {
  id: string
  articleId: string
  title: string
  author: string
  
  directoryName: string
  createTime: string
  
  description: string
  imgUrl?: string
  [props: string]: any
}

export type ArticleListType = Array<ArticleData>