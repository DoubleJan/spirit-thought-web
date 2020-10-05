import React, { useEffect, useState } from 'react';
import { getHomeMessage } from './GlobalHeader.serv';
import styles from './GlobalHeader.module.less';

function GlobalHeader(props: any) {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    getHomeMessage({ p: 'p' }).then((data) => {
      setMsg(data);
    });
  }, [])
  return <div className={styles.globalHeaderWrap}>GlobalHeader, {msg}</div>
}

export default GlobalHeader;
