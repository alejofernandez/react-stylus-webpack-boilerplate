import React from 'react';

class Lettering extends React.Component {
  getSpanElement(elem, className, index, spacer) {
    const key = `${className}-${index}`;
    return <span key={key} className={`${className} ${key}`}>{elem}{spacer}</span>;
  }
  getWrappedChars() {
    let lineIndex = 0;
    let wordIndex = 0;
    let charIndex = 0;
    const { children, lineClass, wordClass, charClass } = this.props;
    const childrenArr = children.split('\\n');
    const lines = childrenArr.map(line => {
      lineIndex += 1;
      const wordsArray = line.split(' ');
      const words = wordsArray.map(word => {
        wordIndex += 1;
        const charsArray = word.split('');
        const chars = charsArray.map(char => {
          charIndex += 1;
          return this.getSpanElement(char, charClass, charIndex);
        });
        return this.getSpanElement(chars, wordClass, wordIndex, ' ');
      });
      return this.getSpanElement(words, lineClass, lineIndex, ' ');
    });
    return lines;
  }

  render() {
    const wrappedChars = this.getWrappedChars();
    return React.DOM[this.props.tagName]({ className: this.props.className }, wrappedChars);
  }
}

const tagNames = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span'];
Lettering.propTypes = {
  className: React.PropTypes.string,
  charClass: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  lineClass: React.PropTypes.string,
  tagName: React.PropTypes.oneOf(tagNames),
  wordClass: React.PropTypes.string,
};

Lettering.defaultProps = {
  className: 'lettering',
  charClass: 'char',
  lineClass: 'line',
  tagName: 'h1',
  wordClass: 'word'
};

module.exports = Lettering;
