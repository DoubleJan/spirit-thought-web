// 全局footer
import React, { useState } from 'react';
import day from 'dayjs';
import cx from 'classnames';
import styles from './GlobalFooter.module.less';

function GlobalFooter() {
  const [isActive, setInformActive] = useState(false);

  return (
    <footer className={styles.footerWrap}>
      <div className={styles.authorInform} onMouseOver={() => {setInformActive(true)}}>
        <img src="/icons/email.svg" alt=""/>
        <span className={styles.informTItle}>EMAIL</span>
        <span className={cx(styles.informDetail, isActive ? styles.informActive : '')}>
          doublejan@126.com
        </span>
        <img src="/icons/github.svg" alt=""/>
        <span className={styles.informTItle}>GITHUB</span>
        <span className={cx(styles.informDetail, isActive ? styles.informActive : '')}>
          DoubleJan
        </span>
      </div>
      <div className={styles.copyright}>
        {`Copyright © 2020 - ${day().year()} Spirit Thought. All Rights Reserved`}
      </div>
    </footer>
  )
}

export default GlobalFooter;
