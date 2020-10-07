import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import cx from 'classnames';
import MarkdownEditor from '@/components/MarkdownEditor';
import Constants from '@/constants';
import { DirectoryType } from '.';
import styles from './editor.module.less';

const defaultDirectory: DirectoryType = { value: '-1', label: '选择目录' }


function Editor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [directory, setDirectory] = useState(defaultDirectory);

  // 设置当前时钟
  useEffect(() => {
    const currentTimeInterval = setInterval(() => {
      setCurrentTime(dayjs().format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);
    return () => clearInterval(currentTimeInterval);
  }, [])

  function editorValueChange(data) {
    setTitle(data.title);
    setContent(data.content);
    // setTimeout(() => {
    //   localStorage.setItem(Constants.saveEdit, data.content || '')
    // }, 0);
  }

  function submitContent() {
    console.log('发布', content);
  }

  return (
    <div className={styles.editorPageWrap}>
      <header className={styles.editorPageHeader}>
        <div className={cx(styles.docTitle, title ? styles.hasTitle : '')}>
          {title ? title : '文章标题'}
        </div>
        <div className={styles.rightNavWrap}>

          <p>{currentTime}</p>
          {/* <button>暂存</button> */}
          <button className={styles.textButton}>
            {directory.label}
          </button>
          <button className={styles.submitButton} onClick={submitContent}>发布</button>
        </div>
      </header>
      <MarkdownEditor height={'calc(100vh - 2rem)'} onChange={editorValueChange} />
    </div>
  )
}

export default Editor;
