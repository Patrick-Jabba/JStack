import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from '../styles/themes';

//useEffect(() => {}, []);

class App extends React.Component {
  state = {
    changed: false,
  }

  componentDidMount() {
    console.log('componentDidMount executed')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', {
      currentState: this.state,
      prevState,
      prevProps,
    })
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', { error, info })
  }

  /*Sempre retorna um boolean o componente DEVE atualizar? TRUE OU FALSE SIM ou NAO Uma verificação executada antes do metodo ser renderizado. 
  Funciona de maneira similar a um Middleware que intercepta e verifica se deve seguir ou nao, validando a requisição  */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', {
      currentState: this.state,
      nextState,
      nextProps,
    });

    return nextState.changed;
  }

  render() {
    console.log('rendered');

    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              <Layout />              
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider >
    );
  }
};

export default App;