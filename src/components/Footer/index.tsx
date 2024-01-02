import { FooterFeatured } from "../FooterFeatured";
import { Container, LegalSection, LinkSection } from "./styles";

export function Footer() {
    return (
      <Container>
        <FooterFeatured></FooterFeatured>
        <LinkSection></LinkSection>
        <LegalSection></LegalSection>

      </Container>
    )
  }