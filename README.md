![Pulse](https://raw.githubusercontent.com/heartbeatua/Pulse-Boilerplate/master/tmp/cover.png)

# Pulse Boilerplate

We've created this React based boilerplate during our research on the Design System approach.
It consists of modern tools and basic [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) structure.

## Features

- Up to date tools and practices for Design System creation
- Focused on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology and naming convention
- Clear and understandable structure of folders
- Documentation
- Highly customizable: themes, pages, templates
- Easy to work with styles using [styled system](https://styled-system.com/getting-started/)

## What's included

#### The actual versions of:

- webpack, babel, react, react-router
- hot-reloading
- eslint ([airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)) — code linter
- [prettier](https://prettier.io/) — code formatter
- [styled-components](https://www.styled-components.com/) — css-in-js
- [styled-system](https://github.com/jxnblk/styled-system) — stylize your components at an advanced level

## Setup

#### Install dependencies
```sh
npm install
```

#### Run development server
```sh
npm dev
```

*Project will be running at [http://localhost:3000/](http://localhost:3000/)*

#### Generate production build
```sh
npm build
```

*Will create the `dist` folder*

## Style guide and documentation

#### Run a development server
```sh
npm guide
```

*Style guide will run at [http://localhost:6060/](http://localhost:6060/)*

## ESLint

Run and get code review (you can pass a `--fix` setting that will try to solve a problem automatically)
```sh
npm eslint
```

## Theming
We use [styled components theming](https://www.styled-components.com/docs/advanced#theming). The styled system provides great [theme-based](https://github.com/styled-system/styled-system/blob/master/docs/getting-started.md#theming) [style props](https://github.com/styled-system/styled-system/blob/master/docs/api.md) for building [responsive](https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md) design systems with React.

## A few words about Atomic Design

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are: __atoms__, __molecules__, __organisms__, __templates__, __pages__. To get more info about methodology, check out [the original article](http://atomicdesign.bradfrost.com/chapter-2/).

## TODO

- [x] styled components
- [x] styled system
- [ ] tests (Jest)

## Got questions or suggestions?
Simply reach through [our website](https://heartbeat.ua/lets-talk)

## License

MIT.
