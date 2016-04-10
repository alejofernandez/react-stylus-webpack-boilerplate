import content from './README.md';
import React from 'react';

const Home = () => <div dangerouslySetInnerHTML={{ __html: content }} />;

export default Home;
