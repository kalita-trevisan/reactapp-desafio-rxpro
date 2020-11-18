import React from 'react';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import { UsuarioProvider } from './hooks/usuario';

import Routes from './routes';
import GlobalStyle from './style/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <Router>
    <UsuarioProvider>
      <ToastContainer />
      <Routes />
    </UsuarioProvider>
    <GlobalStyle />
  </Router>
}

export default App;
