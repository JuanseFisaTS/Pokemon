import React from 'react';
import  '../Styles/Riesgos.css';
import { Link } from 'react-router-dom';

const Riesgos = () => {
  return (
    <div className="risk-assessment-form">
      <h1 className="form-title">Formulario de Evaluación de Riesgos</h1>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        
      </div>
      <div className="form-group">
        <label htmlFor="probability">Probabilidad:</label>
        <select id="probability">
          <option value="">Seleccionar probabilidad</option>
          <option value="1">Baja</option>
          <option value="2">Media</option>
          <option value="3">Alta</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="impact">Impacto:</label>
        <select id="impact">
          <option value="">Seleccionar impacto</option>
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="impact">Confidencialidad:</label>
        <select id="impact">
          <option value="">Seleccionar Confidencialidad</option>
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="impact">Integridad:</label>
        <select id="impact">
          <option value="">Seleccionar Integridad</option>
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="impact">Disponibilidad:</label>
        <select id="impact">
          <option value="">Seleccionar Disponibilidad</option>
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="risk-level">Nivel de Riesgo:</label>
        <select id="risk-level">
          <option value="">Seleccionar nivel de riesgo</option>
          <option value="1">Bajo</option>
          <option value="2">Medio</option>
          <option value="3">Alto</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="policies">Políticas y Procedimientos de Acción:</label>
        <textarea id="policies" rows="4"></textarea>
      </div>
      <Link to="/TablaRiesgos"> 
      <button className="form-button">Enviar</button>
      </Link>
      
    </div>
  );
};

export default Riesgos;
/* <th>Confidencialidad</th>
            <th>Integridad</th>
            <th>Nivel de riesgo</th>
            <th>Disponibilidad</th>
            <th>Acciones</th>*/