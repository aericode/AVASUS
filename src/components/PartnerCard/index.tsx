import { Parceiro } from "../../types/parceiro";
import { Container, ImageWrapper, PartnerImage, PartnerName } from "./styles";

interface PartnerCardProps {
  parceiro?: Parceiro
}

export function PartnerCard({ parceiro }: PartnerCardProps) {

  return (
    <Container>
      <ImageWrapper>
        <PartnerImage src={parceiro!.capa} />
      </ImageWrapper>
      <PartnerName>{parceiro && parceiro.titulo || ''}</PartnerName>
    </Container>
  )
}