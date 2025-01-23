import styled from 'styled-components'
import { variables } from '../../styles/variables'
import bgImage from '../../images/fundo.png'

export const Background = styled.div`
  width: 100%;
  height: 368px;
  position: relative;
  overflow: hidden;
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Title = styled.span`
  width: 539px;
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  margin: 0 auto;
  color: ${variables.text_accent};
`
