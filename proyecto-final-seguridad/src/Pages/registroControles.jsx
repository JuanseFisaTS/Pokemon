import React from 'react';
import '../Styles/RegistroActivos.css';
import { Link } from 'react-router-dom';

const registroControles = () => {
  return (
    <div className="asset-registration-form">
      <h1 className="form-title">Registro de Controles</h1>
      <div className="form-group">
        <label htmlFor="name">Número de Control:</label>
        <input type="text" id="name" />
      </div>
      
      <div className="form-group">
        <label htmlFor="name">Nombre del control:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="category-dropdown">Tipo de control:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar Tipo</option>
          <option value="category1">Información</option>
          <option value="category2">Logística</option>
          <option value="category3">Entorno</option>
          <option value="category3">Accesos</option>
          <option value="category3">Hardware</option>
          <option value="category3">Legal</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Tipos de riesgo que representa:</label>
        <input type="text" id="description" />
      </div>
    
      <div className="form-group">
        <label htmlFor="process-dropdown">Clasificación del riesgo:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Clasificación</option>
          <option value="process1">Alto</option>
          <option value="process2">Medio</option>
          <option value="process3">Bajo</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="category-dropdown">Relevancia:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar Relevancia</option>
          <option value="category1"> 1</option>
          <option value="category2"> 2</option>
          <option value="category3"> 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="classification-dropdown">Diseño:</label>
        <select id="classification-dropdown">
          <option value="">Seleccionar Diseño</option>
          <option value="classification1">1</option>
          <option value="classification2">2</option>
          <option value="classification3">3</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="integrity-dropdown">Trazabilidad:</label>
        <select id="integrity-dropdown">
          <option value="">Seleccionar integridad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      
      
      <Link to="/Controles"> 
      <button className="form-button">Enviar</button>
      </Link>
    </div>
  );
};

export default registroControles;
