# Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Installation

Set the Node.js version to use for this project, from the `.nvmrc` file:

```console
nvm use
```

Install the dependencies:

```console
yarn install
```

If fails then clear current node modules and try again:

```console
rm -rf node_modules
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
