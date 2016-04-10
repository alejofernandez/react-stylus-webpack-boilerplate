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
import styles from './App.styl';
import React from 'react';
import { Footer, Header, Navbar } from '../../components';

const App = (props) => (
  <section id="application">
    <Header />
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
    <Footer />
  </section>
);

App.propTypes = {
  children: React.PropTypes.node
};

export default App;
```

#### Sample component (dumb component):
```javascript
// src/components/Header/Header.js
import styles from './Header.styl';
import React from 'react';

const Header = () => (
  <header className={styles.header}>
    <h1><a href="#/">React Stylus Webpack boilerplate</a></h1>
    <h2>A starter kit for creating applications using react and stylus</h2>
    <a className={styles.stylusLogo} href="https://learnboost.github.io/stylus/"></a>
    <a className={styles.reactLogo} href="https://facebook.github.io/react/"></a>
  </header>
);

export default Header;
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
