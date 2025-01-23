import styled from 'styled-components'
import bgImage from '../../images/imagem de fundo.png'

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  width: 100%;
  padding: 32px 170px;
  color: #ffffff;
  background-image: url(${bgImage});
  background-size: cover;
`
export const TypeTitle = styled.span`
  font-size: 32px;
  font-weight: 100;
`
export const RestaurantTitle = styled.span`
  font-size: 32px;
  font-weight: 900;
  margin-top: auto;
`
