/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import { themeGet } from 'styled-system';
import { find, compact, sortBy } from 'lodash';
import * as atoms from '../src/components';
import theme from '../src/theme';
import routes from './routes';
// import css from '../src/css/base.css';
// import Sidebar from './src/components/molecules/Sidebar';

const Box = atoms.Box;
const Title = atoms.Title;
const Text = atoms.Text;

const BaseStyles = styled.div`
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.black')};
  line-height: ${themeGet('lineHeights.l')};
`;
const LayoutInner = styled.div`
  display: flex;
  padding: 40px 0 40px 40px;
`;
const Content = styled.main`
  flex: 1;
  margin: 30px 0 0;
  padding: 0 80px;
  max-width: 100%;
  overflow: hidden;
`;
const Preview = styled(Box)`
  .react-live-preview {
    border-color: #eee;
  }
  .prism-code {
    font-family: monospace;
    font-size: 16px;
    background: #f3f3f3;
    &:focus {
      box-shadow: none;
    }
  }
`;
const Blockquote = styled(Box)`
  border-left: 3px solid #ffc200;
  padding: 20px 0 1px 30px;
  margin: 0;
`;
const markdown = {
  h1: ({ children }) => (
    <Title is="h1" size="h3">
      {children}
    </Title>
  ),
  h2: ({ children }) => (
    <Title is="h2" size="h4">
      {children}
    </Title>
  ),
  h3: ({ children }) => (
    <Title is="h3" size="h5" m="0 0 20px">
      {children}
    </Title>
  ),
  p: ({ children }) => <Text>{children}</Text>,
  pre: ({ children }) => <Preview m="0 0 40px">{children}</Preview>,
  ol: ({ children }) => (
    <Box is="ol" fontSize="l" pl="25px">
      {children}
    </Box>
  ),
  ul: ({ children }) => (
    <Box is="ul" fontSize="l" pl="25px">
      {children}
    </Box>
  ),
  blockquote: ({ children }) => (
    <Blockquote is="blockquote" fontSize="l">
      {children}
    </Blockquote>
  )
};

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <MDXProvider>
        <Switch>
          {routes.map(({ key, path, component: Component }) => (
            <Route
              exact
              key={key}
              path={path}
              render={props => (
                <Component {...props} />
              )}
            />
          ))}
        </Switch>
      </MDXProvider>
    </BrowserRouter>
  </ThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array
};

export default App;
