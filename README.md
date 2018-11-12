# Pulse Boilerplate

We've created this React based boilerplate during our research on Design System approach.
It consists of modern tools and basic [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) structure.

## Features

- Up to date tools and practices for Design System creation
- Focused on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology and naming convention
- Clear and understandable structure of folders
- With online [documentation of components](https://github.com/c8r/x0/).
- Highlt customizable: themes, pages, templates
- Handy components import (see below)
- Easy work with styles

## What's included

- webpack@4
- react@16, react-router@4
- hot-reloading
- eslint ([airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)) — code linter
- [prettier](https://prettier.io/) — code formatter
- [x0](https://github.com/c8r/x0/) — style guide 
- [styled-components](https://www.styled-components.com/) — css-in-js
- [styled-system](https://github.com/jxnblk/styled-system) — style your components at the advanced level

## Setup

#### Install dependencies
```sh
yarn
```
*Note: we recommend to use [`yarn` package manager](https://yarnpkg.com/), but `npm` is OK*

#### Run development server
```sh
yarn dev
```

*Project will be running at [http://localhost:8080/](http://localhost:8080/)*

#### Generate production build
```sh
yarn build
```

*Will create the `dist` folder*

## Style guide and documentation

#### Run a development server
```sh
yarn guide
```

*Styleguidist will run at [http://localhost:6060/](http://localhost:6060/)*

#### Generate production build
```sh
yarn guide:build
```

*`docs` folder will be created*

## ESLint

Run and get code review (you can pass a `--fix` setting that will try to solve a problem automatically)
```sh
yarn lint
```

## Theming
We use [styled system theming](https://github.com/jxnblk/styled-system/blob/master/docs/getting-started.md#theming). Styled system is great theme-based style props for building [responsive](https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md) design systems with React. More data [here](https://github.com/jxnblk/styled-system/blob/master/docs/api.md).

## A few words about Atomic Design

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are: __atoms__, __molecules__, __organisms__, __templates__, __pages__. To get more info about methodology, check out [the original article](http://atomicdesign.bradfrost.com/chapter-2/).

## TODO

- [x] Styled components
- [x] styled-system
- [x] x0
- [ ] Redux
- [ ] Tests (Jest)
- [ ] Utils and Build tools (like favicon generator, etc)
- [ ] Awesome-XXX links
- [ ] Generact (for copy components)

## Got questions or suggestions?
Simply reach through [our website](https://heartbeat.ua/lets-talk)

## License

MIT.
