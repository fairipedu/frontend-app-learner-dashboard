import React from 'react';

import { useIsCollapsed } from '../hooks';
import Aside from '../../../components/Aside';

export const ExpandedHeader = () => {

  const isCollapsed = useIsCollapsed();

  if (isCollapsed) {
    return null;
  }

  return (
    <header className="">
        <Aside />
    </header>
  );

};

ExpandedHeader.propTypes = {};

export default ExpandedHeader;