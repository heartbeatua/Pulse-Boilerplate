# Pulse Boilerplate

This is React based boilerplate, which consist a progressive tools and basic [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) structure.

## Features

- Contains all the latest tools and practices
- Focused on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology
- Clear and understandable structure of folders
- Creating application, website, [documentation of components](https://react-styleguidist.js.org/).
- Easy to customizing (themes, pages, templates)
- Very easily importing components (see below)
- Comfortable work with styles

## What's included

- webpack@4
- react@16, react-router@4
- hot-reloading
- eslint ([airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)) — code linter
- [prettier](https://prettier.io/) — code formatter
- [react-styleguidist](https://react-styleguidist.js.org/) — isolated style guide 
- [styled-components](https://www.styled-components.com/) — css-in-js
- [styled-system](https://github.com/jxnblk/styled-system) — styling your components at advanced level
- [grid-styled](https://github.com/jxnblk/grid-styled) — building powerful and flexible layout

## Setup

#### Install dependencies
```sh
yarn
```
*Note: we recommend use [`yarn` package manager](https://yarnpkg.com/), but if you more like `npm` you can also do it!*

#### Run development server
```sh
yarn dev
```

*Project will be runned at [http://localhost:8080/](http://localhost:8080/)*

#### Generate production build
```sh
yarn build
```

*Will be created a `dist` folder*

## Style guide and documentation

#### Run development server
```sh
yarn styleguidist
```

*Styleguidist will be runned at [http://localhost:6060/](http://localhost:6060/)*

#### Generate production build
```sh
yarn styleguidist:build
```

*Will be created a `docs` folder*

#### How can I add component to the style guide?
You need to create a Readme.md file (inside the component folder) and put there your action code. See [examples](https://react-styleguidist.js.org/docs/documenting#usage-examples-and-readme-files).

## ESLint

Run and get code review (you can pass a `--fix` setting to try solve a problem automatically)
```sh
yarn lint
```

## Theming
Based on [styled system theming](https://github.com/jxnblk/styled-system/blob/master/docs/getting-started.md#theming). Styled system is a great utility to provide work with any color palette, quickly setting [responsive](https://github.com/jxnblk/styled-system/blob/master/docs/responsive-styles.md) font-size, margin, padding, width, [etc](https://github.com/jxnblk/styled-system/blob/master/docs/table.md). More info you can see from the [official source](https://github.com/jxnblk/styled-system/blob/master/docs/api.md).


## Import components

You can very easily import your component, where you need, and do not worry about folder location (atoms, molecules, etc...), like this:

```js
import { Button, Input } from 'components';
```

## A few words about Atomic Design

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are: __atoms__, __molecules__, __organisms__, __templates__, __pages__. To get more info about methodology, check out [the article](http://atomicdesign.bradfrost.com/chapter-2/).

## TODO

- [x] Styled components
- [x] styled-system
- [x] grid-styled
- [x] React styleguidist (change to https://github.com/c8r/x0)
- [ ] Redux
- [ ] Tests (Jest)
- [ ] Utils and Build tools (like favicon generator, etc)
- [ ] Articles/Goodness
- [ ] Generact (for copy components)


## License

MIT.
