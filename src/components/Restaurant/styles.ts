import styled from 'styled-components'
import { variables } from '../../styles/variables'
import { Link } from 'react-router-dom'
import { MdStarRate } from 'react-icons/md'

type Props = {
  image: string
}
type RowProps = {
  margin_left?: string
}

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 468px;
  width: 100%;
  height: 428px;
  /* height: 100%; */
  background-color: #ffffff;
  overflow: hidden;
  color: ${variables.text_accent};
`

export const Header = styled.div<Props>`
  display: flex;
  background-image: url(${(props) => props.image});
  background-size: cover;
  width: 100%;
  min-height: 217px;
  padding: 16px;
`
export const InfoRow = styled.div<RowProps>`
  display: flex;
  margin-left: ${(props) => (props.margin_left ? props.margin_left : '0')};
  align-items: center;
  height: fit-content;
  gap: 8px;
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid ${variables.text_accent};
  border-top: none;
  padding: 8px;
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
  margin-top: 8px;
  overflow: hidden;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variables.text_accent};
  width: 82px;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  color: ${variables.text_primary};
  margin-top: 20px;
`
export const Rating = styled.span`
  font-size: 18px;
`
export const RatingIcon = styled(MdStarRate)`
  font-size: 32px;
  color: #ffb930;
`
