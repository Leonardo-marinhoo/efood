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
type InputGroupProps = {
  $submit_group?: boolean
}

export const InputGroup = styled.div<InputGroupProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;

  flex-grow: 1;
  margin-top: ${(props) => (props.$submit_group ? '16px' : 0)};

  small {
    background-color: rgba(255, 255, 255, 0.2);
    width: fit-content;
    color: ${variables.text_accent_secondary};
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
`
export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`
export const Input = styled.input`
  width: auto;
  height: 32px;
  padding: 8px;
  background-color: ${variables.text_accent_secondary};
  border: none;
  outline: none;
`
