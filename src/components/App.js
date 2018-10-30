import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import HomePage from './pages/HomePage';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(module)(App);
