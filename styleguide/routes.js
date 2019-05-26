import pathParse from 'path-parse';
import { sortBy, filter } from 'lodash';

const context = require.context('./pages', true, /\.(js|mdx)$/);

const routes = context.keys().map(key => {
  const { dir, ext, name } = pathParse(key.replace(/\.\//, ''));
  const path = key
    .replace(ext, '')
    .replace(/\./, '')
    .replace(/\/index/, '');

  return {
    key,
    dirname: dir,
    name: name === 'index' && dir ? dir : name,
    path: path || '/',
    component: context(key).default,
  };
});

const organisedRoutes = routes.reduce((accum, route, i, array) => {
  const { dirname, key } = route;
  if (!dirname || key.search(/index/) !== -1) {
    const subDir = filter(
      array,
      o => o.dirname === dirname && o.dirname !== o.name,
    );
    accum.push(dirname ? { ...route, subDir } : route);
  }
  return accum;
}, []);

const sortedRoutes = sortBy(organisedRoutes, ({ name }) =>
  [
    'index',
    'introduction',
    'core-values',
    'principles',
    'style',
    'components',
  ].indexOf(name),
);

export default routes;
export { sortedRoutes };
