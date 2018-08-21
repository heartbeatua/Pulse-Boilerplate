import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { themeGet } from 'styled-system';

const margin = ({ gap }) => themeGet(`space.${gap}`);

const StyledRow = styled(Flex)`
  flex-wrap: wrap;
  margin-left: -${margin}px;
  margin-right: -${margin}px;
`;

const Row = ({ children, gap, ...props }) => (
  <StyledRow gap={gap} {...props}>
    {React.Children.map(children, child => React.cloneElement(child, { gap }))}
  </StyledRow>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  gap: PropTypes.number
};

Row.defaultProps = {
  gap: 2
};

export default Row;
