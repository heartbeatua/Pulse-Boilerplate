import React, { Fragment } from 'react';
import styled from 'styled-components';
import Box from '../../../src/components/atoms/Box/Box';
import Flex from '../../../src/components/atoms/Flex/Flex';
import Text from '../../../src/components/atoms/Text/Text';
import Title from '../../../src/components/atoms/Title/Title';
import theme from '../../../src/theme';

const ColorBox = styled(Box)`
  width: 122px;
  height: 122px;
  border-radius: 10px;
`;
const ColorBoxSm = styled(Box)`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const Colors = () => (
  <Fragment>
    <Title m="0 0 50px">Colors</Title>
    <Title is="h2" size="h5" m="0 0 24px">
      Primary
    </Title>
    <Flex>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          brand
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.brand}
        </Text>
        <ColorBox bg="brand" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          cta
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.cta}
        </Text>
        <ColorBox bg="cta" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          black
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.black}
        </Text>
        <ColorBox bg="black" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          white
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.white}
        </Text>
        <ColorBox bg="white" boxShadow="0px 14px 14px rgba(0, 0, 0, 0.07)" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          grayscale.400
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.grayscale[400]}
        </Text>
        <ColorBox bg="grayscale.400" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          link
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.link}
        </Text>
        <ColorBox bg="link" />
      </Box>
    </Flex>
    <Box m="40px 0 24px">
      <Title is="h2" size="h5" m="0" display="inline">
        Secondary
      </Title>
      <Text fontSize="m" display="inline" ml="10px">
        Projects
      </Text>
    </Box>
    <Flex>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          paper
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.projects.paper}
        </Text>
        <ColorBoxSm bg="projects.paper" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          nourish
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.projects.nourish}
        </Text>
        <ColorBoxSm bg="projects.nourish" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          unight
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.projects.unight}
        </Text>
        <ColorBoxSm bg="projects.unight" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          yoga
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.projects.yoga}
        </Text>
        <ColorBoxSm bg="projects.yoga" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          sayme
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.projects.sayme}
        </Text>
        <ColorBoxSm bg="projects.sayme" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          aviapark
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.projects.aviapark}
        </Text>
        <ColorBoxSm bg="projects.aviapark" />
      </Box>
      <Box m="0 12px 12px 0">
        <Text m="0 0 5px" fontSize="m">
          officecl
        </Text>
        <Text m="0 0 19px" color="#a3a3a3" fontSize="xs">
          {theme.colors.projects.officecl}
        </Text>
        <ColorBoxSm bg="projects.officecl" />
      </Box>
    </Flex>
  </Fragment>
);

export default Colors;
