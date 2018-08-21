import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../src/components/theme';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node
};

export default ThemeWrapper;
