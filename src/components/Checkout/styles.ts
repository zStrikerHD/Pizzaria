import styled from 'styled-components'
import { cores } from '../../styles'
import { AddButton as StyledAddButton } from '../Produtos/styles'

export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 40px 0 0 0;
  max-width: 360px;
  width: 100%;
  color: ${cores.branco};
`

export const Header = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  padding: 0 8px;
`

export const DivContainer = styled.div`
  margin-bottom: 8px;
  padding: 0 8px;
`

export const FlexRow = styled.div`
  display: flex;
  gap: 34px;

  > div {
    flex: 1;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  background-color: ${cores.rosaMedio};
  border: none;
  height: 32px;
  padding: 0 8px;
  color: ${cores.preto};
  font-size: 14px;

  &::placeholder {
    color: ${cores.preto};
  }
`

export const AddButton = styled(StyledAddButton)`
  margin-top: 16px;
  margin-right: 8px;
  padding: 4px;
  width: calc(100% - 16px); // Ajuste para adicionar margem
`
