import styled from 'styled-components'
import bgImage from '../../images/fundo.png'
import { variables } from '../../styles/variables'

type bgProps = {
  homePage?: boolean
}

export const HeaderBar = styled.header<bgProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 186px;
  padding: 24px;
  border-radius: 16px;
  color: ${variables.text_accent};
  justify-content: space-between;
  background-image: url(${(props) => (props.homePage ? '' : bgImage)});
`

export const PageLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
  list-style: none;
`
export const PageItem = styled.li`
  a {
    text-decoration: none;
    color: ${variables.text_accent};
    font-weight: 900;
    font-size: 18px;
  }
`
export const Cart = styled.div`
  display: flex;
  gap: 16px;
  color: ${variables.text_accent};
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: 200ms;
  }
`
export const ItemCounter = styled.span`
  font-weight: 900;
`
