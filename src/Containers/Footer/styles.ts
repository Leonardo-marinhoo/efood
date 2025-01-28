import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const FooterContainer = styled.footer`
  display: flex;
  width: 100vw;
  height: 298px;
  background-color: #ffebd9;
`

export const Links = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-top: 32px;
`
export const LinksItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffebd9;
  font-size: 16px;
  font-weight: 400;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${variables.text_accent};
`

export const CopyRight = styled.span`
  text-align: center;
  width: 480px;
  font-size: 10px;
  font-weight: 400;
  margin-top: auto;
  margin-bottom: 10px;
`
