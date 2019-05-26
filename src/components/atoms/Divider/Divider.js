import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Divider = props => <Box {...props} />;

Divider.propTypes = {
  bg: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  ...Box.propTypes,
};

Divider.defaultProps = {
  bg: 'grayscale.400',
  width: 'auto',
  height: '1px',
};

export default Divider;
