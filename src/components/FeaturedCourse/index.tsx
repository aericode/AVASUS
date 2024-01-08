import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Curso } from "../../types/curso";
import { ContentCard } from "../ContentCard";
import { CoursePartners, CourseTitle, InfoWrapper, TextWrapper, Thumbnail, Wrapper } from "./styles";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "../StarRating";

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
        <InfoWrapper>
          <FontAwesomeIcon icon={faUserGroup} />
          <p>{curso.matriculados}</p>
          <FontAwesomeIcon icon={faClock} />
          <p>{curso.duracao}</p>
          <StarRating rating={curso.avaliacao}/>


        </InfoWrapper>
      </Wrapper>
    </ContentCard>
  )
}
