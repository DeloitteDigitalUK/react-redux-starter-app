# React Redux Starter App

This app is intended as an exemplar of how we like to build React apps. You can clone this, and start the app to see

It is built off the awesome [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit), but unlike the starter kit, this repo is intended to be **very opinionated**.

We'll explain all our choices though and if you don't like them, just swap them out for something else!

## What's Included?

* React Redux, React Router (obviously)
* Webpack & Babel (Un-changed from the starter kit, so all the same tasks work. See README-redux.md)
* [React Storybook](https://github.com/kadirahq/react-storybook) - Separate your presentational components from your containers, then view your presentational components individually in an this cookbook-style app.
* CSS Modules with SASS
* Responsive grids with flex, via Bootstrap 4 - We use [Bootstrap Loader](https://github.com/shakacode/bootstrap-loader) to load only the normalize.css reset file, and the responsive grid classes. All other CSS should be written in your own CSS modules, but the grid classes are too handy not to use.

## Setup Instructions

```bash
$ git clone https://github.com/DeloitteDigitalUK/react-redux-starter-app.git
$ cd react-redux-starter-app
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

Common commands:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`storybook`|Launches React Storybook at `localhost:9001`, with HMR enabled.|
|`compile`|Compiles the application to disk (`~/dist` by default).|
|`dev`|Same as `npm start`, but enables nodemon for the server as well.|
|`dev:no-debug`|Same as `npm run dev` but disables devtool instrumentation.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`deploy`|Runs linter, tests, and then, on success, compiles your application to disk.|
|`deploy:dev`|Same as `deploy` but overrides `NODE_ENV` to "development".|
|`deploy:prod`|Same as `deploy` but overrides `NODE_ENV` to "production".|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|

## Bootstrap

We deliberately use as little of Bootstrap as possible. The grid functions and normalize.css are handy, but other than that, we'd rather write CSS modules with no outside dependency.

If you would like to use more of Bootstrap, edit the `.bootstraprc` file and enable the relevant modules.

If you want to enable any of the JavaScript features, look at Bootstrap Loader's [setup instructions](https://github.com/shakacode/bootstrap-loader) for some extra steps to take.
