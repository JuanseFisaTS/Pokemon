import React from 'react';
import "../Styles/Index.css";
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="background-container">
      <div className="content">
        <h1>Sistema de Gestión de Activos</h1>
        <h2>Mantén control de todos tus activos</h2>
        <Link to="/InicioSesion">
        <button>Empezar ahora</button>
      </Link>
     
      </div>
    </div>
  );
};

export default Index;
