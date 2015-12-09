# How style scoping works
This boilerplate uses a technique called style scoping that allows components to define their style without adding any side-effect to the rest of the page.
In order to do that, styles are scoped to the component, for instance, if your component is called `Header`, all your classes will be called `Header__<className>___<hash>`.
To simplify the implementation of this technique, this repository implements the solution proposed by `css-modules` (check the following article: http://glenmaddern.com/articles/css-modules)

## Code example
#### Sample Stylus styelsheet
```css
.header
  background-color: white
  color: black
  padding: 60px 20px 50px 110px
  position: relative

  h1
    margin: 0
    font-size: 44px
    font-weight: 600
    font-style: italic
    a
      color: get-white()
      &:hover
        color: get-white()
```

#### React component:
First you need to import your styles
```javascript
import styles from './Header.styl';
```
That will load a map object with all your style names as keys. (You cannot apply styles name directly because, style names will be generated on compile time).

Then you need to set the `className` using your `style` object, and that's it!.

```javascript
import styles             from './Header.styl';
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1><a href='#/'>React Stylus Webpack boilerplate</a></h1>
      </header>
    );
  }
}
```

## Output after compilation
#### Generated css fragment
```css
.Header__header___24AQs {
  background-color: #ff5722;
  color: #fff;
  padding: 60px 20px 50px 110px;
  position: relative
}
.Header__header___24AQs h1 {
  margin: 0;
  font-size: 44px;
  font-weight: 600;
  font-style: italic
}
.Header__header___24AQs h1 a,.Header__header___24AQs h1 a:hover {
  color: #fff
}
```
#### Generated html fragment
```html
<header class="Header__header___24AQs" data-reactid=".0.0">
  <h1 data-reactid=".0.0.0"><a href="#/" data-reactid=".0.0.0.0">React Stylus Webpack boilerplate</a></h1>
</header>
```

## Pros
* Allows to develop completely self-contained components
* Avoid collisions/overriding existing classes with common names (like: header, button)
* Use intuitive names for classes in css files

## Cons
* Slightly bigger css files
* Requires the use of a preprocessor in order to avoid copy/paste reuse

## Why it is better than style inlining (personal opinion)
* Supports cascading
* Supports media queries
* Supports pseudo elements (like :after :before :hover)
