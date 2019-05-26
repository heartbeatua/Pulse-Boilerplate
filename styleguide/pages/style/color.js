import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
import Box from '../../../src/components/atoms/Box';
import Flex from '../../../src/components/atoms/Flex';
import Text from '../../../src/components/atoms/Text';
import Title from '../../../src/components/atoms/Title';

const StyledColorBox = styled(Box)`
  width: ${({ size }) => (size === 'm' ? '122px' : '100px')};
  height: ${({ size }) => (size === 'm' ? '122px' : '100px')};
  border-radius: 10px;
`;
const ColorBox = ({ color, size = 'm', theme }) => (
  <Box m="0 12px 20px 0">
    <Text mb="4px" fontSize="s">
      {color}
    </Text>
    <Text mb="12px" color="grayscale.600" fontSize="xs">
      {themeGet(`colors.${color}`)({ theme })}
    </Text>
    <StyledColorBox
      bg={color}
      size={size}
      boxShadow={color === 'white' ? '0px 14px 14px rgba(0, 0, 0, 0.07)' : null}
    />
  </Box>
);

ColorBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.any),
};

const ColorBoxWithTheme = withTheme(ColorBox);

export default () => (
  <>
    <Title mb="xl">Colors</Title>
    <Flex flexWrap="wrap">
      <ColorBoxWithTheme color="brand" />
      <ColorBoxWithTheme color="cta" />
      <ColorBoxWithTheme color="black" />
      <ColorBoxWithTheme color="white" />
      <ColorBoxWithTheme color="grayscale.300" />
      <ColorBoxWithTheme color="grayscale.400" />
      <ColorBoxWithTheme color="grayscale.600" />
      <ColorBoxWithTheme color="grayscale.800" />
      <ColorBoxWithTheme color="link" />
      <ColorBoxWithTheme color="error" />
      <ColorBoxWithTheme color="success" />
    </Flex>
  </>
);
