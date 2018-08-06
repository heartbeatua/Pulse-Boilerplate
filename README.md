# Pulse Boilerplate

This is React based boilerplate, which consist a progressive packages: webpack@4, react@16, eslint (airbnb config), [prettier](https://prettier.io/), [styled-components](https://www.styled-components.com/), [react-styleguidist](https://react-styleguidist.js.org/) and basic atomic design structure. Based on [Atomic Design methodology](http://bradfrost.com/blog/post/atomic-web-design/).

## Features

## 

## Setup

Install dependencies
```sh
yarn
```

Run development server ([http://localhost:8080](http://localhost:8080))
```sh
yarn dev
```

Generate production build (will be create a `dist` folder)
```sh
yarn build
```

## React Styleguide and Documentation

Run development server ([http://localhost:6060](http://localhost:6060))
```sh
yarn styleguidist
```

Generate production build (will be create a `docs` folder)
```sh
yarn styleguidist:build
```

## ESLint

Run and get code review (you can pass a `--fix` setting to try solve a problem automatically)
```sh
yarn lint
```

## What is Atomic Design?

Atomic design is a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner. The five stages of atomic design are: __atoms__, __molecules__, __organisms__, __templates__, __pages__. If you want to get more info, check [this article](http://atomicdesign.bradfrost.com/chapter-2/).

## Import components

You can very easily import your component, where you need, and do not worry about folder location (atoms, molecules, etc...), like this:

```js
import { Button, Input } from 'components';
```

## TODO

- [x] Styled components
- [ ] Styled themes
- [ ] styled-system
- [ ] grid-styled
- [x] React styleguidist
- [ ] Redux
- [ ] Tests (Jest)
- [ ] Utils and Build tools (like favicon generator, etc)
- [ ] Awesome-XXX links
- [ ] Generact (for copy components)


## License

MIT.
