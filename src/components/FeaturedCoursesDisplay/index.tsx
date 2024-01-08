import { useContext, useState } from "react";
import { FeaturedCourse } from "../FeaturedCourse";
import { Container, StyledTitle } from "./styles";
import { DataContext } from "../../contexts/DataContext";
import { Curso } from "../../types/curso";

export function FeaturedCourseDisplay() {
  const { cursosData } = useContext(DataContext)!;
  
  const sortByEnrollment = (a: Curso, b: Curso) => b.matriculados - a.matriculados
  const sortByRating = (a: Curso, b: Curso) => Number(b.avaliacao) - Number(a.avaliacao)
  const sortByDate = (a: Curso, b: Curso) => {
    const dateA = new Date(a.criado_em).getTime();
    const dateB = new Date(b.criado_em).getTime();
    return dateB - dateA;
  }
  
  function getDisplayedCourses(sortingFunction : (a: Curso, b: Curso) => number){
    return cursosData ? cursosData.slice(0,3).sort(sortingFunction) : [];
  }

  const [displayedCourses, setDisplayedCourses] = useState(getDisplayedCourses(sortByEnrollment))

  
  return (
    <Container>
      <button onClick={() => setDisplayedCourses(getDisplayedCourses(sortByEnrollment))}>Sort by Enrollment</button>
      <button onClick={() => setDisplayedCourses(getDisplayedCourses(sortByRating))}>Sort by Rating</button>
      <button onClick={() => setDisplayedCourses(getDisplayedCourses(sortByDate))}>Show Recent</button>
      <StyledTitle>Módulos Educacionais</StyledTitle>
      {displayedCourses.map((curso, index) => (
        <FeaturedCourse key={index} curso={curso} />
      ))}
    </Container>
  );
}