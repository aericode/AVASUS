import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Curso } from "../../types/curso";
import { StarRating } from "../StarRating";
import { Container, ImageWrapper, CourseImage, Title, Partners, IconLabel, ResumeText, IconSectionWrapper, SectionContainer, DataSectionWrapper, CourseLink, CourseLinkWrapper } from "./styles";
import { StyledIcon } from "../StyledIcon";
import { addDotsToNumber } from "../../utils/addDotsToNumber";

interface CourseCardProps {
  curso?: Curso
}

export function CourseCard({ curso }: CourseCardProps) {

  return (
    <Container>
      <ImageWrapper>
        <CourseImage src={curso?.capa || ''} />
      </ImageWrapper>
      <DataSectionWrapper>


        <Title>{curso && curso.titulo}</Title>
        <Partners>{curso && curso.parceiros}</Partners>
        <IconSectionWrapper>
          <SectionContainer>
            <SectionContainer>
              <StyledIcon icon={faUserGroup} iconSize={19} />
              <IconLabel>{curso && addDotsToNumber(curso.matriculados)}</IconLabel>
            </SectionContainer>

            <SectionContainer>
              <StyledIcon icon={faClock} iconSize={19} />
              <IconLabel>{curso && curso.duracao}</IconLabel>
            </SectionContainer>
          </SectionContainer>


          <StarRating rating={curso?.avaliacao || '0'} fontSize={13} />
        </IconSectionWrapper>
        <ResumeText>{curso && curso.resumo}</ResumeText>
        <CourseLinkWrapper>
          <CourseLink>Ver curso</CourseLink>
        </CourseLinkWrapper>
      </DataSectionWrapper>
    </Container>
  )
}