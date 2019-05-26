import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Card from '../../../src/components/molecules/Card';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Card };
const code = `<Card to="/core-values" title="Core Values" text="4 principles we use to hire..." />`;

export default () => (
  <>
    <Title size="h3">Card</Title>
    <PropsTable component={Card} />
    <LiveEditor code={code} scope={scope} />
  </>
);
