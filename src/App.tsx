import './fonts.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Inicio} from '../src/screens/Inicio';

function App() {

  return (
    <div>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </Router>
      <Footer />
    </div>
  )
}

export default App
