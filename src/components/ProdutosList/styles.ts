import styled from 'styled-components'

type ListProps = {
  variant?: 'restaurante' | 'pizza'
}

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: ${({ variant }) =>
    variant === 'pizza' ? '1fr 1fr 1fr' : '1fr 1fr'};
  column-gap: 24px;
  row-gap: 32px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
