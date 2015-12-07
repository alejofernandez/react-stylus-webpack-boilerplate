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
