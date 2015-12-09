import styles             from './StyleScoping.styl';
import content            from './README.md';
import React, {Component} from 'react';

export default class StyleScoping extends Component {
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: content}} />
    );
  }
}
