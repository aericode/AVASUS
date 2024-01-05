import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoLAIS from '../../assets/logo-lais.png';
import { Container, StyledHeader, LinkList, ListItem, LogoLAIS, Section, StyledLink, TextLais, Wrapper, SocialLinkContainer, StyledFontAwesomeIcon } from "./styles";
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useScreen } from '../../contexts/ScreenSizeContext';

export function FooterLinks() {
  const { isSmallScreen } = useScreen();

  return (
    <Container>
      <Wrapper isSmallScreen = {isSmallScreen}>
        <Section>
          <LogoLAIS src={logoLAIS} />
          <TextLais>
            {'Laboratório de Inovação \n Tecnológica em Saúde.'}
          </TextLais>
        </Section>
        <Section>
          <StyledHeader>Links Úteis</StyledHeader>
          <LinkList>
            <ListItem>
              <StyledLink href="#"> Início </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="#"> Sobre Nós </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="#"> Módulos </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="#"> Parceiros </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink href="#"> Transparência </StyledLink>
            </ListItem>
          </LinkList>
        </Section>
        <Section>
          <StyledHeader>Redes Sociais</StyledHeader>
          <SocialLinkContainer>
            <StyledFontAwesomeIcon icon={faFacebookF} />
            <StyledFontAwesomeIcon icon={faTwitter} />
            <StyledFontAwesomeIcon icon={faInstagram} />
          </SocialLinkContainer>
        </Section>
      </Wrapper>
    </Container>
  )
}