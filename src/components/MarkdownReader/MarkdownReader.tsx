// 通用阅读器

import React from 'react';
import Markdown from 'react-markdown';
// 生成目录
import toc from 'remark-toc';

import CodeBlock from './code/CodeBlock';
import HeadingBlock from './heading/HeadingBlock';
import styles from './MarkdownReader.module.less';


function MarkdownReader({ content }: { content: string }) {

  return (
    <div className={styles.markdownReaderWrap}>
      <Markdown
        className={styles.markdownReader}
        source={content}
        escapeHtml={false}
        renderers={{ code: CodeBlock, heading: HeadingBlock }}
        plugins={[toc]}
      />
    </div>
  )
}

export default MarkdownReader;
