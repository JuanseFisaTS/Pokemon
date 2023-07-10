import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/Index';
import Navbar from './Components/Navbar';
import InicioSesion from './Pages/InicioSesion';
import RegistroActivos from './Pages/RegistroActivos';
import Activos from './Pages/Activos';






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