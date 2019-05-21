import React, { Fragment } from 'react';
import Title from '../../src/components/atoms/Title';
import Text from '../../src/components/atoms/Text';

export default () => (
  <Fragment>
    <Title is="h1" m="0 0 50px">
      Core values
    </Title>
    <Text maxWidth="700px">
      Pulse Boilerplate is a react based advanced tool, which can help you build
      your own design system. You can very easily document your code, create
      your style guides, live components and other things. More examples you can
      see from sidebar.
    </Text>
  </Fragment>
);
