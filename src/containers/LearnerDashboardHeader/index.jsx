import React from 'react';

import ConfirmEmailBanner from './ConfirmEmailBanner';
import CollapsedHeader from './CollapsedHeader';
import ExpandedHeader from './ExpandedHeader';

import './index.scss';

export const LearnerDashboardHeader = () => (
  <>
    <ConfirmEmailBanner />
    <CollapsedHeader />
    <ExpandedHeader />
  </>
);

LearnerDashboardHeader.propTypes = {};

export default LearnerDashboardHeader;