import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/Index';
import Navbar from './Components/Navbar';
import InicioSesion from './Pages/InicioSesion';
import RegistroActivos from './Pages/RegistroActivos';
import Activos from './Pages/Activos';
import Riesgos from './Pages/Riesgos';
import TablaRiesgos from './Pages/TablaRiesgos';
import RegistroControles from './Pages/registroControles';
import Controles from './Pages/Controles';
import Amenazas from './Pages/Amenazas';
import RegistroAmenazas from './Pages/RegistroAmenazas';
import Vulnerabilidades from './Pages/Vulnerabilidades';
import RegistroVulnerabilidads from './Pages/RegistroVulnerabilidades';
//import RegistroControles from './Pages/RegistroControles';







export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Navbar/>
       <div>
       <div>
         <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route exact path="/InicioSesion" element={<InicioSesion/>} />
        <Route exact path="/RegistroActivos" element={<RegistroActivos/>} />
        <Route exact path="/Activos" element={<Activos/>} />
        <Route exact path="/Riesgos" element={<Riesgos/>} />
        <Route exact path="/TablaRiesgos" element={<TablaRiesgos/>} />
        <Route exact path="/RegistroControles" element={<RegistroControles/>} />
        <Route exact path="/Controles" element={<Controles/>} />
        <Route exact path="/Amenazas" element={<Amenazas/>} />
        <Route exact path="/RegistroAmenazas" element={<RegistroAmenazas/>} />
        <Route exact path="/Vulnerabilidades" element={<Vulnerabilidades/>} />
        <Route exact path="/RegistroVulnerabioidades" element={<RegistroVulnerabilidads/>} />
        </Routes>
        </div>
      <div>
       
      </div>
      </div>
     </Router>
   );
  }
}





/*
 <Router>
        <Routes>
        <Route exact path="/" component={Main} />
       <Route path="/about" component={AboutPage} />
       </Routes>
      </Router>
*/