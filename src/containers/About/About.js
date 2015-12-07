import styles             from './About.styl';
import content            from './README.md';
import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: content}} />
    );
  }
}
