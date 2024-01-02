import logoUFRN from '../../assets/logo-ufrn.png';
import logoLAIS from '../../assets/logo-lais.png';
import { Container, Logo, StyledText, Wrapper } from './styles';

export function FooterFeatured() {
  return (
    <Container>
      <StyledText>Realização</StyledText>
      <Wrapper>
        <Logo src={logoUFRN} />
        <Logo src={logoLAIS} />
      </Wrapper>
    </Container>
  )

}