import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import logoLAIS from '../../assets/logo.png';

export function ImageCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40 // Adjust this value for partial visibility
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 30 // Adjust this value for partial visibility
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // Adjust this value for partial visibility
    }
  };

  return (
    <Carousel
      responsive={responsive}
      partialVisible={true} // Set this to true for partial visibility
      containerClass="carousel-container" // Optional CSS class for the carousel container
      showDots={true}
      infinite={true}
    >
      {/* Add your image components here */}
      <img src={logoLAIS} alt="Image 1" />
      <img src={logoLAIS} alt="Image 2" />
      <img src={logoLAIS} alt="Image 3" />
      {/* Add more images as needed */}
    </Carousel>
  );
};