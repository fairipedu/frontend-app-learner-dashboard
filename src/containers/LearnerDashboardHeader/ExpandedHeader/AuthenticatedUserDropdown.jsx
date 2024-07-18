import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { AvatarButton, Badge, Dropdown } from '@openedx/paragon';

import { reduxHooks } from 'hooks';

import messages from '../messages';

export const AuthenticatedUserDropdown = () => {
  const { formatMessage } = useIntl();
  const { authenticatedUser } = React.useContext(AppContext);
  const dashboard = reduxHooks.useEnterpriseDashboardData();
  

  return (
    authenticatedUser && (
      <Dropdown className="user-dropdown pr4">
        <Dropdown.Toggle
          as={AvatarButton}
          src={authenticatedUser.profileImage}
          id="user"
          variant="light"
        >
          <span data-hj-suppress className="d-md-inline">
            {authenticatedUser.username}
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu-right">
          { getConfig().ENABLE_EDX_PERSONAL_DASHBOARD && (
            <>
              <Dropdown.Header>{formatMessage(messages.dashboardSwitch)}</Dropdown.Header>
              <Dropdown.Item as="a" href="/edx-dashboard" className="active">
                {formatMessage(messages.dashboardPersonal)}a
              </Dropdown.Item>
              {!!dashboard && (
                <Dropdown.Item as="a" href={dashboard.url} key={dashboard.label}>
                  {dashboard.label} {formatMessage(messages.dashboard)}b
                </Dropdown.Item>
              )}
              <Dropdown.Divider />
            </>
          )}

          {!dashboard && getConfig().CAREER_LINK_URL && (
            <Dropdown.Item href={`${getConfig().CAREER_LINK_URL}`}>
              {formatMessage(messages.career)}
              <Badge className="px-2 mx-2" variant="warning">
                {formatMessage(messages.newAlert)}
              </Badge>
            </Dropdown.Item>
          )}
          <Dropdown.Item href={`${getConfig().ACCOUNT_PROFILE_URL}/u/${authenticatedUser.username}`}>
            프로필설정
          </Dropdown.Item>
          <Dropdown.Item href={getConfig().ACCOUNT_SETTINGS_URL}>
            개인정보수정
          </Dropdown.Item>
          {getConfig().ORDER_HISTORY_URL && (
            <Dropdown.Item href={getConfig().ORDER_HISTORY_URL}>
              {formatMessage(messages.orderHistory)}
            </Dropdown.Item>
          )}
          <Dropdown.Divider />
          <Dropdown.Item href={getConfig().LOGOUT_URL}>
            로그아웃
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  );
};

AuthenticatedUserDropdown.propTypes = {};

export default AuthenticatedUserDropdown;
