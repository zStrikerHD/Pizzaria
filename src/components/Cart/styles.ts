import styled from 'styled-components'
import { cores } from '../../styles'
import { AddButton } from '../Produtos/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${AddButton} {
    margin-top: 16px;
    padding: 4px;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: ${cores.rosaMedio};
  margin-top: 40px;

  h3 {
    font-size: 14px;
  }

  span {
    font-size: 14px;
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  position: relative;
  background-color: ${cores.rosaMedio};
  margin-bottom: 16px;

  .produto {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
    flex-shrink: 0;
  }

  .info {
    flex: 1;
  }

  h3 {
    color: ${cores.rosaEscuro};
    font-weight: bold;
    font-size: 18px;
  }

  span {
    display: block;
    color: ${cores.rosaEscuro};
    font-size: 14px;
    margin-top: 8px;
  }

  .lixeira {
    position: absolute;
    top: 72px; /* 👈 alinhada ao final da imagem */
    right: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`
