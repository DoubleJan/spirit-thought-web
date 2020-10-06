import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import SQLComponent from './components/SQLComponent';
import styles from './admin.module.less';

function Admin() {
  return (
    <div className={styles.adminPageWrap}>
      <GlobalHeader />
      <div className={styles.adminInnerWrap}>
        <div className={styles.adminComponents}>
          <SQLComponent type={"add" as SQLType.add} />
          <SQLComponent type={"delete" as SQLType.delete} />
          <SQLComponent type={"update" as SQLType.update} />
          <SQLComponent type={"search" as SQLType.search} />
        </div>
      </div>
      <GlobalFooter />
    </div>
  )
}

export default Admin;
