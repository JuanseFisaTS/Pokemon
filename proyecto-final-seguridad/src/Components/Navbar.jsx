import React, { useState } from "react";
import "../Styles/Navbar.css";
import icon from "../Images/ogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="left-section-navbar">
        <Link to="/">
          <img src={icon} alt="Icono" className="navbar-icon" />
        </Link>
        <Link to="/" className="navbar-title">Sistema de gestión de Activos</Link>
      </div>
      <div className="right-section-navbar">
        <div 
        className={`navbar-completa ${showMenu ? "active" : ""}`}
        >
             <li style={{ marginRight: '3vw' }}>
          <Link to="/Activos" className="navbar-title">Mis Activos</Link>
           
        </li>
        <li style={{ marginRight: '3vw' }}>
        <Link to="/RegistroActivos" className="navbar-title">Registrar Activos</Link>
        </li>
        <li style={{ marginRight: '3vw' }}>
        <Link to="/InicioSesion" className="navbar-title">Iniciar Sesión</Link>
        </li>
        <li style={{ marginRight: '3vw' }}>
        <Link to="/Riesgos" className="navbar-title">Agregar Riesgos</Link>
        </li>
        <li style={{ marginRight: '3vw' }}>
        <Link to="/TablaRiesgos" className="navbar-title">Ver mis  Riesgos</Link>
        </li>
          </div>


       
        <div
          className={`navbar-menu-toggle ${showMenu ? "active" : ""}`}
          onClick={handleMenuToggle}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-links ${showMenu ? "active" : ""}`}>
          <li>
            <a href={"Activos"} className="navbar-link">
              Mis activos
            </a>
          </li>
          <li>
            <a href={"InicioSesion"} className="navbar-link">
              Iniciar Sesión / Registro
            </a>
          </li>
          <li>
            <a href={"RegistroActivos"} className="navbar-link">
              Agregar Activos
            </a>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
