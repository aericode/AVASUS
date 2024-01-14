import { useContext, useEffect, useState } from "react";
import { FeaturedCourse } from "../FeaturedCourse";
import { ButtonContainer, Container, SeeMoreButton, SeeMoreButtonWrapper, StyledButton, StyledTitle } from "./styles";
import { DataContext } from "../../contexts/DataContext";
import { Curso } from "../../types/curso";
import { useScreen } from "../../contexts/ScreenSizeContext";

export function FeaturedCourseDisplay() {
  const { cursosData } = useContext(DataContext)!;
  const { isSmallScreen } = useScreen();
  const [selectedFilter, setSelectedFilter] = useState<"popular" | "rating" | "recent">("popular")


  useEffect(() => {
    let ratingFunction;
    switch (selectedFilter) {
      case "popular":
        ratingFunction = sortByEnrollment;
        break;
      case "rating":
        ratingFunction = sortByRating;
        break;
      case "recent":
        ratingFunction = sortByDate;
        break;
      default:
        ratingFunction = sortByEnrollment;
    }
    setDisplayedCourses(getDisplayedCourses(ratingFunction));
  }, [selectedFilter]);

  useEffect(() => {
    setDisplayedCourses(getDisplayedCourses(sortByEnrollment));
  }, [cursosData]);

  const sortByEnrollment = (a: Curso, b: Curso) => b.matriculados - a.matriculados
  const sortByRating = (a: Curso, b: Curso) => Number(b.avaliacao) - Number(a.avaliacao)
  const sortByDate = (a: Curso, b: Curso) => {
    const dateA = new Date(a.criado_em).getTime();
    const dateB = new Date(b.criado_em).getTime();
    return dateB - dateA;
  }

  function getDisplayedCourses(sortingFunction: (a: Curso, b: Curso) => number) {
    return cursosData ? cursosData.sort(sortingFunction).slice(0, 3) : [];
  }

  const [displayedCourses, setDisplayedCourses] = useState(getDisplayedCourses(sortByEnrollment))


  return (
    <Container>
      <StyledTitle>Módulos Educacionais</StyledTitle>
      <ButtonContainer isSmallScreen={isSmallScreen}>
        <StyledButton
          onClick={() => setSelectedFilter("popular")}
          isActive={selectedFilter === "popular"}
        >
          Mais Populares
        </StyledButton>
        <StyledButton
          onClick={() => setSelectedFilter("rating")}
          isActive={selectedFilter === "rating"}>
          Mais bem Avaliados
        </StyledButton>
        <StyledButton
          onClick={() => setSelectedFilter("recent")}
          isActive={selectedFilter === "recent"}>
          Mais Recentes
        </StyledButton>
      </ButtonContainer>
      {displayedCourses.map((curso, index) => (
        <FeaturedCourse key={index} curso={curso} />
      ))}
      <SeeMoreButtonWrapper>
        <SeeMoreButton href={'/cursos'}> Ver Mais </SeeMoreButton>
      </SeeMoreButtonWrapper>
    </Container>
  );
}