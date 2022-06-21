import React, { useState } from 'react';
import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';
import Button from '../Button';

import { Title } from './styles';

// Props -> Propriedades ou atributos do HTML
export default function App() {

  const [posts, setPosts] = useState([
    { id: (Math.random() * 100), title: `Title#01`, subtitle: `Sub#01`, likes: parseInt(Math.random() * 100), read: false, removed: false },
    { id: (Math.random() * 100), title: `Title#02`, subtitle: `Sub#02`, likes: parseInt(Math.random() * 100), read: true, removed: false },
    { id: (Math.random() * 100), title: `Title#03`, subtitle: `Sub#03`, likes: parseInt(Math.random() * 100), read: false, removed: false },
    { id: (Math.random() * 100), title: `Title#04`, subtitle: `Sub#04`, likes: parseInt(Math.random() * 100), read: true, removed: false },
  ]);

  function handleRefresh() {
    setTimeout(() => {


      setPosts((prevState) => [
        ...prevState,
        {
          id: parseFloat(Math.random() * 1000),
          title: `Title#0${prevState.length + 1}`,
          subtitle: `Sub#0${prevState.length + 1}`,
          likes: parseInt(Math.random() * 100),
          read: parseFloat(Math.random() * 1) > 0.5 ? false : true,
        },
      ]);
    }, 500);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId
          ? { ...post, removed: true }
          : post
      )
    ));
  }

  // salva o valor dentro de um estado (useState) criar uma função via callback e executar essa função dentro do componente

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Post da semana
          <Button onClick={handleRefresh}>Atualizar</Button>
        </Title>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}
    </ThemeProvider>
  );
}