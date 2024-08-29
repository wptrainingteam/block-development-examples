# DataViews for block-development-examples

## What is it?

This app aims to provide a nicer way to navigate through the examples at [block-development-examples](https://github.com/WordPress/block-development-examples) repo leveraring the `@wordpress/dataviews` [npm package](https://www.npmjs.com/package/@wordpress/dataviews).

`@wordpress/dataviews` is a UI component developed by WordPress contributors as part of [the Gutenberg project](https://github.com/wordPress/gutenberg). DataViews is a component that provides an API to render datasets using different types of layouts (table, grid, list, etc.).

See [documentation](https://github.com/WordPress/gutenberg/tree/trunk/packages/dataviews) for more info.

Besides providing developers a nicer way to navigate through the examples of this repo, this implementation may also be a good reference for:

-   Have a React App using Dataviews deployed to GH pages of any repo
-   Using Dataviews to help users navigate through the info of a specific repo
-   Connecting Dataviews to React Router to provide direct links to filters (or searches)

## Demo

From the `_app` folder

```sh
npm install
npm run admin:data:copy
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Coda

This demo has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
