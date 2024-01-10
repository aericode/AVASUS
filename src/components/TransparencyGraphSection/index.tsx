import { ContentCard } from "../ContentCard";
import { ResponsiveFlexWrapper } from "../ResponsiveFlexWrapper";
import { Container, GraphCardContainer, GraphImage, Wrapper } from "./styles";

export function TransparencyGraphSection() {
  return (
    <Container>
      <ResponsiveFlexWrapper>
        <Wrapper>
          <GraphCardContainer>
            <ContentCard>
              <GraphImage />
            </ContentCard>
          </GraphCardContainer>
          <GraphCardContainer>
            <ContentCard>
              <GraphImage />
            </ContentCard>
          </GraphCardContainer>
        </Wrapper>
      </ResponsiveFlexWrapper>
    </Container>
  )
}