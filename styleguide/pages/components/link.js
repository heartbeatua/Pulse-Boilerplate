import React from 'react';
import Title from '../../../src/components/atoms/Title';
import Link from '../../../src/components/atoms/Link';
import LiveEditor from '../../src/components/atoms/LiveEditor';
import PropsTable from '../../src/components/molecules/PropsTable';

const scope = { Link };
const code1 = `<Link underline={2}>Pure</Link>`;
const code2 = `<Link to="/introduction" color="cta">Introduction</Link>`;
const code3 = `<Link href="https://heartbeat.ua/" color="brand">Heartbeat agency</Link>`;

export default () => (
  <>
    <Title size="h3">Link</Title>
    <PropsTable component={Link} />
    <LiveEditor code={code1} scope={scope} />
    <LiveEditor code={code2} scope={scope} />
    <LiveEditor code={code3} scope={scope} />
  </>
);
