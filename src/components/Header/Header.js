import styles             from './Header.styl';
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>React Stylus Webpack boilerplate</h1>
        <h2>A starter kit for creating applications using react and stylus</h2>
      </header>
    );
  }
}
