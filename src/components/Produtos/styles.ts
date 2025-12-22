import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'
import { cores } from '../../styles'

type VariantProps = {
  variant: 'restaurante' | 'pizza'
}

export const Card = styled.div<VariantProps>`
  width: 100%;
  max-width: ${({ variant }) => (variant === 'pizza' ? '320px' : '472px')};
  background-color: ${({ variant }) =>
    variant === 'pizza' ? cores.rosaEscuro : cores.branco};
  margin: 0 auto 48px;
  border: 1px solid ${cores.rosaEscuro};
  position: relative;
  padding-bottom: 16px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Titulo = styled.h3<VariantProps>`
  font-weight: bold;
  font-size: 18px;
  margin: 0;
  color: ${({ variant }) =>
    variant === 'pizza' ? cores.branco : cores.rosaEscuro};
`

export const Descricao = styled.p<VariantProps>`
  font-size: 14px;
  line-height: 22px;
  margin: 0 8px 16px;
  color: ${({ variant }) =>
    variant === 'pizza' ? cores.branco : cores.rosaEscuro};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const SaibaMais = styled(Link)`
  padding: 2px 8px;
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  margin-left: 8px;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
`

export const Capa = styled.img<VariantProps>`
  width: 100%;
  height: 217px;
  object-fit: cover;
  display: block;
  padding: ${({ variant }) => (variant === 'pizza' ? '8px' : '0')};
`

export const AddButton = styled.button`
  width: calc(100% - 16px);
  margin: 0 8px;
  background: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  border: none;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
`

export const DivNotaTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 8px 12px;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.rosaEscuro};
    margin: 0;
  }

  img {
    max-width: 20px;
  }
`
