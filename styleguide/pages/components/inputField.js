import React from 'react';
import Title from '../../../src/components/atoms/Title';
import InputField from '../../../src/components/atoms/InputField';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { InputField };
const code = `<InputField placeholder="Search" />`;

export default () => (
  <>
    <Title size="h3">Input Field</Title>
    <PropsTable component={InputField} />
    <LiveEditor code={code} scope={scope} />
  </>
);
