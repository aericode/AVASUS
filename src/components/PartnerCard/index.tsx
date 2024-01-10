import { Parceiro } from "../../types/parceiro";
import { Container } from "./styles";

interface PartnerCardProps{
  parceiro?: Parceiro
}

export function PartnerCard({parceiro}:PartnerCardProps){
  
  return(
    <Container>
      <p>{parceiro && parceiro.capa || ''}</p>
      <p>{parceiro && parceiro.titulo || ''}</p>
    </Container>
  )
}