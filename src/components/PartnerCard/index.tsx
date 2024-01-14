import { Parceiro } from "../../types/parceiro";
import { ImageWithSpinner } from "../ImageWithSpinner";
import { Container, ImageWrapper, PartnerImage, PartnerName } from "./styles";

interface PartnerCardProps {
  parceiro?: Parceiro
}

export function PartnerCard({ parceiro }: PartnerCardProps) {

  return (
    <Container>
      <ImageWrapper>
        <ImageWithSpinner src={parceiro?.capa || ''} width={'100%'} height={'auto'} isImageContain={true}/>
      </ImageWrapper>
      <PartnerName>{parceiro && parceiro.titulo || ''}</PartnerName>
    </Container>
  )
}