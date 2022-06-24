import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import Layout from './components/Layout';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';

import themes from '../styles/themes';

//useEffect(() => {}, []);

class App extends React.Component {
  
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