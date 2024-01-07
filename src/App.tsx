import './App.css'
import './fonts.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { ImageCarousel } from './components/Carousel';
import { MainMenuEducationalModules } from './components/MainMenuEducationalModules';


function App() {

  return (
    <>
      <Navbar />
      <>
        <ImageCarousel />
        {/* <MainMenuEducationalModules/> */}

      </>
      <Footer />
    </>
  )
}

export default App
