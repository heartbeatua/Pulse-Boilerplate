import React from 'react';
import Highlight from 'react-highlight';
import theme from '../../../src/theme';
import Title from '../../../src/components/atoms/Title';

export default () => (
  <>
    <Title mb="xl">Theme</Title>
    <Highlight>{JSON.stringify(theme, null, '  ')}</Highlight>
  </>
);
