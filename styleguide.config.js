const path = require('path');

module.exports = {
  title: 'Pulse Components',
  components: 'src/components/**/*.js',

  getComponentPathLine(filePath) {
    const componentPath = filePath.replace(/\/index.js/, '');
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from 'components';`;
  },
  theme: {
    fontFamily: {
      base: 'Helvetica Neue, Helvetica, sans-serif'
    }
  },
  styles: {
    StyleGuide: {
      '@global *': {
        'box-sizing': 'border-box'
      },
      '@global body': {
        'font-family': 'Helvetica Neue, Helvetica, sans-serif',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale'
      }
    }
  },
  styleguideDir: 'docs',

  sections: [
    {
      name: 'Atoms',
      components: 'src/components/atoms/**/*.js',
      exampleMode: 'expand'
    }
  ],

  pagePerSection: true,

  styleguideComponents: {
    StyleGuideRenderer: path.join(
      __dirname,
      'vendor/react-styleguidist/StyleGuideRenderer.js'
    ),
    Wrapper: path.join(__dirname, 'vendor/react-styleguidist/ThemeWrapper.js')
  }
};
