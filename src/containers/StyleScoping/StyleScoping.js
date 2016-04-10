import content from './README.md';
import React from 'react';

const StyleScoping = () => <div dangerouslySetInnerHTML={{ __html: content }} />;

export default StyleScoping;
