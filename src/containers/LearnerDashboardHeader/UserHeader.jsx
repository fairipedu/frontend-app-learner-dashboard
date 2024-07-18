import React from 'react';

import AuthenticatedUserDropdown from './ExpandedHeader/AuthenticatedUserDropdown';
export const UserHeader = () => {

  return (
    <>
        <AuthenticatedUserDropdown />
    </>
  );
};

export default UserHeader;