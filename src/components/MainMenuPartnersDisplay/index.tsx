import { ContentCard } from "../ContentCard";
import { Container, PartnerList, StyledHeader } from "./styles";

export function MainMenuPartnersDisplay() {
  return (
    <Container>
      <StyledHeader>Parceiros</StyledHeader>

        <ContentCard>
          <PartnerList>

          </PartnerList>
        </ContentCard>
    </Container>
  )
}