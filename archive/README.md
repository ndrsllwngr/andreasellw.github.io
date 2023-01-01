# Personal Website

![Node.js CI](https://github.com/ndrsllwngr/andreasellwanger.com/workflows/Node.js%20CI/badge.svg?branch=develop) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ndrsllwngr_andreasellwanger.com&metric=alert_status)](https://sonarcloud.io/dashboard?id=ndrsllwngr_andreasellwanger.com) 

---

## Getting started

### System Requirements
- [Node.js 14.x](https://nodejs.org/en/)

### Setup
- `node --version && npm --version && yarn --version` - Ensure that required versions are installed.
- `yarn install` - Installs the project using [Yarn](https://yarnpkg.com/getting-started/install).

### Commands
- `yarn dev` - Runs next which starts Next.js in development mode.
- `yarn build` - Runs next build which creates an optimized production build of your application. The output displays information about each route.
- `yarn start` - Runs next start which starts a Next.js production server.
- `yarn export` - Runs next export which allows you to export your app to static HTML, which can be run standalone without the need of a Node.js server.

##### CUSTOM
- `yarn preview-export` - Runs a HTTP server (`python3 -m http.server`) in `out/` to preview the static HTML output from `yarn export`.

---

### Dependency management
- `yarn add <package...>` - Installs the “latest” version of the package.
- `yarn remove <package...>` - Removes the package from your direct dependencies updating your package.json and yarn.lock files in the process.
- [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) upgrades your package.json dependencies to the latest versions, ignoring specified versions.

### Absolute Imports and Aliases
- https://nextjs.org/blog/next-9-4#absolute-imports-and-aliases
- [`jsconfig`](https://code.visualstudio.com/docs/languages/jsconfig#_jsconfig-options) / [`tsconfig`](https://www.typescriptlang.org/tsconfig#baseUrl)


