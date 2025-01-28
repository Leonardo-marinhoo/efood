import * as S from './styles'
import { Container } from '../../styles/GlobalStyle'
import Header from '../../Containers/Header'
const Hero = () => {
  return (
    <S.Background>
      <Header homePage />
      <Container>
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </Container>
    </S.Background>
  )
}

export default Hero
