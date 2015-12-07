import styles             from './Home.styl';
import content            from './README.md';
import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: content}} />
    );
  }
}
