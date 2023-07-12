import React from 'react';
import '../Styles/RegistroActivos.css';
import { Link } from 'react-router-dom';

const RegistroAmenazas = () => {
  return (
    <div className="asset-registration-form">
      <h1 className="form-title">Registro de Amenazas</h1>
      <div className="form-group">
        <label htmlFor="name">Número de Amenaza:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="process-dropdown">/Origen de Amenaza:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Origen</option>
          <option value="process1">Externo</option>
          <option value="process2">Interno</option>
          <option value="process3">Externo/Interno</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="process-dropdown">/Naturaleza de Amenaza:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Naturaleza</option>
          <option value="process1">Tecnológica</option>
          <option value="process2">Humana</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category-dropdown">Impacto:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar Impacto</option>
          <option value="category1">Alto</option>
          <option value="category2">Medio</option>
          <option value="category3">Bajo</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="category-dropdown">Probabilidad:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar Probabilidad</option>
          <option value="category1">Alta</option>
          <option value="category2">Media</option>
          <option value="category3">Baja</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="name">Acciones de mitigación:</label>
        <input type="text" id="name" />
      </div>
      
      
      <Link to="/Amenazas"> 
      <button className="form-button">Enviar</button>
      </Link>
    </div>
  );
};

export default RegistroAmenazas;
