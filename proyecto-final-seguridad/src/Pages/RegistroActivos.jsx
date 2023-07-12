import React from 'react';
import '../Styles/RegistroActivos.css';
import { Link } from 'react-router-dom';

const RegistroActivos = () => {
  return (
    <div className="asset-registration-form">
      <h1 className="form-title">Registro de Activos</h1>
      <div className="form-group">
        <label htmlFor="name">Número de activo:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="process-dropdown">Proceso Macro:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Proceso Macro</option>
          <option value="process1">Servidores</option>
          <option value="process2">Investigación</option>
          <option value="process3">Software</option>
          <option value="process3">Propiedad Intelectual</option>
          <option value="process3">Legal</option>
          <option value="process3">Equipos</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="process-dropdown">Subproceso:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Subproceso</option>
          <option value="process1">Infraestructura</option>
          <option value="process2">Accesos</option>
          <option value="process3">Operativos</option>
          <option value="process3">Nuevas tecnologías</option>
          <option value="process3">Programas</option>
          <option value="process3">Data</option>
          <option value="process3">Seguridad</option>
          <option value="process3">Administración</option>
          <option value="process3">Desarrollo</option>
          <option value="process3">Propiedad inmobiliaria</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="process-dropdown">Tipo de Activo:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Tipo</option>
          <option value="process1">Técnico</option>
          <option value="process2">Hardware</option>
          <option value="process3">Físico</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <input type="text" id="description" />
      </div>
    
      <div className="form-group">
        <label htmlFor="process-dropdown">Clasificación:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Clasificación</option>
          <option value="process1">Privado</option>
          <option value="process2">Sensible</option>
          <option value="process3">confidencial</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="category-dropdown">Confidencialidad:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar Confidencialidad</option>
          <option value="category1"> 1</option>
          <option value="category2"> 2</option>
          <option value="category3"> 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="classification-dropdown">Integridad:</label>
        <select id="classification-dropdown">
          <option value="">Seleccionar Integridad</option>
          <option value="classification1">1</option>
          <option value="classification2">2</option>
          <option value="classification3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="process-dropdown">Disponibilidad:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar Disponibilidad</option>
          <option value="process1">1</option>
          <option value="process2">2</option>
          <option value="process3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="availability-dropdown">Autenticidad:</label>
        <select id="availability-dropdown">
          <option value="">Seleccionar Autenticidad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
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
      <div className="form-group">
        <label htmlFor="confidentiality-dropdown">Criticidad:</label>
        <select id="confidentiality-dropdown">
          <option value="">Seleccionar Criticidad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="authenticity-dropdown">Complejidad:</label>
        <select id="authenticity-dropdown">
          <option value="">Seleccionar Complejidad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="risk-dropdown">Sensibilidad:</label>
        <select id="risk-dropdown">
          <option value="">Seleccionar Sensibilidad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      
      <Link to="/Activos"> 
      <button className="form-button">Enviar</button>
      </Link>
    </div>
  );
};

export default RegistroActivos;
