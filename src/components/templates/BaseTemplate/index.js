import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
  font-family: ${themeGet('fonts.primary')};
  font-size: ${themeGet('fontSizes.2')}px;
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
