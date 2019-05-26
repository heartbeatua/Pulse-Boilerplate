import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import { space } from '../../../theme';

const StyledRow = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ gap }) => (gap ? `-${gap / 2}px` : null)};
  margin-right: ${({ gap }) => (gap ? `-${gap / 2}px` : null)};
`;

const Row = ({ children, ...rest }) => {
  const { gap } = rest;
  return (
    <StyledRow {...rest}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { gap }),
      )}
    </StyledRow>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.number,
  ...Box.propTypes,
};

Row.defaultProps = {
  gap: space.l,
};

export default Row;
