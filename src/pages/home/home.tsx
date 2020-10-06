import React from 'react';
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './home.module.less';


function Home() {
  return (
    <div className={styles.homePageWrap}>
      <GlobalHeader />
      <div className={styles.homeInnerWrap}>

      </div>
      <GlobalFooter />
    </div>
  )
}

export default Home;
