import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  const history = useHistory();

  function handleNavigate(){
    history.push('/');
  }

  const { theme, handleToggleTheme} = useContext(ThemeContext);

  return (
    <Container>
      <h1>Sharpshooter's Blog</h1>
      <button onClick={handleNavigate} style={{color: '#fff'}}>
       Voltar para HOME PAGE
      </button>
      <button
        type='button'
        onClick={handleToggleTheme}
      >
        {theme === 'dark' ? '🌞' : '🌛'}
      </button>
    </Container >
  );
}