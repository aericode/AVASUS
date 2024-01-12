import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";
import { Curso } from "../../types/curso";
import { BannerBreadcrumbCourseName, BannerBreadcrumbRoot, BannerImage, BannerImageContainer, BannerOverlay, BannerTextWrapper, Container, CourseName, CourseText, CourseTextHeader, IconBlock, IconLabel, InfoHeader, Partners, SectionName, Wrapper } from "./styles";
import { ResponsiveFlexWrapper } from "../../components/ResponsiveFlexWrapper";
import { StyledIcon } from "../../components/StyledIcon";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "../../components/StarRating";
import { addDotsToNumber } from "../../utils/addDotsToNumber";

export function VerCurso() {
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
      <BannerImageContainer>
        <BannerImage src={displayedCourse && displayedCourse?.capa} />


      </BannerImageContainer>
      <BannerOverlay>
        <BannerTextWrapper>
          <div>
            <BannerBreadcrumbRoot>Início / Cursos / Módulos / </BannerBreadcrumbRoot>
            <BannerBreadcrumbCourseName>
              {displayedCourse && displayedCourse?.titulo}
            </BannerBreadcrumbCourseName>
          </div>
          <CourseName>{displayedCourse && displayedCourse?.titulo}</CourseName>
          <Partners>{displayedCourse && displayedCourse?.parceiros}</Partners>
        </BannerTextWrapper>
      </BannerOverlay>

      <Wrapper>
        <SectionName>Informações Gerais do Curso</SectionName>
        <ResponsiveFlexWrapper>
          <IconBlock>
            <StyledIcon icon={faUserGroup} iconSize={25} />
            <IconLabel>{displayedCourse && displayedCourse?.duracao}</IconLabel>
          </IconBlock>

          <IconBlock>
            <StyledIcon icon={faUserGroup} iconSize={25} />
            <IconLabel>Desde {displayedCourse && displayedCourse?.criado_em}</IconLabel>
          </IconBlock>


          <IconBlock>
            <StyledIcon icon={faUserGroup} iconSize={25} />
            <IconLabel>{displayedCourse && addDotsToNumber(displayedCourse?.matriculados)} alunos matriculados</IconLabel>
          </IconBlock>

          <IconBlock>
            <StarRating
              rating={displayedCourse && displayedCourse?.avaliacao || '0'}
              fontSize={20}
              isBold
            />
            <IconLabel>({displayedCourse && addDotsToNumber(displayedCourse?.numero_avaliacoes)} avaliações)</IconLabel>
          </IconBlock>
        </ResponsiveFlexWrapper>


        <InfoHeader>Sobre o Curso</InfoHeader>
        <CourseText>{displayedCourse && displayedCourse?.sobre}</CourseText>

        {
          displayedCourse && (displayedCourse.objetivo_geral || displayedCourse.objetivo_especifico) &&
          (
            <>
              <InfoHeader>Objetivos</InfoHeader>
              {displayedCourse.objetivo_geral &&
                <>
                  <CourseTextHeader>Objetivos Gerais</CourseTextHeader>
                  <CourseText>{displayedCourse?.objetivo_geral}</CourseText>
                </>
              }
              {displayedCourse.objetivo_especifico &&
                <>
                  <CourseTextHeader>Objetivos Específicos</CourseTextHeader>
                  <CourseText>{displayedCourse?.objetivo_especifico}</CourseText>
                </>
              }
            </>
          )
        }
        {displayedCourse && displayedCourse.recursos_educacionais &&
          <InfoHeader>Recursos educacionais</InfoHeader>}
        <CourseText>{displayedCourse && displayedCourse?.recursos_educacionais}</CourseText>
      </Wrapper>

    </Container>

  )
}