import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { MDXProvider } from '@mdx-js/react';
import theme from '../src/theme';
import routes from './routes';
import BaseTemplate from './src/components/templates/BaseTemplate';
import NotFoundPage from './src/components/pages/NotFoundPage';
import Title from '../src/components/atoms/Title';
import Text from '../src/components/atoms/Text';
import '../src/assets/css/normalize.css';
import '../src/assets/css/base.css';
import './src/assets/css/highlight.css';

const markdown = {
  h1: props => <Title size="h2" as="h1" mb="xl" {...props} />,
  h2: props => <Title size="h3" mt="xl" mb="l" {...props} />,
  h3: props => <Title size="h4" as="h3" mt="l" mb="m" {...props} />,
  h4: props => <Title size="h5" as="h4" mt="l" mb="m" {...props} />,
  p: props => <Text {...props} maxWidth="700px" />,
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
          <Route component={NotFoundPage} />
        </Switch>
      </MDXProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(App);
