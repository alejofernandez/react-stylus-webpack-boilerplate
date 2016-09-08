import styles from './LetteringTest.styl';
import { Lettering } from '../../components';
import React from 'react';

const LetteringTest = () => (
  <Lettering className="fancyText" tagName="h1" charClass="custom">
    Awesome Title!
  </Lettering>
);

export default LetteringTest;
