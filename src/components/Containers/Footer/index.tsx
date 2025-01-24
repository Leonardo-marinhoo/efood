import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter
} from 'react-icons/ti'
import * as S from './styles'
import { Container } from '../../../styles/GlobalStyle'
import Branding from '../../Branding'

const Footer = () => {
  return (
    <S.FooterContainer>
      <Container $align_items>
        <Branding />
        <S.Links>
          <S.LinksItem>
            <TiSocialInstagram />
          </S.LinksItem>
          <S.LinksItem>
            <TiSocialFacebook />
          </S.LinksItem>
          <S.LinksItem>
            <TiSocialTwitter />
          </S.LinksItem>
        </S.Links>
        <S.CopyRight>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.CopyRight>
      </Container>
    </S.FooterContainer>
  )
}

export default Footer
