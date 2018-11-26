import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Box from '../Box';

const StyledTitle = styled(Box)`
  line-height: ${({ size }) => themeGet(`lineHeights.heading.${size}`)};
  font-size: ${({ size }) => themeGet(`fontSizes.heading.${size}`)}px;
`;

const Title = props => <StyledTitle {...props} />;

Title.propTypes = {
  ...Box.propTypes,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontFamily: PropTypes.string,
  is: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div']),
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
  m: PropTypes.string
};
Title.defaultProps = {
  is: 'h2',
  size: 'h2',
  fontWeight: 'bold',
  m: '0 0 30px',
  fontFamily: 'title'
};

export default Title;
