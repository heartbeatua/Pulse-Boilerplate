import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import { space, breakpoints } from '../../../theme/theme';

const StyledContainer = styled(Box)`
  position: relative;
  box-sizing: content-box;
`;
const Container = props => <StyledContainer {...props} />;

Container.propTypes = {
  px: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string
  ]),
  maxWidth: PropTypes.string,
  ...Box.propTypes
};

Container.defaultProps = {
  px: [space.s, space.m],
  mx: 'auto',
  maxWidth: breakpoints[2]
};

export default Container;
