import React, { Component } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ selectedTheme, handleToggleTheme}) => (
          <Container>
            <h1>Sharpshooter's Blog</h1>
            <button
              type='button'
              onClick={handleToggleTheme}
            >
              {selectedTheme === 'dark' ? '🌞' : '🌛'}
            </button>
          </Container >
        )}
      </ThemeContext.Consumer>
    );
  }
}