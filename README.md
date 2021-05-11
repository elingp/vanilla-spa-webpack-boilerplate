# Vanilla SPA Webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> SPA with vanilla js, Webpack 5, and opinionated configuration

## Setup

Use the package manager npm from [Node](https://nodejs.org/en/) to install.

```bash
npm install
```

Then create a new `.env.production` and `.env.development` based from the `.env.example` instructions.

## Usage

**Run** the project for local development and open <http://localhost:8081>.

```bash
npm start
```

**Build** the project for the production environment.

```bash
npm run build
```

**Test** the code.

```bash
npm test
```

**Lint** or **Format** the code.

```bash
npm run lint
npm run format
```

Check out the `package.json` for further information.

## Features

- **JavaScript:** Written in modern vanilla JavaScript.
- **Babel:** Traspile your JS to support legacy browsers.
- **PostCSS:** Transform your CSS for the future.
- **ESLint:** Lint JavaScript with popular conventions.
- **Stylelint:** Lint CSS with popular conventions.
- **Prettier:** Format everything for consistency.
- **EditorConfig:** Configure your editor the same way.
- **Browserslist:** Configure which browser you will support.
- **Husky & lint-staged:** No bad commits in you git history.
- **Jest & Testing Library:** If it's not tested, it doesn't work.
- **Webpack 5:** Bundle your code with trusted and flexible tooling.
- **DOMPurify:** Sanitize HTML to prevent XSS.
- Webpack environment splitting (development & production).
- Latest webpack-dev-server that supports Webpack 5.
- Bunch of Webpack loaders and plugins to increase developer experience.
- Uses [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) to mock API.
- Also includes **animate.css**, **Axios**, **Bulma**, **main.css**, and **Font Awesome 5** (inside `index.html`) as an example dependencies.

## Author

👤 **Eling Pramuatmaja**

## 📝 License

Copyright © 2021 [Eling Pramuatmaja](https://github.com/elingp).

This project is [MIT](LICENSE) licensed.
