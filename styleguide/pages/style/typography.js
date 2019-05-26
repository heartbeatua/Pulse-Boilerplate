import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Box from '../../../src/components/atoms/Box';
import Flex from '../../../src/components/atoms/Flex';
import Text from '../../../src/components/atoms/Text';
import Title from '../../../src/components/atoms/Title';
import Divider from '../../../src/components/atoms/Divider';

const Typography = ({ theme }) => (
  <>
    <Title size="h4" mb="m">
      Typography
    </Title>
    <Divider mb="l" />
    <Flex mb="l">
      <Box>
        <Title as="h3" size="h5" m={0}>
          Josefin Sans
        </Title>
        <Text m={0}>Headings</Text>
      </Box>
      <Divider width="1px" height="62px" mx="xxl" />
      <Box mt="2px">
        <Title as="h3" size="h5" m={0}>
          Open Sans
        </Title>
        <Text m={0}>Body text</Text>
      </Box>
    </Flex>
    <Divider mb="72px" />
    <Title as="h1" size="h1" m={0}>
      Heading H1
    </Title>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.heading.h1}
      pt
    </Text>
    <Title m={0}>Heading H2</Title>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.heading.h2}
      pt
    </Text>
    <Title as="h3" size="h3" m={0}>
      Heading H3
    </Title>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.heading.h3}
      pt
    </Text>
    <Title as="h4" size="h4" m={0}>
      Heading H4
    </Title>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.heading.h4}
      pt
    </Text>
    <Title as="h5" size="h5" m={0}>
      Heading H5
    </Title>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.heading.h5}
      pt
    </Text>
    <Text fontSize="l" m={0}>
      Body text
    </Text>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.l}
      pt
    </Text>
    <Text m={0}>Body text</Text>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.m}
      pt
    </Text>
    <Text fontSize="s" m={0}>
      Body text
    </Text>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.s}
      pt
    </Text>
    <Text fontSize="xs" m={0}>
      Body text
    </Text>
    <Text color="grayscale.600">
      {' '}
      {theme.fontSizes.xs}
      pt
    </Text>
  </>
);

Typography.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
};

export default withTheme(Typography);
