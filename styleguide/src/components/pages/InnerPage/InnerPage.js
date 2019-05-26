import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import TopNav from '../../molecules/TopNav';
import Sidebar from '../../molecules/Sidebar';
import Box from '../../../../../src/components/atoms/Box';

const Content = styled(Box)`
  flex: 1;
  padding: 0 80px ${themeGet('space.xxl')}px;
  max-width: 100%;
  overflow: hidden;
`;

const LayoutInner = styled.div`
  display: flex;
  padding-top: ${themeGet('space.xl')}px;
  padding-left: ${themeGet('space.xl')}px;
  padding-bottom: ${themeGet('space.xl')}px;
`;

const InnerPage = ({ children }) => (
  <LayoutInner>
    <Sidebar />
    <Content mt="s">
      <TopNav />
      <Box maxWidth="1072px">{children}</Box>
    </Content>
  </LayoutInner>
);

InnerPage.propTypes = {
  children: PropTypes.node,
};

export default InnerPage;
