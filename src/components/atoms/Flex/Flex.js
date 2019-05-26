import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Flex = props => <Box {...props} />;

Flex.propTypes = {
  display: PropTypes.string,
  ...Box.propTypes,
};
Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
