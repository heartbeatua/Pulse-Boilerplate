import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import HomePage from './pages/HomePage';
import '../assets/css/normalize.css';
import '../assets/css/base.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(App);
