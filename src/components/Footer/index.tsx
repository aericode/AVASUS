import { FooterFeatured } from "../FooterFeatured";
import { FooterLegal } from "../FooterLegal";
import { FooterLinks } from "../FooterLinks";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <FooterFeatured/>
      <FooterLinks/>
      <FooterLegal/>

    </Container>
  )
}