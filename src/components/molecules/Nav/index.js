import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav``;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
const Item = styled.li`
  &:not(:last-child)::after {
    content: '/';
    margin: 0 5px;
  }
`;
const StyledLink = styled(NavLink)`
  color: inherit;
  &:not(.active) {
    text-decoration: none;
  }
`;

const Nav = () => (
  <Wrapper>
    <List>
      <Item>
        <StyledLink exact to="/" activeClassName="active">
          home
        </StyledLink>
      </Item>
      <Item>
        <StyledLink exact to="/about" activeClassName="active">
          about
        </StyledLink>
      </Item>
    </List>
  </Wrapper>
);

export default Nav;
