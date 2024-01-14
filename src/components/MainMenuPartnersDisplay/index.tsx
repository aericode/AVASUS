import { ContentCard } from "../ContentCard";
import { Container, PartnerBlock, PartnerName, PartnerSectionWrapper, PartnerTitle, StyledHeader } from "./styles";

interface PartnerDisplayBlockProps {
  partnerTitle: string,
  partnerName: string
}
function PartnerDisplayBlock({ partnerTitle, partnerName }: PartnerDisplayBlockProps) {
  return (
    <PartnerBlock>
      <PartnerTitle>
        {partnerTitle}
      </PartnerTitle>
      <PartnerName>
        {partnerName}
      </PartnerName>
    </PartnerBlock>
  )
}

export function MainMenuPartnersDisplay() {
  return (
    <Container>
      <StyledHeader>Parceiros</StyledHeader>

      <ContentCard>
        <PartnerSectionWrapper>
          <PartnerDisplayBlock
            partnerTitle={"Governo do RN"}
            partnerName={"Governo do Estado do Rio Grande do Norte."}
          />
          <PartnerDisplayBlock
            partnerTitle={"SESAP"}
            partnerName={"Secretaria de Saúde Pública do Estado do Rio Grande do Norte."}
          />
          <PartnerDisplayBlock
            partnerTitle={"UFRN"}
            partnerName={"Universidade Federal do Rio Grande do Norte."}
          />
          <PartnerDisplayBlock
            partnerTitle={"HUOL"}
            partnerName={"Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte)."}
          />
        </PartnerSectionWrapper>
      </ContentCard>
    </Container>
  )
}