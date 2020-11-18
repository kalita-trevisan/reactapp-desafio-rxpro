import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *, ::before, ::after, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: 'Oswald', sans-serif !important;
    background-color: #7209b7;

    #root {
      max-width: 50vw;
      height: 100vh;
      margin: 0 auto;

      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    
    input[type=text] {
      border: 1px solid #ccc;
      flex: 1;
      width: 100%;
      border-radius: .4rem;
      outline: 0;

      padding: .5rem 1rem;
    }

    .custom-ui {
      -webkit-box-shadow: 0px 0px 18px -6px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 18px -6px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 18px -6px rgba(0,0,0,0.75);

      background-color: #fff;
      padding: 2rem 3rem;
      border-radius: .5rem;

      .container-btns {
        margin-top: 1rem;
        button:first-child {
          margin-right: .5rem;
        }
        button:last-child {
          margin-left: .5rem;
        }
      }
    }
  }
`

export default GlobalStyle;