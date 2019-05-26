import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Textarea from '../../../src/components/atoms/Textarea';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Textarea };
const code = `<Textarea placeholder="Write us the letter" />`;

export default () => (
  <>
    <Title size="h3">Textarea</Title>
    <PropsTable component={Textarea} />
    <LiveEditor code={code} scope={scope} />
  </>
);
