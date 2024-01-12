import './fonts.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import {Inicio} from '../src/screens/Inicio';
import { Transparencia } from './screens/Transparencia';
import { Cursos } from './screens/Cursos';
import { Parceiros } from './screens/Parceiros';
import { InformacoesCurso } from './screens/InformacoesCurso';

function App() {

  return (
    <div>
      <Navbar />
      <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/informacoescurso/:idParam" element={<InformacoesCurso />} />
      </Routes>
    </Router>
      <Footer />
    </div>
  )
}

export default App
