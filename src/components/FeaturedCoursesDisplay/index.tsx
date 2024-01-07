import { useContext } from "react";
import { FeaturedCourse } from "../FeaturedCourse";
import { Container, StyledTitle } from "./styles";
import { DataContext } from "../../contexts/DataContext";

export function FeaturedCourseDisplay () {
  const {cursosData} = useContext(DataContext)!;

  return(
    <Container>
        <StyledTitle>Módulos Educacionais</StyledTitle>
        <p>{cursosData && cursosData[0].titulo}</p>
        <p>{cursosData && cursosData[1].titulo}</p>
        <p>{cursosData && cursosData[2].titulo}</p>
        <p>{cursosData &&  Number(cursosData[2].avaliacao) + 2}</p>
      <FeaturedCourse/>
    </Container>
  )
}
