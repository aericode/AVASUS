import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { Curso } from "../../types/curso";
import { BannerBreadcrumbCourseName, BannerBreadcrumbRoot, Container, CourseName, CourseText, IconLabel, Partners } from "./styles";

export function InformacoesCurso() {
  const { idParam } = useParams();
  const { cursosData } = useContext(DataContext)!;

  const [cursoID, setCursoID] = useState<number | undefined>()
  const [displayedCourse, setDisplayedCourse] = useState<Curso | undefined>()


  useEffect(() => {
    setCursoID(idParam ? parseInt(idParam, 10) : undefined)
  }, [idParam])

  useEffect(() => {
    cursoID && setDisplayedCourse(cursosData && cursosData[cursoID] || undefined)
  }, [cursosData, cursoID])

  return (
    <Container>
      <div>
        <BannerBreadcrumbRoot>Início / Cursos / Módulos / </BannerBreadcrumbRoot>
        <BannerBreadcrumbCourseName>
          {displayedCourse && displayedCourse?.titulo}
        </BannerBreadcrumbCourseName>
      </div>

      <CourseName>{displayedCourse && displayedCourse?.titulo}</CourseName>
      <Partners>{displayedCourse && displayedCourse?.parceiros}</Partners>

      <IconLabel>{displayedCourse && displayedCourse?.duracao}</IconLabel>
      <IconLabel>{displayedCourse && displayedCourse?.criado_em}</IconLabel>
      <IconLabel>{displayedCourse && displayedCourse?.matriculados}</IconLabel>
      <IconLabel>{displayedCourse && displayedCourse?.avaliacao}</IconLabel>

      <CourseText>{displayedCourse && displayedCourse?.objetivo_geral}</CourseText>
      <CourseText>{displayedCourse && displayedCourse?.objetivo_especifico}</CourseText>
      <CourseText>{displayedCourse && displayedCourse?.sobre}</CourseText>


    </Container>

  )
}