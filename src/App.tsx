import './App.css'
import './fonts.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { ImageCarousel } from './components/Carousel';
import { MainMenuEducationalModules } from './components/MainMenuEducationalModules';
import { MainMenuPartnersDisplay } from './components/MainMenuPartnersDisplay';


function App() {

  return (
    <div className="App">
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
