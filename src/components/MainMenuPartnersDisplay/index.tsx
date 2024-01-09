import { ContentCard } from "../ContentCard";
import { ResponsiveFlexWrapper } from "../ResponsiveFlexWrapper";
import { Container, PartnerBlock, PartnerList, PartnerName, PartnerTitle, StyledHeader } from "./styles";

export function MainMenuPartnersDisplay() {
  return (
    <Container>
      <StyledHeader>Parceiros</StyledHeader>

      <ContentCard>
        <ResponsiveFlexWrapper>
          <PartnerBlock>
            <PartnerTitle>
              Governo do RN
            </PartnerTitle>
            <PartnerName>
              Governo do Estado do Rio Grande do Norte.
            </PartnerName>
          </PartnerBlock>

          <PartnerBlock>
            <PartnerTitle>
              SESAP
            </PartnerTitle>
            <PartnerName>
              Secretaria de Saúde Pública do Estado do Rio Grande do Norte.
            </PartnerName>
          </PartnerBlock>

          <PartnerBlock>
            <PartnerTitle>
              UFRN
            </PartnerTitle>
            <PartnerName>
              Universidade Federal do Rio Grande do Norte.
            </PartnerName>
          </PartnerBlock>

          <PartnerBlock>
            <PartnerTitle>
              HUOL
            </PartnerTitle>
            <PartnerName>
              Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte).
            </PartnerName>
          </PartnerBlock>

        </ResponsiveFlexWrapper>
      </ContentCard>
    </Container>
  )
}