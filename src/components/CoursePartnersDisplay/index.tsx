import { useScreen } from "../../contexts/ScreenSizeContext";
import { Curso } from "../../types/curso"
import { Container, PartnerGrid, PartnerGridImage, PartnerList, PartnerListImage } from "./styles";

interface CoursePartnersDisplayProps{
  curso:Curso
}

export function CoursePartnersDisplay({curso}:CoursePartnersDisplayProps){
  const { isSmallScreen } = useScreen();

  return(
    <Container>
      {isSmallScreen ?
      <PartnerList>
        {curso.creditos.map(partner=> <PartnerListImage src={partner.capa} title={partner.titulo} />)}
      </PartnerList>
      :
      <PartnerGrid>
        {curso.creditos.map(partner=> <PartnerGridImage src={partner.capa} title={partner.titulo} />)}
      </PartnerGrid>
      }
    </Container>
    
  )
}