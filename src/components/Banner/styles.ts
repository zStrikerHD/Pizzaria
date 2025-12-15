import styled from 'styled-components'

export const Image = styled.div`
  font-weight: bold;
  width: 100%;
  height: 560px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }
`

export const Imagem = styled.img`
  display: flex;
  margin: auto;
  margin-top: 32px;
`

export const Title = styled.h1`
  text-align: center;

  span {
    display: block;
  }

  margin-bottom: 40px;
`
