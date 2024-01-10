import { Parceiro } from "../../types/parceiro";
import { Container } from "./styles";

interface PartnerCardProps{
  parceiro: Parceiro
}

export function PartnerCard({parceiro}:PartnerCardProps){
  return(
    <Container>
      <p>{parceiro.capa}</p>
      <p>{parceiro.titulo}</p>
    </Container>
  )
}