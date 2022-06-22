import React from 'react';
import Footer from '../Footer';
import PostsList from '../PostsList';
import Header from '../Header';

export default function Layout({ onToggleTheme, selectedTheme }) {

  return (
    <>
      <Header
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <PostsList />
      <Footer
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
    </>
  )
}
