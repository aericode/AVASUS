import './App.css'
import './fonts.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { ImageCarousel } from './components/Carousel';
import { MainMenuEducationalModules } from './components/MainMenuEducationalModules';


function App() {

  return (
    <div className="App">
      <Navbar />
      <>
        <ImageCarousel />
        <MainMenuEducationalModules/>

      </>
      <Footer />
    </div>
  )
}

export default App
