import styled from 'styled-components';

export const Container = styled.button`
    border: 0;
    padding: .8rem 1.3rem;
    background: #ffea00;
    border-radius: .4rem;
    color: #0b0c0c;
    font-weight: 700;
    cursor: pointer;
    outline: 0;
    font-size: 1.2rem;
    transition: .3s ease-in-out;
    flex: 1;

    &:hover {
        background: #ffc800;
    }
`;