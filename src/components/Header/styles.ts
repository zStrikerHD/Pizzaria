import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Image = styled.div`
  a {
    color: ${cores.rosaEscuro};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderBar = styled.header`
  padding: 64px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
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
