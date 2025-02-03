import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const Form = styled.form`
  color: ${variables.text_accent_secondary};
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${variables.text_accent_secondary};
    font-weight: 300;
    font-size: 14px;
    margin: 12px 0;
  }
`
export const FormTitle = styled.span`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 16px;
`

export const Row = styled.div`
  display: flex;
  gap: 36px;
  width: 100%;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  small {
    background-color: rgba(255, 255, 255, 0.2);
    width: fit-content;
    color: yellow;
    letter-spacing: 1px;
  }
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
`
export const Input = styled.input`
  width: auto;
  height: 32px;
  padding: 8px;
  background-color: ${variables.text_accent_secondary};
  border: none;
  outline: none;
`
