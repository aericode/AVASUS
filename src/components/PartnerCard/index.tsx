import { Parceiro } from "../../types/parceiro";
import { Container, ImageWrapper, PartnerImage } from "./styles";

interface PartnerCardProps {
  parceiro?: Parceiro
}

export function PartnerCard({ parceiro }: PartnerCardProps) {

  return (
    <Container>
      <ImageWrapper>
        <PartnerImage src={parceiro!.capa} />
      </ImageWrapper>
      <p>{parceiro && parceiro.titulo || ''}</p>
    </Container>
  )
}