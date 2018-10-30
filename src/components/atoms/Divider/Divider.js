import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box/Box';

const StyledDivider = styled(Box)``;
const Divider = props => <StyledDivider {...props} />;

Divider.propTypes = {
  ...Box.propTypes,
  bg: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Divider.defaultProps = {
  bg: 'grayscale.400',
  width: 'auto',
  height: '1px'
};

export default Divider;
