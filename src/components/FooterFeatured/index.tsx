import logoUFRN from '../../assets/logo-ufrn.png';
import logoLAIS from '../../assets/logo-lais.png';
import { Container, Logo, StyledText, Wrapper } from './styles';
import { useScreen } from '../../contexts/ScreenSizeContext';

export function FooterFeatured() {
  const { isSmallScreen } = useScreen();

  return (
    <Container>
      <StyledText>Realização</StyledText>
      <Wrapper isSmallScreen = {isSmallScreen}>
        <Logo src={logoUFRN} />
        <Logo src={logoLAIS} />
      </Wrapper>
    </Container>
  )

}