import styles from './Navbar.styl';
import React from 'react';

const Navbar = () => (
  <div className={styles.navbar}>
    <ul>
      <li><a href="#/">Home</a></li>
      <li><a href="#/about">About this project</a></li>
      <li><a href="#/styles">Style framework</a></li>
      <li><a href="#/blog">Blog</a></li>
    </ul>
  </div>
);

export default Navbar;
