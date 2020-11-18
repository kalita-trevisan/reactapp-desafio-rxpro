import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Pergunta = styled.div`
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: .5rem;
    margin-top: 1rem;
    p {
      font-size: 2rem;
      color: #000;
    }
`;

export const Titulo = styled.h1`
    color: #f72585;
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;

    button:first-child {
      margin-right: .5rem;
    }
    button:last-child {
      margin-left: .5rem;
    }
`;


