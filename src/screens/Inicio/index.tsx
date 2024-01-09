import { ImageCarousel } from '../../components/Carousel';
import { MainMenuEducationalModules } from '../../components/MainMenuEducationalModules';
import { MainMenuPartnersDisplay } from '../../components/MainMenuPartnersDisplay';
import { Container, ContentAligner } from './styles';


export function Inicio() {
  return (
    <Container>
      <ImageCarousel />
      <ContentAligner>

        <MainMenuEducationalModules />
        <MainMenuPartnersDisplay />
      </ContentAligner>
    </Container>
  );
}