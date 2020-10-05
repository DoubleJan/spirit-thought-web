import React, { useEffect, useState } from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import ArticleList from './components/ArticleList';
import { ArticleListType } from './components/components.d';
import * as Serv from './articleList.serv';
import styles from './articlesList.module.less';

const mockArticleList: ArticleListType = [
  {
    id: '23',
    articleId: '1',
    title: 'Markdown写作指南',
    directoryName: '编程技术',
    author: 'DoubleJan',
    createTime: '2020-01-29T15:32:47',
    description: 'Markdown写作轻松入门，真滴强强强强强强强强强强，超值优惠哈哈哈哈哈哈哈'
  },
  {
    id: '167',
    articleId: 'vue',
    title: 'Vue3.0发布',
    directoryName: 'Vue',
    author: 'Jianhuang',
    createTime: '2020-01-29T15:32:47',
    description: 'MVue3.0入门，真滴强强强强强强强强强强，超值优惠哈哈哈哈哈哈哈'
  },
  {
    id: 'id2321',
    articleId: 'react',
    title: 'React Hooks 起步之 useEffect，useStates，和自定义 Hooks',
    directoryName: 'React',
    author: '大师兄带带我',
    createTime: '2010-11-29T15:32:47',
    description: 'React Hooks 起步之 useEffect，useStates，和自定义 Hooks轻松入门，真滴强强强强强强强强强强，超值优惠哈哈哈哈哈哈哈'
  },
  {
    id: '9087',
    articleId: '6',
    title: 'Egg 2.X源码分析',
    directoryName: 'NodeJs',
    author: 'yangw',
    createTime: '2020-01-29T15:32:47',
    description: 'Egg 2.X源码分析，真滴强强强强强强强强强强，超值优惠哈哈哈哈哈哈哈'
  },
]

function ArticlesList() {
  // const [articleList, setArticleList] = useState([]);

  // useEffect(() => {
  //   Serv.getArticlesList().then(res => {
  //     if (res.code === '000000' && Array.isArray(res.data)) {
  //       setArticleList(res.data as []);
  //     }
  //   })
  // }, []);

  return (
    <div className={styles.articlesListOuterWrap}>
      <GlobalHeader />
      <div className={styles.articleListPageBodyWrap}>
        <ArticleList articleList={mockArticleList} />
      </div>
      <GlobalFooter />
    </div>
  )
}

export default ArticlesList;