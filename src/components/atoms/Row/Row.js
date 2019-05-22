import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '../Box';
import { space } from '../../../theme';

const StyledRow = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${({ gap }) => gap / 2}px;
  margin-right: -${({ gap }) => gap / 2}px;
`;

const Row = ({ children, ...props }) => {
  const { gap } = props;
  return (
    <StyledRow {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { gap })
      )}
    </StyledRow>
  );
};

Row.propTypes = {
  gap: PropTypes.number,
  ...Box.propTypes
};

Row.defaultProps = {
  gap: space.l
};

export default Row;
