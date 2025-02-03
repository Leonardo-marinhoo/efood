import styled from 'styled-components'

type Props = {
  capa?: string
}

export const Banner = styled.div<Props>`
  height: 280px;
  width: 100%;
  color: #ffffff;
  background-image: url(${(props) => props.capa});
  background-size: cover;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 24px 0;
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
