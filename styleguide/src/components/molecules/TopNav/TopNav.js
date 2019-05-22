import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { sortedRoutes as routes } from '../../../../routes';
import { formatPageName } from '../../../../utils';
import Flex from '../../../../../src/components/atoms/Flex';
import Link from '../../../../../src/components/atoms/Link';

const StyledLink = styled(Link)`
  border-bottom: 3px solid transparent;

  &.active {
    color: ${themeGet('colors.black')};
    border-bottom-color: ${themeGet('colors.black')};
  }
`;

const TopNav = () => (
  <Flex mb="56px">
    {routes.map(({ key, name, path, dirname }) => (
      <StyledLink
        mr="l"
        key={key}
        to={path}
        color="grayscale.800"
        exact={name !== dirname}
        activeClassName="active"
      >
        {name === 'index' ? '.pulse' : formatPageName(name)}
      </StyledLink>
    ))}
  </Flex>
);

export default TopNav;
