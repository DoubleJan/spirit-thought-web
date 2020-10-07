import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import MarkdownReader from '@/components/MarkdownReader';
import { ChangeHandler } from '.';
import styles from './MarkdownEditor.module.less';


function MarkdownEditor({ height, onChange }: { height?: string, onChange?: ChangeHandler }) {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange({ title, content });
    }
  }, [title, content]);

  function changeContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.persist();
    const values = event.target.value;
    setContent(values);
    if (values) {
      const matched = values.match(/(?<=((\n|\r|\b|^)#\s))\S+/g) || [''];
      setTitle(matched[0]);
    }
  }

  return (
    <div className={styles.markdownEditorWrap} style={{ height: height || '100vh' }}>
      <div className={styles.container}>
        <textarea className={styles.editorTextArea} onChange={changeContent} />
      </div>
      <div className={cx(styles.container, styles.readerContainer)}>
        <MarkdownReader content={content} />
      </div>
    </div>
  )
}

export default MarkdownEditor;
