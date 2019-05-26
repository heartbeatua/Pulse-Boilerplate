const colors = {
  black: '#191919',
  white: '#fff',
  brand: '#62e6ac',
  cta: '#ff8c5f',
  link: '#1755b7',
  error: '#ff4d4d',
  success: '#75de50',
  grayscale: {
    300: '#e3e3e3',
    400: '#d2d2d2',
    600: '#a3a3a3',
    800: '#7d7d7d',
  },
};

const fonts = {
  heading: "'Josefin Sans', sans-serif",
  bodyText: "'Open Sans', sans-serif",
};

const fontSizes = {
  xs: 14,
  s: 16,
  m: 18,
  l: 20,
  heading: {
    h1: 182,
    h2: 101,
    h3: 79,
    h4: 47,
    h5: 29,
  },
};

const lineHeights = {
  l: 1.5,
  heading: {
    h1: 0.8,
    h2: 1.06,
    h3: 1.14,
    h4: 1.25,
    h5: 1.32,
  },
};

const maxWidths = {
  s: '768px',
  m: '992px',
  l: '1226px',
};

const breakpoints = Object.values(maxWidths);

breakpoints.s = maxWidths.s;
breakpoints.m = maxWidths.m;
breakpoints.l = maxWidths.l;

const space = {
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 48,
};

module.exports = {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  breakpoints,
  space,
  maxWidths,
};
