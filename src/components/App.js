import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import { HomePage, AboutPage } from 'components';
import theme from './theme';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(module)(App);
