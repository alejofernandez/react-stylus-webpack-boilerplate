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

You can check a running version here: https://alejofernandez.github.io/react-stylus-webpack-boilerplate
![react-stylus-webpack-boilerplate](https://cloud.githubusercontent.com/assets/1288192/11636862/0db1255e-9cfd-11e5-90f5-a02b229613aa.png)

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

## About this boilerplate
#### Folder structure:
```
|- src
|   |- theme               // Theme definition stuff goes here, a base css framework (i.e. bootstrap)
|   |   |- framework.css   // overrides, mixins, variables
|   |   |- mixins.styl
|   |   |- variables.styl
|   |   |- helpers.styl
|   |   |- overrides.styl
|   |   |- base.styl       // Base file with all the includes
|   |   \- theme.styl      // Main theme file with global styles
|   |
|   |- components          // Dumb reusable components
|   |   |- Header
|   |   |- Footer
|   |   |   |- Footer.styl // Specific footer styles, includes common definition from './theme'
|   |   |   \- Footer.jsx  // Component logic
|   |   |
|   |   \- index.js
|   |
|   |- containers          // Complex views (smart components, pages, layouts)
|   |   |- Home
|   |   |   |- Home.styl   // Specific home styles, includes common definition from './theme'
|   |   |   \- Home.jsx    // Component logic
|   |   |- About
|   |   |
|   |   \- index.js
|   |
|   |- routes.js           // Routes for the application
|   \- index.js            // Entry point for the application
|
\-[build and configuration files]
```

#### Sample container (smart component):
```javascript
// src/containers/App/App.js
import styles                   from './App.styl';
import React, {Component}       from 'react';
import {Footer, Header, Navbar} from '../../components';

export default class App extends Component {
  render() {
    return (
      <section id="application">
        <Header />
        <div className={styles.container}>
          <Navbar />
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}
```

#### Sample component (dumb component):
```javascript
// src/components/Header/Header.js
import styles             from './Header.styl';
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1><a href='#/'>React Stylus Webpack boilerplate</a></h1>
        <h2>A starter kit for creating applications using react and stylus</h2>
        <a className={styles.stylusLogo} href='https://learnboost.github.io/stylus/'></a>
        <a className={styles.reactLogo} href='https://facebook.github.io/react/'></a>
      </header>
    );
  }
}
```

#### Sample style file:
```css
// src/components/Header/Header.styl
@import "../../theme/base"

.header
  background-color: get-deep-orange()
  color: get-white()
  padding: 60px 20px 50px 110px
  position: relative
```

### Todo:
* Document how scoping of styles work
* Add more documentation and `how-to` samples
* Add `eslint` support
* Include a testing framework
* Include source maps
* Include a pre-render option to avoid FOUC
