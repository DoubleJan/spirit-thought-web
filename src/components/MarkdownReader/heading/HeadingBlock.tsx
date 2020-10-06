// 标题设置锚点和侧边栏

import React from 'react';
import Heading from './Heading';
import { HeadingProps } from '..';


function HeadingBlock(props: HeadingProps) {
  const { level, children } = props;

  if (level && Array.isArray(children) && children[0] && children[0].props) {
    const value = children[0].props.value;
    
    return (
      <Heading level={`h${level}`} id={value} className={'reader-heading-wrap'}>
        {/* <a href={`#${location.pathname}/${value}${location.search || ''}`}></a> */}
        <span>{children}</span>
      </Heading>
    )
  } else {
    return <>{children}</>;
  }
}

export default HeadingBlock;