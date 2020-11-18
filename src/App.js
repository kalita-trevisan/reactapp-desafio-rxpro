import React from 'react';

import {
  BrowserRouter as Router,
} from "react-router-dom";
import { UsuarioProvider } from './hooks/usuario';

import Routes from './routes';
import GlobalStyle from './style/global';

function App() {
  return <Router>
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
    <GlobalStyle />
  </Router>
}

export default App;
