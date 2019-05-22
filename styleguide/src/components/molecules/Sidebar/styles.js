import styled from 'styled-components';
import { themeGet, space } from 'styled-system';
import Link from '../../../../../src/components/atoms/Link';

const SubMenu = styled.ul`
  list-style: none;
  padding: 0 0 14px;
  margin: 30px 0;
  border-bottom: 1px solid ${themeGet('colors.grayscale.400')};
`;

const StyledSidebar = styled.aside`
  flex-shrink: 0;
  width: 240px;
  min-height: calc(100vh - 80px);
  padding-right: ${themeGet('space.xxl')}px;
  border-right: 1px solid ${themeGet('colors.grayscale.400')};
`;

const Nav = styled.nav`
  position: sticky;
  top: ${themeGet('space.xl')}px;
  ${space};
`;

const NavLinkItem = styled(Link)`
  border-left: 4px solid transparent;

  &.active {
    color: ${themeGet('colors.black')};
    border-color: ${themeGet('colors.black')};
  }
`;

export { SubMenu, StyledSidebar, Nav, NavLinkItem };
