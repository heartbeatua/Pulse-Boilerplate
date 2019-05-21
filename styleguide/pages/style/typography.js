import React, { Fragment } from 'react';
import Box from '../../../src/components/atoms/Box/Box';
import Flex from '../../../src/components/atoms/Flex/Flex';
import Text from '../../../src/components/atoms/Text/Text';
import Title from '../../../src/components/atoms/Title/Title';
import Divider from '../../../src/components/atoms/Divider';
import theme from '../../../src/theme';

const Typo = () => (
  <Fragment>
    <Title is="h2" size="h4" m="0 0 20px">
      Typography
    </Title>
    <Divider m="0 0 35px" />
    <Flex m="0 0 35px">
      <Box>
        <Title is="h3" size="h5" m="0">
          Josefin Sans
        </Title>
        <Text fontSize="m" m={0}>
          Headings
        </Text>
      </Box>
      <Divider width="1px" height="62px" m="0 45px" />
      <Box>
        <Title is="h3" size="h5" m="0">
          Open Sans
        </Title>
        <Text fontSize="m" m={0}>
          Body text
        </Text>
      </Box>
    </Flex>
    <Divider m="0 0 50px" />
    <Title is="h1" size="h1" m="0 0 10px">
      Heading H1
    </Title>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.heading.h1}
      pt
    </Text>
    <Title m="0 0 0px">Heading H2</Title>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.heading.h2}
      pt
    </Text>
    <Title is="h3" size="h3" m="0 0 0px">
      Heading H3
    </Title>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.heading.h3}
      pt
    </Text>
    <Title is="h4" size="h4" m="0 0 0px">
      Heading H4
    </Title>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.heading.h4}
      pt
    </Text>
    <Title is="h5" size="h5" m="0 0 0px">
      Heading H5
    </Title>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.heading.h5}
      pt
    </Text>
    <Text m="0">Body text</Text>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.l}
      pt
    </Text>
    <Text fontSize="m" m="0">
      Body text
    </Text>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.m}
      pt
    </Text>
    <Text fontSize="s" m="0">
      Body text
    </Text>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.s}
      pt
    </Text>
    <Text fontSize="xs" m="0">
      Body text Small
    </Text>
    <Text color="#ababab" fontSize="m">
      {' '}
      {theme.fontSizes.xs}
      pt
    </Text>
  </Fragment>
);

export default Typo;
