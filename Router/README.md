# Notice
This project will no longer be updated, in favor of focusing my efforts on the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) and [Generator Scalable React](https://github.com/RyanCCollins/slush-generator-scalable-react).  Feel free to keep using it!

![React Redux Simple Starter Logo](https://github.com/RyanCCollins/cdn/blob/master/react-redux-simple-starter/logo.png?raw=true)
# Behind the boilerplate
The hardest part about React is getting setup.  This project aims to help anyone quickly get bootstrapped with the latest versions of React, Redux, Webpack, etc.  It uses Hot Module Reloading and has a few optional add-ons like React Foundation, Redux Form, etc.

It follows best practices, including the [AirBnb JS & JSX style guides](https://github.com/airbnb/javascript) and uses the FTF (file-type first) organizational pattern.

## Scalable / Feature First Boilerplate
If you're looking for something with a bit more features, take a look at the [Scalable React Boilerplate](https://github.com/RyanCCollins/scalable-react-boilerplate) project!

# Documentation

## Getting Started
To try the example application out or to use the project, follow the instructions below.

1. **Clone repo**

    git clone https://github.com/RyanCCollins/react-redux-simple-starter.git

2. **Install dependencies**

    npm run setup

3. **Run development server**

   npm run start

   Development server should be running at http://localhost:8080/

4. **Make build**

   npm run build

### File Structure
* Some files left out for brevity.  Please reference the files in the [React Redux Simple Starter](https://github.com/RyanCCollins/react-redux-simple-starter) project for information about the file structure.
```
.
├── README.md
├── LICENSE
├── index.html
├── package.json
├── webpack.config.js
├── app/
|   ├── fonts
|   ├── images
|   ├── src
|   |   ├── actions
|   |   ├── components
|   |   |   ├── MyComponent
|   |   |   ├── MyOtherComponent
|   |   |   ├── App.js
|   |   |   ├── Main.js
|   |   |   └── index.js
|   |   ├── containers
|   |   |   ├── MyContainer
|   |   |   └── index.js
|   |   ├── pages
|   |   ├── reducers
|   |   ├── store
|   |   ├── utils
|   |   └── index.js
|   ├── styles
|   └── tests
|   |   ├── actions
|   |   ├── components
|   |   ├── reducers
|   |   └── test_helper.js
├── .eslintignore
├── .eslintrc
├── .gitattributes
└── .gitignore
```

## Scripts
- **npm run setup**

    Installs the application's dependencies

- **npm run test**

     Runs unit tests

- **npm run test:watch**

     Watches for changes to run unit tests

- **npm run build**

     Bundles the application

- **npm run dev**

     Starts webpack development server

- **npm run lint**

     Runs the linter

- **npm run deploy**

     Creates the production ready files

- **npm run clean**

    Removes the bundled code and the production ready files



## Technologies / Libraries

- [Node](https://nodejs.org/en/) - JS runtime environment
- [npm](https://www.npmjs.com/) - package manager
- [Babel](https://babeljs.io/) - ES6 transpiler
- [Webpack](https://webpack.github.io/) - module bundler & task runner
- [React](https://facebook.github.io/react/) - interfaces
- [react-hot-loader](https://github.com/gaearon/react-hot-loader) - hot reloading for react
- [react-router](https://github.com/rackt/react-router) - react application router
- [react-redux](https://github.com/rackt/react-redux) - react bindings for redux
- [react-css-modules](https://github.com/gajus/react-css-modules) - React CSS Modules implement automatic mapping of CSS modules.
- [react-foundation](https://github.com/nordsoftware/react-foundation) - Foundation React components, use or don't use.
- [Immutable](https://github.com/facebook/immutable-js) - data structures
- [Redux](https://github.com/rackt/redux) - awesome flux architecture
- [Redux Form](https://github.com/erikras/redux-form)- works with React Redux to enable an html form in React to use Redux to store all of its state.
- [redux-thunk](https://github.com/gaearon/redux-thunk) - thunk middleware for redux
- [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) - API fetch network requests
- [redux-devtools](https://github.com/gaearon/redux-devtools) - redux development tool
- [SASS](http://sass-lang.com/) - styles
- [ESLint](http://eslint.org/) - linter
- [Mocha](http://mochajs.org/) - unit tests
- [jsdom](https://github.com/tmpvar/jsdom) - vdom to test React without browser
- [Expect](https://github.com/mjackson/expect) - assertion library
- [Chai / Immutable](http://chaijs.com/) - assertion library for Immutable JS
- A bunch of useful scripts


## Timeline / TODOS
* [x] Write README file
* [x] Setup Filetype First organization
* [x] Add better demonstration of included libraries (run the test application)
* [x] Write unit tests and setup folder structure for testing (See tests directory for examples)
* [x] Migrate to Feature First file organization as noted [in this article](http://engineering.kapost.com/2016/01/organizing-large-react-applications/) and in the [React Boilerplate](https://github.com/mxstbr/react-boilerplate) (See [here](https://github.com/RyanCCollins/scalable-react-boilerplate))
* [ ] Write component tests using Jest and / or Enzyme
* [ ] Write wiki / other documentation
* [ ] Implement a Rails like component generator


### Acknowledgements

This project is loosely based on: [This boilerplate](https://github.com/mezod/boilerplate-koa-redux-react).

Thank you to @mezod for their hard work and inspiration.
