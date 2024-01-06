import Carousel from "react-multi-carousel";
import styled from "styled-components";

export const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover; 
`

export const StyledCarousel = styled(Carousel)`
  .carousel-container{
  }
  .react-multi-carousel-dot button {
    margin-bottom: 20px;
  }
`;