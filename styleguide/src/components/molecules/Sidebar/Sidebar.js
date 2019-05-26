import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { SubMenu, StyledSidebar, Nav, NavLinkItem } from './styles';
import { sortedRoutes as routes } from '../../../../routes';
import { formatPageName } from '../../../../utils';
import Box from '../../../../../src/components/atoms/Box';
import logo from '../../../assets/img/logo.svg';

const Sidebar = ({ location }) => {
  const { pathname } = location;
  const getDir = routes.find(({ dirname }) => {
    if (!dirname) return null;
    return pathname.search(dirname) !== -1;
  });

  return (
    <StyledSidebar>
      <Box mb="xxl" width={50} height={80}>
        <img src={logo} alt="" />
      </Box>
      <Nav ml="xs">
        {getDir && (
          <SubMenu>
            {getDir.subDir.map(({ key, path, name }) => (
              <Box as="li" key={key} mb="14px">
                <NavLinkItem
                  to={path}
                  pl="20px"
                  activeClassName="active"
                  color="grayscale.800"
                >
                  {formatPageName(name)}
                </NavLinkItem>
              </Box>
            ))}
          </SubMenu>
        )}
      </Nav>
    </StyledSidebar>
  );
};

Sidebar.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
};

export default withRouter(Sidebar);
