import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';

const StyledContainer = styled(Box)`
  position: relative;
  box-sizing: content-box;
`;

const Container = props => <StyledContainer {...props} />;

Container.propTypes = {
  pl: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  pr: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.string,
  ]),
  ...Box.propTypes,
};

Container.defaultProps = {
  pl: 's',
  pr: 's',
  mx: 'auto',
  maxWidth: 'l',
};

export default Container;
