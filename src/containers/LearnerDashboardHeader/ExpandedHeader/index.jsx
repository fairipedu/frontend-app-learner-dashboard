import React, { useState } from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';

import urls from 'data/services/lms/urls';
import { reduxHooks } from 'hooks';

import { useIsCollapsed, findCoursesNavClicked } from '../hooks';

import Aside from '../../../components/Aside';

export const ExpandedHeader = () => {

  const { courseSearchUrl } = reduxHooks.usePlatformSettingsData();
  const isCollapsed = useIsCollapsed();

  const exploreCoursesClick = findCoursesNavClicked(
    urls.baseAppUrl(courseSearchUrl),
  );
  
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
