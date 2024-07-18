import React, { useState } from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';


import urls from 'data/services/lms/urls';
import { reduxHooks } from 'hooks';

import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import { useIsCollapsed, findCoursesNavClicked } from '../hooks';
import messages from '../messages';

import Aside from '../../../components/Aside';

export const ExpandedHeader = () => {
  const { formatMessage } = useIntl();
  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  const isCollapsed = useIsCollapsed();

  const exploreCoursesClick = findCoursesNavClicked(
    urls.baseAppUrl(courseSearchUrl),
  );
  const [navOpen, setNavOpen] = useState('');
  
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
