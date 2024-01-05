import './App.css'
import './fonts.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { ImageCarousel } from './components/Carousel';


function App() {

  return (
    <>
      <Navbar />
      <p style={{ height: '900px', backgroundColor: 'lightsalmon' }}>
        <ImageCarousel />

      </p>
      <Footer />
    </>
  )
}

export default App
