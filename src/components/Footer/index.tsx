import { FooterFeatured } from "../FooterFeatured";
import { FooterLinks } from "../FooterLinks";
import { Container, LegalSection, LinkSection } from "./styles";

export function Footer() {
  return (
    <Container>
      <FooterFeatured></FooterFeatured>
      <FooterLinks></FooterLinks>
      <LegalSection></LegalSection>

    </Container>
  )
}