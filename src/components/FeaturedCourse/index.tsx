import { Curso } from "../../types/curso";
import { ContentCard } from "../ContentCard";
import { CoursePartners, CourseTitle, InfoText, InfoWrapper, ResponsivityWrapper, SeeModuleButton, SeeModuleText, TextWrapper, Thumbnail, Wrapper } from "./styles";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "../StarRating";
import { StyledIcon } from "../StyledIcon";
import { useScreen } from "../../contexts/ScreenSizeContext";

interface FeaturedCourseProps {
  curso: Curso;
}

export function FeaturedCourse({ curso }: FeaturedCourseProps) {
  const { isSmallScreen } = useScreen();
  return (
    <ContentCard>
      <Wrapper isSmallScreen={isSmallScreen}>
        <ResponsivityWrapper>
        <Thumbnail src={curso.capa} />
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
          <>
            <StyledIcon icon={faUserGroup} />
            <InfoText>{curso.matriculados}</InfoText>
          </>
          <>
            <StyledIcon icon={faClock} />
            <InfoText>{curso.duracao}</InfoText>
          </>
          <StarRating rating={curso.avaliacao} />
        </InfoWrapper>

        <SeeModuleButton>
          <SeeModuleText>
            Ver Módulo
          </SeeModuleText>
        </SeeModuleButton>
      </Wrapper>
    </ContentCard>
  )
}
