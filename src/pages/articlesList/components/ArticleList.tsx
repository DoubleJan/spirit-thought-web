import React from 'react';
import Article from './Article';
import { ArticleData, ArticleListType } from './components.d';
import styles from './components.module.less';


function ArticleList({ articleList }: { articleList: ArticleListType }) {

  return (
    <div className={styles.articleListWrap}>
      {
        articleList.map((article: ArticleData) => (
          <Article article={article} key={article.id} />
        ))
      }
    </div>
  )
}

export default ArticleList;
