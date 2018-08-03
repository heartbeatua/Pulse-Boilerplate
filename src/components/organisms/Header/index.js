import React from 'react';
import styled from 'styled-components';
import { Nav } from 'components';

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 0 10px;
  margin-bottom: 15px;
`;

const Header = () => (
  <Wrapper>
    <div>logo</div>
    <Nav />
  </Wrapper>
);

export default Header;
