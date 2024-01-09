import './fonts.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { ImageCarousel } from './components/Carousel';
import { MainMenuEducationalModules } from './components/MainMenuEducationalModules';
import { MainMenuPartnersDisplay } from './components/MainMenuPartnersDisplay';


function App() {

  return (
    <div>
      <Navbar />
      <>
        <ImageCarousel />
        <MainMenuEducationalModules/>
        {/* <MainMenuPartnersDisplay/> */}

      </>
      <Footer />
    </div>
  )
}

export default App
