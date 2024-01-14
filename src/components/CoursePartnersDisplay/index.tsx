import { useScreen } from "../../contexts/ScreenSizeContext";
import { Curso } from "../../types/curso"
import { ImageWithSpinner } from "../ImageWithSpinner";
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
        {curso.creditos.map(partner=> <ImageWithSpinner width={"240px"}  height={"auto"} src={partner.capa} title={partner.titulo} isImageContain={true}/>)}
      </PartnerList>
      :
      <PartnerGrid>
        {curso.creditos.map(partner=> <ImageWithSpinner width={"200px"}  height={"auto"} src={partner.capa} title={partner.titulo} isImageContain={true}/>)}
      </PartnerGrid>
      }
    </Container>
    
  )
}