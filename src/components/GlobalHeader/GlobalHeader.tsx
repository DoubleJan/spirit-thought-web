import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './GlobalHeader.module.less';
import Fire from '@/../public/images/fire.svg'


function GlobalHeader() {
  const history = useHistory();
  const location = useLocation();

  function toggleRoute(url: string) {
    console.log('currentLocation: ', location);
    if (location.pathname !== url) {
      history.push(url);
    }
  }

  return (
    <header className={styles.globalHeaderWrap}>
      <div className={styles.headerTitle}>
        <img src={Fire} alt="" />
        <p>灵思</p>
      </div>
      <div className={styles.navigations}>
        <p onClick={() => toggleRoute('/articlesList')} className={styles.navItem}>随笔</p>
      </div>
    </header>
  )
}

export default GlobalHeader;
