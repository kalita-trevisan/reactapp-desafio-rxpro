import React, { useContext, useEffect, useState } from 'react';
import { UsuarioContext } from '../../hooks/usuario';
import { useHistory } from "react-router-dom";
import { Container, Pergunta, Titulo } from './styles';
import Button from '../../components/Button';


function Home() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [questao, setQuestao] = useState(null);

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
      }
    ];

    setQuestao(questionario[Math.floor(Math.random() * questionario.length)]);
  }

  useEffect(()=>{
    getRandomQuestionario();
  },[])

  return (
    <Container>
      <Titulo>Olá, jogador(a) {usuario}</Titulo>
      <Pergunta>
        <p>
          Pergunta: {questao && questao.pergunta}
        </p>
      </Pergunta>
      <br />
      <Button onClick={console.log()}>FALSO</Button>
      <Button onClick={console.log()}>VERDADEIRO</Button>
    </Container>
  )
}

export default Home;