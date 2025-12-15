import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  display: flex;
  background-color: ${cores.rosaMedio};
  padding: 32px 0;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;

  p {
    margin: 80px auto 0;
    max-width: 690px;
    text-align: center;
  }
`
export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  list-style: none;
  padding: 0;
`
export const Link = styled.a`
  color: ${cores.rosaClaro};
  text-decoration: none;
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
`
