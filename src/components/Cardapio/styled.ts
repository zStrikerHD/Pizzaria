import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`

export const Paragrafo = styled.p`
  font-size: 32px;
  color: ${cores.branco};
  margin: 0;
  margin-top: 24px;
`
export const Title = styled.h1`
  font-size: 32px;
  color: ${cores.branco};
  margin-top: auto;
  margin-bottom: 32px;
`
