# React-Stylus-Webpack boilerplate
An opinionated starter kit for creating applications using react and stylus, client side rendering, development and production configurations and hot reloading

Tecnology stack:
* Plain react (for now), no flux implementation in order to keep it simple (maybe create a fork later for redux/reflux/plain flux)
* `react-router` for handling routes
* Client side rendering (leaving isomorphic rendering for later)
* ES6 with Babel
* `Stylus` preprocessor for styles
* Scoped styles using `css-modules` => http://glenmaddern.com/articles/css-modules
* `gulp` for build automation
* `webpack` for development and production bundling
* `webpack-dev-server` for running locally, with hot reloading (styles, jsx, images, files)

## How to use this starter kit
### Install gulp
* `npm install -g gulp`

### Install local modules
* `npm install`

### To run locally
* `gulp serve`
* `open http://localhost:3000`

### To build distributable files
* `gulp build`

### To deploy to github pages
* `gulp deploy`
* `open http://<your-github-account>.github.io/<your-repo-name>`
