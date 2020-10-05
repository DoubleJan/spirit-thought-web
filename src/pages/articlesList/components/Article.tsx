import React from 'react';
import { useHistory } from 'react-router-dom';
import day from 'dayjs';
import { ArticleData } from './components.d';
import styles from './components.module.less';


// article 包括
// 文件夹图片：文章标题
// 我文章简述
// 作者，文件夹，分类标签，发布时间
function Article({ article }: { article: ArticleData }) {
  const history = useHistory();

  return (
    <div className={styles.articleWrap} onClick={() => history.push(`/article/${article.articleId}`)}>
      <div className={styles.articleTitle}>
        <p>{article.title || '--'}</p>
      </div>
      <div className={styles.articleDesc}>{article.description || '--'}</div>
      <div className={styles.bottomDetail}>
        <p>
          <span>{'由 '}</span>
          <span>{article.author}</span>
        </p>
        <p>
          <span>{`发布在`}</span>
          <span className={styles.detailTag}>{article.directoryName}</span>
        </p>
        <p>
          <span>{`于 `}</span>
          <span>{day(article.createTime).format('YYYY-MM-DD HH:mm')}</span>
        </p>
      </div>
    </div>
  )
}

export default Article;