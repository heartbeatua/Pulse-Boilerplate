import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Text = props => <Box {...props} />;

Text.propTypes = {
  as: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
  ]),
  m: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number]),
  ...Box.propTypes,
};
Text.defaultProps = {
  as: 'p',
  m: '0 0 1.1em',
};

export default Text;
