import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import MarkdownReader from '@/components/MarkdownReader';
import * as Serv from './article.serv';
import styles from './article.module.less';


function Article() {
  const location = useLocation();
  const [articleContent, setArticleContent] = useState('');
  
  useEffect(() => {
    const articleId = location.pathname.split('/article/')[1];
    if (articleId) {
      console.log('articleId', articleId);
      Serv.getArticleContent({articleId}).then(res => {
        if (res.code === '000000') {
          console.log('文章: ', res.data);
          setArticleContent(res.data);
        }
      });
    }
  }, []);

  return (
    <div className={styles.articlePageOuterWrap}>
      <GlobalHeader />
      <div className={styles.articlePageInnerWrap}>
        <div className={styles.centerContentWrap}>
          <MarkdownReader content={articleContent} />
        </div>
      </div>
      <GlobalFooter />
    </div>
  )
}

export default Article;
