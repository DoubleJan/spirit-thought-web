// 通用阅读器

import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
// 生成目录
import toc from 'remark-toc';

import CodeBlock from './code/CodeBlock';
import HeadingBlock from './heading/HeadingBlock';
import styles from './MarkdownReader.module.less';


function MarkdownReader({ content }: { content: string }) {
  const [contentTitle, setContentTitle] = useState('');
  const [cardTitles, setCardTitles] = useState([]);
  const [cardBodys, setCardBodys] = useState([] as Array<string>);


  useEffect(() => {
    if (content) {
      const matched = content.match(/(?<=((\n|\r|\b|^)#\s))\S+/g) || [''];
      let cts = content.match(/(?<=((\r|\n|^)#{2}\s)).+(?=(\r|\n|$))/g) || [];
      let cbs: string[] = []
      if (cts.length) {
        cbs = content.replace(`# ${matched[0]}`, '')
          .split(/(\r|\n|^)#{2}\s.+(\r|\n|$)/g)
          .filter(item => /\S+/.test(item));
      }
      setContentTitle(matched[0]);
      setCardTitles(cts as []);
      setCardBodys(cbs)
    }
  }, [content]);

  return (
    <div className={styles.markdownReaderWrap}>
      {
        contentTitle && <h1 className={styles.contentTitle}>{contentTitle || ''}</h1>
      }
      {
        cardBodys.map((body, index) => {
          return (
            <div key={index} className={styles.markdownCardWrap}>
              <h2 className={styles.markdownCardTitle}>{cardTitles[index] || '--'}</h2>
              <div className={styles.markdownCardBody}>
                <Markdown
                  key={index}
                  className={styles.markdownReader}
                  source={body}
                  escapeHtml={false}
                  renderers={{ code: CodeBlock, heading: HeadingBlock }}
                  plugins={[toc]}
                />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default MarkdownReader;
