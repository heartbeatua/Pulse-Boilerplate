const theme = {
  colors: {
    primary: '#62e6ac',
    cta: '#ff8c5f',
    black: '#191919'
  },
  fonts: {
    primary: 'Helvetica Neue, Helvetica, sans-serif'
  },
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  breakpoints: ['576px', '768px', '992px', '1200px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

const { palette, font } = theme;

export { theme as default, palette, font };
