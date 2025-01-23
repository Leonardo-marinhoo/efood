import styled from 'styled-components'
import { variables } from '../../styles/variables'
import { Link } from 'react-router-dom'

type Props = {
  image: string
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 468px;
  width: 100%;
  height: 338px;
  background-color: #ffffff;
  overflow: hidden;
  color: ${variables.text_accent};
  padding: 8px;
  background-color: ${variables.text_accent};
`

export const Header = styled.div<Props>`
  display: flex;
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 100%;
  min-height: 167px;
  overflow: hidden;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-top: none;
  color: #ffebd9;
`
export const Title = styled.span`
  font-size: 17px;
  font-weight: 500;
  margin: 8px 0;
  white-space: nowrap;
`
export const Description = styled.p`
  max-height: 100%;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffebd9;
  width: 100%;
  min-height: 24px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${variables.text_accent};
  margin-top: 20px;
`
