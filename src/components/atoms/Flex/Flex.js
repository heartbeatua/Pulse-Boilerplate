import React from 'react';
import styled from 'styled-components';
import Box from '../Box';

const StyledBox = styled(Box)`
  display: flex;
`;

const Flex = props => <StyledBox {...props} />;

Flex.propTypes = {
  ...Box.propTypes
};

export default Flex;
