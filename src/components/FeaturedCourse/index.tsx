import { Curso } from "../../types/curso";
import { ContentCard } from "../ContentCard";
import { CardPadding, Container, CoursePartners, CourseTitle, IconTextWrapper, InfoText, InfoWrapper, ResponsivityWrapper, SeeModuleButton, TextWrapper, Thumbnail, Wrapper } from "./styles";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "../StarRating";
import { StyledIcon } from "../StyledIcon";
import { useScreen } from "../../contexts/ScreenSizeContext";
import { addDotsToNumber } from "../../utils/addDotsToNumber";
import { ImageWithSpinner } from "../ImageWithSpinner";

interface FeaturedCourseProps {
  curso: Curso;
}

export function FeaturedCourse({ curso }: FeaturedCourseProps) {
  const { isSmallScreen } = useScreen();
  return (
    <Container>

      <ContentCard>
        <CardPadding>
          <Wrapper isSmallScreen={isSmallScreen}>
            <ResponsivityWrapper>
              <a href={`/vercurso/${curso?.id}` || '#'}>
                <ImageWithSpinner src={curso.capa} width={'120px'} height={'120px'} />
              </a>
              <TextWrapper>
                <CourseTitle>
                  {curso.titulo}
                </CourseTitle>
                <CoursePartners>
                  {curso.parceiros}
                </CoursePartners>
              </TextWrapper>
            </ResponsivityWrapper>
            <InfoWrapper>
              <IconTextWrapper>
                <StyledIcon icon={faUserGroup} iconSize={24} />
                <InfoText>{curso && addDotsToNumber(curso.matriculados)}</InfoText>
              </IconTextWrapper>
              <IconTextWrapper>
                <StyledIcon icon={faClock} iconSize={24} />
                <InfoText>{curso.duracao}</InfoText>
              </IconTextWrapper>
              <StarRating rating={curso.avaliacao} fontSize={16} />
            </InfoWrapper>

            <SeeModuleButton href={`/vercurso/${curso?.id}` || '#'}>
                Ver Módulo
            </SeeModuleButton>
          </Wrapper>
        </CardPadding>
      </ContentCard>
    </Container>

  )
}
