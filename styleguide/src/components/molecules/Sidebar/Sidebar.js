import React from 'react';
import Box from '../../../../../src/components/atoms/Box';
import logo from '../../../assets/img/logo.svg';
import { StyledSidebar, Nav } from './styles';

const Sidebar = () => (
  <StyledSidebar>
    <Box mb="50px">
      <img src={logo} alt="" />
    </Box>
    <Nav>Sidebar navigation</Nav>
  </StyledSidebar>
);

export default Sidebar;
