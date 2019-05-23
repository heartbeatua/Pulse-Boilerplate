import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Box from '../../../src/components/atoms/Box';
import Text from '../../../src/components/atoms/Text';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Box };
const code = `<Box bg="black" color="white" maxWidth="50%" p="10px 20px" fontSize="m">I am a box.</Box>`;

export default () => (
  <>
    <Title size="h3">Box</Title>
    <PropsTable component={Box} />
    <Text>
      The <strong>Box</strong> is an element, which can be modified by yourself
      as you need. It is like a &quot;div&quot; on steroids.
    </Text>
    <LiveEditor code={code} scope={scope} />
  </>
);
