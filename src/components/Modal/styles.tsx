import styled from 'styled-components'
import { variables } from '../../styles/variables'
import { IoMdClose } from 'react-icons/io'

type descriptionProps = {
  margin_top?: string
}
type modalProps = {
  $visible: boolean
}

export const ModalContainer = styled.div<modalProps>`
  display: flex;
  visibility: ${(props) => (props.$visible ? 'visible' : 'hidden')};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.886);
`

export const ModalContent = styled.div`
  display: flex;
  position: absolute;
  top: 20%;
  margin: 0 auto;
  width: 1024px;
  height: 344px;
  background-color: ${variables.text_accent};
  color: ${variables.text_primary};
  padding: 32px;
  gap: 24px;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: contain;
`
export const ProductTitle = styled.span`
  font-weight: 900;
  font-size: 18px;
`
export const ProductDescription = styled.span<descriptionProps>`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0;
  margin-top: ${(props) => props.margin_top};
`
export const AddButton = styled.button`
  width: 218px;
  height: 24px;
  background-color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  border: none;
  /* margin-top: auto; */
  color: ${variables.text_accent};
`
export const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: 5%;
  left: 95%;
  font-size: 28px;
  color: ${variables.text_primary};
  cursor: pointer;
`
