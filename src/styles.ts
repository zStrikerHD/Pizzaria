import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaClaro: '#FFF8F2',
  rosaEscuro: '#E66767',
  rosaMedio: '#FFEBD9',
  branco: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
  }

  .container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
`
