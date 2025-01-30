import styled from 'styled-components'
import { variables } from '../../styles/variables'

type SidebarProps = {
  $visible?: boolean
}

export const SidebarContainer = styled.div<SidebarProps>`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  height: 100vh;
  transform: ${(props) => (props.$visible ? null : 'translateX(100%)')};
  transition: 400ms;
  top: 0;
  left: 0;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${(props) =>
      props.$visible
        ? 'fadeIn 50ms linear 320ms forwards '
        : 'fadeOut 10ms linear 320ms forwards'};
  }
  @keyframes fadeOut {
    to {
      visibility: hidden;
      background-color: blue;
    }
  }
  @keyframes fadeIn {
    to {
      visibility: visible;
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
    }
  }
`
export const CloseBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 48px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${variables.text_secondary};
  font-size: 28px;
  gap: 8px;
  transition: 150ms;
  cursor: pointer;
  z-index: 10;

  span {
    font-size: 12px;
  }

  &:hover {
    color: ${variables.text_primary};
    width: 58px;
  }
`
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 100;
  height: 28px;
`

export const SidebarContent = styled.aside`
  width: 25vw;
  height: 100vh;
  background: ${variables.text_accent};
  padding: 18px 8px;
  z-index: 10;
`
export const ProductList = styled.div`
  width: 100%;
  max-height: 80%;
  overflow: hidden;
  overflow-y: auto;
`

export const Product = styled.div`
  display: flex;
  width: 344px;
  height: 100px;
  background: #ffebd9;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  color: ${variables.text_accent};
  margin-bottom: 16px;
`
export const ProductThumb = styled.img`
  width: 80px;
  height: 80px;
`
export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px 0;
  gap: 8px;
`
export const ProductTitle = styled.span`
  font-weight: 900;
  font-size: 18px;
`
export const ProductPrice = styled.span`
  font-weight: 400;
  font-size: 14px;
`

export const Total = styled.div`
  display: flex;
  width: 344px;
  height: 16px;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  color: #ffebd9;
  padding-bottom: 8px;
  border-bottom: 1px solid #ffebd9;

  span {
    font-weight: 700;
    font-size: 14px;
  }
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 24px;
  background: #ffebd9;
  font-weight: 700;
  font-size: 14px;
  color: ${variables.text_accent};
  margin-top: 8px;
  border: none;
`
export const DeleteButton = styled.button`
  border: none;
  outline: none;
  background: none;
  margin-top: auto;
  margin-left: auto;
  color: ${variables.text_accent};
  font-size: 18px;
  cursor: pointer;
`
