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
