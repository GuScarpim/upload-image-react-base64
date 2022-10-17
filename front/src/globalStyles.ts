import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  input, button, textarea {
    font-family: Helvetica;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #CCCCCC;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 8px;
    background-color: #CCCCCC
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCCCCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }

  body {
    font-family: Helvetica;
    padding: 0px;
    margin: 0px;
    background: #000;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    @media only screen and (max-width: 1435px) {
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
`

export default GlobalStyle