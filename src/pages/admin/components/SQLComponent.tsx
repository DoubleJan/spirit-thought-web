import React from 'react';
import styles from './component.module.less';

const sqlType = {
  add: '增',
  delete: '删',
  update: '改',
  search: '查',
}


function SQLComponent({ type }: { type: SQLType }) {

  return (
    <div className={styles.SQLComponentWrap}>
      <h1>{sqlType[type]}</h1>
      <div className={styles.SQLComponentBody}>
        <div className={styles.formFieldWrap}>
          <h2>表名</h2>
          <input type="text" />
        </div>
        <div className={styles.formFieldWrap}>
          <h2>参数</h2>
          <textarea rows={6} />
        </div>
        <button className={styles.submitSQL}>执行</button>
      </div>
    </div>
  )
}

export default SQLComponent;
