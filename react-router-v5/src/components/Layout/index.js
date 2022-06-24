import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import { Routes } from '../../Routes';

import {Nav} from './styles';

export default class Layout extends React.Component {  
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Nav>
          <Link to='/'>Home </Link>
          <Link to='/posts'>Posts</Link>
          <Link to='/posts/123'>Post</Link>
        </Nav>
        <Routes />
        <Footer />
      </BrowserRouter>
    )
  }
}
