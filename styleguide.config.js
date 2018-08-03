const path = require('path');

module.exports = {
  title: 'Atomic Design Components',
  components: 'src/components/**/*.js',
  ignore: [
    '**/src/components/pages/**/*',
    '**/src/components/themes/**/*',
    '**/src/components/index.js',
    '**/src/components/App.js'
  ],

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
      '@global body': {
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
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand'
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
