import styled, { createGlobalStyle } from 'styled-components'
import { variables } from './variables'

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${variables.background_primary};
    color: ${variables.text_accent};
    overflow-x: hidden;
  }
  button{
    cursor:pointer;
  }
`

type ContainerProps = {
  $flex_row?: boolean
  $align_items?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.$flex_row ? 'row' : 'column')};
  align-items: ${(props) => (props.$align_items ? 'center' : 'start')};
  width: 1024px;
  margin: 0 auto;
  padding: 32px 0;
`

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 35px;
  width: 121px;
  height: 26px;
  font-size: 12px;
  background-color: ${variables.text_accent};
  padding: 6px 4px;
  color: #ffffff;
`
