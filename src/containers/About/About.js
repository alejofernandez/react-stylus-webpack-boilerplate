import content from './README.md';
import React from 'react';

const About = () => <div dangerouslySetInnerHTML={{ __html: content }} />;

export default About;
