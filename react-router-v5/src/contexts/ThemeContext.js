import React, { createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = 'dark';

    try {
      theme = JSON.parse(localStorage.getItem('theme'));
    } catch (err) {
      console.log(err);
    }

    this.state = {
      theme,
      batatinha: false,
    };
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'dark' ? 'light' : 'dark',
    }), () => {
      localStorage.setItem('theme', JSON.stringify(this.state.theme));
    });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme, 
          handleToggleTheme: this.handleToggleTheme
        }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }

}