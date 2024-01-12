import { Curso } from "../../types/curso";
import { Container, ImageWrapper, CourseImage, PartnerName } from "./styles";

interface CourseCardProps {
  curso?: Curso
}

export function CourseCard({ curso }: CourseCardProps) {

  return (
    <Container>
      <ImageWrapper>
        <CourseImage src={curso?.capa || ''} />
      </ImageWrapper>
      <p>{curso && curso.titulo}</p>
      <p>{curso && curso.parceiros}</p>
      <p>{curso && curso.matriculados}</p>


    </Container>
  )
}