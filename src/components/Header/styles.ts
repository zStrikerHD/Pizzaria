import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  background-repeat: no-repeat;
  background-size: cover;

  a {
    color: ${cores.rosaEscuro};
    text-decoration: none;
    font-weight: 900;
    font-size: 18px;
  }
`

export const HeaderBar = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 186px;
`

export const Left = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`
