import Carousel from "react-multi-carousel";
import styled from "styled-components";

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  min-height: 400px;
  max-height: 940px;
`

export const StyledCarousel = styled(Carousel)`
  .react-multi-carousel-dot button {
    margin-bottom: 20px;
  }
`;