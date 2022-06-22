import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import Layout from './components/Layout';
import themes from '../styles/themes';

function App() {
  const [theme, setTheme] = useState('dark');

  //const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToogleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  // useLayoutEffect(() => {
  //   console.debug('useLayoutEffect')
  // }, [theme])

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }

  //   console.debug({ theme })
  // }, [theme]);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {/* <button onClick={handleToogleTheme}>toggle</button> */}
      <Layout
        onToggleTheme={handleToogleTheme}
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
};

export default App;