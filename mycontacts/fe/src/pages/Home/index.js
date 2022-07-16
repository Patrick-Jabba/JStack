import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
// import Modal from '../../components/Modal';
// import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquise pelo nome..."
        />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
      </ListContainer>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Patrick Monteiro</strong>
            <small>Instagram</small>
          </div>
          <span>patrick@devacademy.com.br</span>
          <span>(21) 9999-9999</span>
        </div>

        <div className="actions">
          <Link to="/edit">
            <img src={edit} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}

fetch('http://localhost:3000')
  .then((response) => {
    console.log('response', response);
  })
  .catch((error) => {
    console.log('erro', error);
  });
