import React from 'react';
import Title from '../../../src/components/atoms/Title';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Title };
const code1 = `<Title as="h1" size="h1" mb={0} mt="l">Pulse</Title>`;
const code2 = `<Title m={0}>Pulse</Title>`;
const code3 = `<Title as="h3" size="h3" m={0}>Pulse</Title>`;
const code4 = `<Title as="h4" size="h4" m={0}>Pulse</Title>`;
const code5 = `<Title as="h5" size="h5" m={0}>Pulse</Title>`;

export default () => (
  <>
    <Title size="h3">Title</Title>
    <PropsTable component={Title} />
    <LiveEditor code={code1} scope={scope} />
    <LiveEditor code={code2} scope={scope} />
    <LiveEditor code={code3} scope={scope} />
    <LiveEditor code={code4} scope={scope} />
    <LiveEditor code={code5} scope={scope} />
  </>
);
