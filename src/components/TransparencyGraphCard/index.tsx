import { ContentCard } from "../ContentCard";
import { Container, GraphImage, ImageWrapper, StyledTitle, Wrapper } from "./styles";

interface TransparencyGraphCardProps {
  title:string,
  imageSrc: string;
}

export function TransparencyGraphCard({title, imageSrc}:TransparencyGraphCardProps) {
  return (
    <Container>
      <ContentCard>
        <Wrapper>
          <StyledTitle> {title} </StyledTitle>
          <ImageWrapper>
            <GraphImage src={imageSrc} />
          </ImageWrapper>
        </Wrapper>
      </ContentCard>
    </Container>
  )
}