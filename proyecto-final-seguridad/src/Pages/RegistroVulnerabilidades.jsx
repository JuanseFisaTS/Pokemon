import React from 'react';
import '../Styles/RegistroActivos.css';
import { Link } from 'react-router-dom';

const RegistroVulnerabilidads = () => {
  return (
    <div className="asset-registration-form">
      <h1 className="form-title">Registro de Vulnerabilidades</h1>
      <div className="form-group">
        <label htmlFor="name">Número de Vulnerabilidad:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Sistema Afectado:</label>
        <input type="text" id="name" />
      </div>

      <div className="form-group">
        <label htmlFor="process-dropdown">/Naturaleza de Vulnerabilidad:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Naturaleza</option>
          <option value="process1">Tecnológica</option>
          <option value="process2">Humana</option>
          <option value="process2">Física</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category-dropdown">Impacto Potencial:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar Impacto</option>
          <option value="category1">Alto</option>
          <option value="category2">Medio</option>
          <option value="category3">Bajo</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category-dropdown">Gravedad:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar Gravedad</option>
          <option value="category1">Alta</option>
          <option value="category2">Media</option>
          <option value="category3">Baja</option>
        </select>
      </div>

      
      <Link to="/Vulnerabilidades"> 
      <button className="form-button">Enviar</button>
      </Link>
    </div>
  );
};

export default RegistroVulnerabilidads;
