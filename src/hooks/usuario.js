import React, { useState, createContext } from 'react';

const UsuarioContext = createContext();

const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState("");

  return (
    <UsuarioContext.Provider value={{
      usuario, 
      setUsuario}}>
      {children}
    </UsuarioContext.Provider>
  )
}

export { UsuarioContext, UsuarioProvider }