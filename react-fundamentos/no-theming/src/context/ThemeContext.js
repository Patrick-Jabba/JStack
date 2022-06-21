import React, { useState, createContext } from 'react';

export const ThemeContext = createContext('dark');

{/*Tudo que colocarem dentro desse componente THEMECONTEXT vai ser passado pra dentro da CHILDREN                      | */ }
export function ThemeProvider(props) {
  const [theme, setTheme] = useState('dark');

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        onToggleTheme: handleToggleTheme,
      }}
    >

      {props.children}
    </ThemeContext.Provider>
  );
}