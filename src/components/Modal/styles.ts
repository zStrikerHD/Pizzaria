import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: ${cores.rosaEscuro};
  width: 1024px;
  height: 344px;
  padding: 32px;
  position: relative;
  overflow-y: auto;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 32px;
  color: ${cores.branco};
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;
  color: ${cores.branco};

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${cores.rosaMedio};
    color: ${cores.rosaEscuro};
    border: none;
    padding: 4px 8px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`
