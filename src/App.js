import React from 'react';
import { ToastContainer } from "react-toastify";
import { Router } from 'react-router-dom';

import history from './services/history';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} hideProgressBar />
    </Router>
  );
}

export default App;
