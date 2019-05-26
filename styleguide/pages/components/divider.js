import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Divider from '../../../src/components/atoms/Divider';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Divider };
const code1 = `<Divider m="20px" />`;
const code2 = `<Divider m="20px" height="40px" width="1px" />`;

export default () => (
  <>
    <Title size="h3">Divider</Title>
    <PropsTable component={Divider} />
    <LiveEditor code={code1} scope={scope} />
    <LiveEditor code={code2} scope={scope} />
  </>
);
