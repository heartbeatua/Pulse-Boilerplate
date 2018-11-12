/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { ScopeProvider } from '@compositor/x0/components';
import { NavLink } from 'react-router-dom';
import { themeGet } from 'styled-system';
import { find, compact, sortBy } from 'lodash';
import * as atoms from '../src/components';
import theme from '../src/theme';
import css from '../src/css/base.css';
import logo from './img/logo.svg';

const Box = atoms.Box;
const Title = atoms.Title;
const Text = atoms.Text;

const BaseStyles = styled.div`
  font-family: ${themeGet('fonts.primary')};
  color: ${themeGet('colors.black')};
  line-height: ${themeGet('lineHeights.l')};
`;
const LayoutInner = styled.div`
  display: flex;
  padding: 40px 0 40px 40px;
`;
const Sidebar = styled.aside`
  flex-shrink: 0;
  min-height: calc(100vh - 80px);
  padding-right: 48px;
  border-right: 1px solid ${themeGet('colors.grayscale.400')};
  box-sizing: content-box;
`;
const Content = styled.main`
  flex: 1;
  margin: 30px 0 0;
  padding: 0 80px;
  max-width: 100%;
  overflow: hidden;
`;
const Nav = styled.nav`
  position: sticky;
  top: 40px;
`;
const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0 8px;
  width: 180px;
  font-size: ${themeGet('fontSizes.l')}px;
`;
const Item = styled.li`
  margin-bottom: 23px;
  .active + ul:not(:empty) {
    padding-bottom: 14px;
    margin-bottom: 30px;
    margin-top: 30px;
    display: block;
    border-bottom: 1px solid ${themeGet('colors.grayscale.400')};
  }
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
const SubMenu = styled.ul`
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 20px;
`;
const SubMenuItem = styled.li`
  margin-bottom: 10px;
  a {
    padding-left: 20px;
    border-left: 4px solid transparent;
    &.active {
      border-color: ${themeGet('colors.brand')};
    }
  }
`;
const Blockquote = styled(Box)`
  border-left: 3px solid #ffc200;
  padding: 20px 0 1px 30px;
  margin: 0;
`;

const unhyphenate = str => str.replace(/(\w)(-)(\w)/g, '$1 $3');
const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);
const format = str => upperFirst(unhyphenate(str));

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

const App = props => {
  const { children, routes, route } = props;
  const routesSortedList = [
    'index',
    'core-values',
    'principles',
    'introduction',
    'style',
    'components'
  ];

  const routesModified = compact(
    routes.map(obj => {
      if (obj.key.search(/index/) === -1 && obj.dirname) return null;
      return { subDir: [], ...obj };
    })
  );

  routes.forEach(obj => {
    if (obj.key.search(/index/) === -1 && obj.dirname) {
      find(routesModified, { dirname: obj.dirname }).subDir.push(obj);
    }
  });

  const routesModifiedSorted = sortBy(routesModified, (item) => routesSortedList.indexOf(item.name));

  return (
    <ScopeProvider scope={{ ...markdown, ...atoms }}>
      <ThemeProvider theme={theme}>
        <BaseStyles>
          <style dangerouslySetInnerHTML={{ __html: css }} />
          <style
            dangerouslySetInnerHTML={{
              __html: '.img-fluid {max-width: 100%;}'
            }}
          />
          {route.name !== 'index' ? (
            <LayoutInner>
              <Sidebar>
                <Box mb="50px">
                  <img src={logo} alt="" />
                </Box>
                <Nav>
                  <Menu>
                    {routesModifiedSorted.map(
                      ({ key, path, name, subDir, dirname }) => (
                        <Item key={key}>
                          <NavLink
                            to={path}
                            exact={name !== dirname.replace(/\//, '')}
                            activeClassName="active"
                            activeStyle={{
                              fontWeight: 700
                            }}
                            style={{ fontWeight: 500 }}
                          >
                            {name === 'index' ? 'Pulse' : format(name)}
                          </NavLink>
                          {subDir.length > 0 && (
                            <SubMenu>
                              {subDir.map(obj => (
                                <SubMenuItem key={obj.key}>
                                  <NavLink
                                    to={obj.path}
                                    exact
                                    activeClassName="active"
                                    activeStyle={{
                                      fontWeight: 700
                                    }}
                                  >
                                    {format(obj.name)}
                                  </NavLink>
                                </SubMenuItem>
                              ))}
                            </SubMenu>
                          )}
                        </Item>
                      )
                    )}
                  </Menu>
                </Nav>
              </Sidebar>
              <Content>
                <Box maxWidth="1072px">{children}</Box>
              </Content>
            </LayoutInner>
          ) : (
            <div>
              {children}
            </div>
          )}
        </BaseStyles>
      </ThemeProvider>
    </ScopeProvider>
  );
};

App.propTypes = {
  children: PropTypes.node,
  routes: PropTypes.array
};

export default App;
