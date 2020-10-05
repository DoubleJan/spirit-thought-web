import React, { useEffect } from 'react';
import { getHomeMessage } from './GlobalHeader.Serv';


function GlobalHeader(props: any) {
  useEffect(() => {
    const res = getHomeMessage({ p: 'p' });

  }, [])
  return <div>GlobalHeader</div>
}

export default GlobalHeader;
