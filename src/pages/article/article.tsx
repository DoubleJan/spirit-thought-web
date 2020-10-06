import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import MarkdownReader from '@/components/MarkdownReader';
import styles from './article.module.less';

function Article() {

  return (
    <div className={styles.articlePageOuterWrap}>
      <GlobalHeader />
      <div className={styles.articlePageInnerWrap}>
        <div className={styles.centerContentWrap}>
          <MarkdownReader content={'# Markdown写作指南'} />
        </div>
      </div>
      <GlobalFooter />
    </div>
  )
}

export default Article;
