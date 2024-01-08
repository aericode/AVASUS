import { Curso } from "../../types/curso";
import { ContentCard } from "../ContentCard";
import { CoursePartners, CourseTitle, TextWrapper, Thumbnail, Wrapper } from "./styles";

interface FeaturedCourseProps {
  curso: Curso;
}

export function FeaturedCourse({ curso }: FeaturedCourseProps) {
  return (
    <ContentCard>
      <Wrapper>
        <Thumbnail src={curso.capa} />
        <TextWrapper>
          <CourseTitle>
            {curso.titulo}
          </CourseTitle>
          <CoursePartners>
            {curso.parceiros}
          </CoursePartners>
        </TextWrapper>
      </Wrapper>
    </ContentCard>
  )
}
