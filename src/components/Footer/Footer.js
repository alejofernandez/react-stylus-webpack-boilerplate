import styles             from './Footer.styl';
import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <p><strong>React Stylus Webpack boilerplate</strong> is Copyright ©2015 by <a href="https://github.com/AlejoFernandez">Alejo Fernandez</a>.
        It is free software, and may be used/modified/redistributed under the terms specified in the MIT LICENSE.</p>
      </footer>
    );
  }
}
