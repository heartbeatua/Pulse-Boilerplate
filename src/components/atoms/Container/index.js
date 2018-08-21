import React from 'react';
import styled from 'styled-components';
import { Box } from 'grid-styled';
import { themeGet } from 'styled-system';

const StyledContainer = styled(Box)`
  position: relative;
  max-width: ${themeGet('breakpoints.2')};
  box-sizing: content-box;
  padding-left: ${themeGet('space.2')}px;
  padding-right: ${themeGet('space.2')}px;
  margin-left: auto;
  margin-right: auto;
`;
const Container = props => <StyledContainer {...props} />;

export default Container;
