import React, { useContext, useEffect, useState } from 'react';
import {  toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

import { UsuarioContext } from '../../hooks/usuario';
import { useHistory } from "react-router-dom";
import { Container, Pergunta, Titulo, ContainerButtons } from './styles';
import Button from '../../components/Button';


function Home() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [questao, setQuestao] = useState(null);
  const history = useHistory();

  const getRandomQuestionario = () => {
    const questionario = [
      {
        pergunta: "O React é da Google?",
        resposta: true
      },
      {
        pergunta: "O Google fez o facebook?",
        resposta: false
      },
      {
        pergunta: "HTML é linguagem de programação?",
        resposta: false
      },
      {
        pergunta: "O nome do criador do VueJs é Evan You?",
        resposta: true
      },
      {
        pergunta: "Randomico é o nome do criador do Linux",
        resposta: false
      },
      {
        pergunta: "WWW significa WORLD WIDE WEB?",
        resposta: true
      },
      {
        pergunta: "Mark Zuckerberg é o nome de uma linha de fogões?",
        resposta: false
      },
      {
        pergunta: "Bill Gates criou a Apple?",
        resposta: false
      },
      {
        pergunta: "Javascript é uma linguagem de programação?",
        resposta: false
      },
      {
        pergunta: "Steve Jobs criou a Microsoft?",
        resposta: false
      }
    ];

    const randomQuestao = questionario[Math.floor(Math.random() * questionario.length)];

    // Evita a repetição (Recursivo)
    if (questao !== null && questao.pergunta === randomQuestao.pergunta) {
      getRandomQuestionario();
      return;
    }

    setQuestao(randomQuestao);
  }

  const openModalFalhou = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        const handleSair = () => {
          setUsuario("");
          onClose();
        };
        const handleReiniciar = () => {
          onClose();
        };
        return (
          <div className="custom-ui">
            <h2>
              Ops! 🤦‍♀️ Que pena você errou esta pergunta.
            </h2>
            <br />
            <h3>O que você deseja fazer?</h3>
            <br />
            <div className="container-btns">
              <Button type="button" onClick={handleSair}>
                Sair
              </Button>
              <Button type="button" onClick={handleReiniciar}>
                Reiniciar
              </Button>
            </div>
          </div>
        );
      },
      closeOnEscape: true,
      closeOnClickOutside: false,
    });
  };

  const verificaQuestao = (resposta) => {
    if (questao.resposta === resposta) {
      toast('🦄 Wow você acertou!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      openModalFalhou();
    }
    getRandomQuestionario();
  }

  useEffect(()=>{
    if (usuario === "") history.push("/");

    getRandomQuestionario();
  },[usuario])

  return (
    <Container>
      <Titulo>Olá, {usuario}</Titulo>
      <Pergunta>
        <p>
          Pergunta: {questao && questao.pergunta}
        </p>
      </Pergunta>
      <br />
      <ContainerButtons>
        <Button onClick={()=> verificaQuestao(false)}>FALSO</Button>
        <Button onClick={()=> verificaQuestao(true)}>VERDADEIRO</Button>
      </ContainerButtons>
    </Container>
  )
}

export default Home;