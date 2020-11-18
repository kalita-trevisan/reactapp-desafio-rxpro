import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';

import { UsuarioContext } from '../../hooks/usuario';
import Button from '../../components/Button';
import { Container, Titulo } from './styles';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function Home() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const history = useHistory();

  useEffect(() => {
    if (usuario !== "") history.push("desafio");
  }, [usuario])

  const submit = () => {
    let nome = "";

    confirmAlert({
      customUI: ({ onClose }) => {
        const handleClickedNo = () => {
          onClose();
        };
        const handleClickedYes = () => {
          setUsuario(nome);
          onClose();
        };
        return (
          <div className="custom-ui">
            <h2>
              Digite o seu nome:
            </h2>
            <br />
            <input type="text" placeholder="Seu nome" onKeyUp={e => nome = e.target.value} />
            <br />
            <br />
            <div className="container-btns">
              <Button type="button" onClick={handleClickedNo}>
                Cancelar
              </Button>
              <Button type="button" onClick={handleClickedYes}>
                Confirmar
              </Button>
            </div>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: false,
    });
  };

  return (
    <Container>
      <Titulo>Olá, convidado(a). Vamos jogar?</Titulo>
      <br />
      <Button onClick={submit}>INICIAR</Button>
    </Container>
  )
}

export default Home;