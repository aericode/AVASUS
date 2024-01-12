import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { Curso } from "../../types/curso";
import { Container } from "./styles";

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
      <p>id do curso {cursoID}</p>
      <p>{displayedCourse && displayedCourse?.titulo}</p>
      <p>{displayedCourse && displayedCourse?.parceiros}</p>

      <p>{displayedCourse && displayedCourse?.duracao}</p>
      <p>{displayedCourse && displayedCourse?.criado_em}</p>
      <p>{displayedCourse && displayedCourse?.matriculados}</p>
      <p>{displayedCourse && displayedCourse?.avaliacao}</p>

      <p>{displayedCourse && displayedCourse?.sobre}</p>
      <p>{displayedCourse && displayedCourse?.objetivo_geral}</p>
      <p>{displayedCourse && displayedCourse?.objetivo_especifico}</p>


    </Container>

  )
}