import 'react-multi-carousel/lib/styles.css';

import avasusBanner from '../../assets/banner/avasusBanner.png';
import { CarouselImage, StyledCarousel } from './styles';

export function ImageCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      partialVisibilityGutter: 0 
    }
  };

  return (
    <StyledCarousel
      responsive={responsive}
      partialVisible={true}
      containerClass="carousel-container"
      showDots={true}
      infinite={true}
    >
      <CarouselImage src={avasusBanner} alt="Image 1" />
      <CarouselImage src={avasusBanner} alt="Image 1" />
      <CarouselImage src={avasusBanner} alt="Image 1" />
    </StyledCarousel>
  );
};