import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';

const StyledText = styled(Box)``;
const Text = props => <StyledText {...props} />;

Text.propTypes = {
  is: PropTypes.string,
  fontSize: PropTypes.oneOf(['xs', 's', 'm', 'l']),
  m: PropTypes.string,
  ...Box.propTypes
};
Text.defaultProps = {
  is: 'p',
  fontSize: 'm',
  m: '0 0 1.1em'
};

export default Text;
