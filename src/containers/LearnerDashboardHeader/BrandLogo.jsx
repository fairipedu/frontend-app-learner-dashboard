import React from 'react';

import { getConfig } from '@edx/frontend-platform';

import { useIntl } from '@edx/frontend-platform/i18n';

import { reduxHooks } from 'hooks';

import messages from './messages';

export const BrandLogo = () => {
  const { formatMessage } = useIntl();
  const dashboard = reduxHooks.useEnterpriseDashboardData();

  return (
    <a href={dashboard?.url || '/'} className="logo-wrap">
      <img
        className="logo"
        src={`${getConfig().LMS_BASE_URL}/theming/asset/images/theme_logo_white.png`}
        alt={formatMessage(messages.logoAltText)}
      />
    </a>
  );
};

BrandLogo.propTypes = {};

export default BrandLogo;
