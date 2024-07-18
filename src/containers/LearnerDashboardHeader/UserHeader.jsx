import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import messages from './messages';
import AuthenticatedUserDropdown from './ExpandedHeader/AuthenticatedUserDropdown';
export const UserHeader = () => {

  return (
    <>
        <AuthenticatedUserDropdown />
    </>
  );
};


export default UserHeader;