import { useContext } from "react";
import { FeaturedCourse } from "../FeaturedCourse";
import { Container, StyledTitle } from "./styles";
import { DataContext } from "../../contexts/DataContext";

export function FeaturedCourseDisplay() {
  const { cursosData } = useContext(DataContext)!;

  return (
    <Container>
      <StyledTitle>Módulos Educacionais</StyledTitle>
      {cursosData &&
        <>
          <FeaturedCourse curso={cursosData[0]} />
          <FeaturedCourse curso={cursosData[1]} />          
          <FeaturedCourse curso={cursosData[2]} />

        </>
      }
      {/* <p>{cursosData && Number(cursosData[2].avaliacao) + 2}</p> */}
    </Container>
  )
}
