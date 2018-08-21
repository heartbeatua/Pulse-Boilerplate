import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Wrapper = styled.div`
  font-family: ${themeGet('fonts.primary')};
  font-size: ${themeGet('fontSizes.2')}px;
  line-height: 1.5;
  color: ${themeGet('colors.black')};
`;

const Base = ({ header, children }) => (
  <Wrapper>
    {header}
    {children}
  </Wrapper>
);

Base.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node
};

export default Base;
