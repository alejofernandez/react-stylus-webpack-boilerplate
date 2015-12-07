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
