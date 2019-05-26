import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Text from '../../../src/components/atoms/Text';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Text };
const code1 = `<Text>Bread has long been a foundational part of the human diet, but a revolt against it has been building for years — and seems to be reaching a crescendo.</Text>`;
const code2 = `<>
  <Text fontSize="m">
    Bread has long been a foundational part of the human diet, but a revolt against it has been building for years — and seems to be reaching a crescendo.
  </Text>
  <Text fontSize="s">
    Bread has long been a foundational part of the human diet, but a revolt against it has been building for years — and seems to be reaching a crescendo.
  </Text>
  <Text fontSize="xs">
    Bread has long been a foundational part of the human diet, but a revolt against it has been building for years — and seems to be reaching a crescendo.
  </Text>
</>`;

export default () => (
  <>
    <Title size="h3">Text</Title>
    <PropsTable component={Text} />
    <LiveEditor code={code1} scope={scope} />
    <LiveEditor code={code2} scope={scope} />
  </>
);
