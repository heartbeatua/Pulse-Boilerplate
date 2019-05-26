import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Box from '../../../src/components/atoms/Box';
import Flex from '../../../src/components/atoms/Flex';
import Text from '../../../src/components/atoms/Text';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Box, Flex, Text };
const code = `<Flex>
  <Box bg="brand" display="flex" alignItems="flex-end">
    <Text m={0}>Box 1</Text>
  </Box>
  <Box bg="cta" width="150px" height="150px" display="flex" alignItems="center" justifyContent="center">
    <Text m={0} textAlign="center" bg="brand">Box 2</Text>
  </Box>
  <Box>
    <Text m={0} bg="black" color="white">Box 3</Text>
  </Box>
</Flex>`;

export default () => (
  <>
    <Title size="h3">Flex</Title>
    <PropsTable component={Flex} />
    <Text>
      The <strong>Flex</strong> is an element, used as a Box wrapper to combine
      them in one single row.
    </Text>
    <LiveEditor code={code} scope={scope} />
  </>
);
