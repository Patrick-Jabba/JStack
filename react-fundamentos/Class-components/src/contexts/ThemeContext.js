import React, { createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  return(
    <ThemeProvider />
  )
}