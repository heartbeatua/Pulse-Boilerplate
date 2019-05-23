import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Button from '../../../src/components/atoms/Button';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Button };
const code1 = `<Button>button</Button>`;
const code2 = `<Button skin="outline">outline</Button>`;
const code3 = `<Button color="brand">brand</Button>`;
const code4 = `<Button to="/principles">principles</Button>`;
const code5 = `<Button href="https://heartbeat.ua" color="cta">heartbeat agency</Button>`;
const code6 = `<Button wide disabled>wide (disabled)</Button>`;

export default () => (
  <>
    <Title size="h3">Button</Title>
    <PropsTable component={Button} />
    <LiveEditor code={code1} scope={scope} />
    <LiveEditor code={code2} scope={scope} />
    <LiveEditor code={code3} scope={scope} />
    <LiveEditor code={code4} scope={scope} />
    <LiveEditor code={code5} scope={scope} />
    <LiveEditor code={code6} scope={scope} />
  </>
);
