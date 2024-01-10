import { Parceiro } from "../../types/parceiro";
import { Container, PartnerImage } from "./styles";

interface PartnerCardProps{
  parceiro?: Parceiro
}

export function PartnerCard({parceiro}:PartnerCardProps){
  
  return(
    <Container>
      <PartnerImage src={parceiro!.capa}/>
      <p>{parceiro && parceiro.titulo || ''}</p>
    </Container>
  )
}