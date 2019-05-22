import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { MDXProvider } from '@mdx-js/react';
import theme from '../src/theme';
import routes from './routes';
import BaseTemplate from './src/components/templates/BaseTemplate';
import Title from '../src/components/atoms/Title';
import Text from '../src/components/atoms/Text';

const markdown = {
  h1: props => <Title {...props} size="h1" as="h1" />,
  h2: props => <Title {...props} size="h2" as="h2" />,
  h3: props => <Title {...props} size="h3" as="h3" />,
  h4: props => <Title {...props} size="h4" as="h4" />,
  h5: props => <Title {...props} size="h5" as="h5" />,
  p: props => <Text {...props} />
};

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <MDXProvider components={markdown}>
        <Switch>
          {routes.map(({ key, path, component: Component }) => (
            <Route
              exact
              key={key}
              path={path}
              render={props => (
                <BaseTemplate>
                  <Component {...props} />
                </BaseTemplate>
              )}
            />
          ))}
        </Switch>
      </MDXProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(App);
