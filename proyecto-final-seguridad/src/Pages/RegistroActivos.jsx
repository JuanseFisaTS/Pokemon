import React from 'react';
import '../Styles/RegistroActivos.css';
import { Link } from 'react-router-dom';

const RegistroActivos = () => {
  return (
    <div className="asset-registration-form">
      <h1 className="form-title">Registro de Activos</h1>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <input type="text" id="description" />
      </div>
      <div className="form-group">
        <label htmlFor="category">Categoría:</label>
        <input type="text" id="category" />
      </div>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" />
      </div>
      <div className="form-group">
        <label htmlFor="custodian">Custodio:</label>
        <input type="text" id="custodian" />
      </div>
      <div className="form-group">
        <label htmlFor="owner">Propietario:</label>
        <input type="text" id="owner" />
      </div>
      <div className="form-group">
        <label htmlFor="category-dropdown">Categoría:</label>
        <select id="category-dropdown">
          <option value="">Seleccionar categoría</option>
          <option value="category1">Categoría 1</option>
          <option value="category2">Categoría 2</option>
          <option value="category3">Categoría 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="classification-dropdown">Clasificación:</label>
        <select id="classification-dropdown">
          <option value="">Seleccionar clasificación</option>
          <option value="classification1">Clasificación 1</option>
          <option value="classification2">Clasificación 2</option>
          <option value="classification3">Clasificación 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="process-dropdown">Proceso:</label>
        <select id="process-dropdown">
          <option value="">Seleccionar proceso</option>
          <option value="process1">Proceso 1</option>
          <option value="process2">Proceso 2</option>
          <option value="process3">Proceso 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="availability-dropdown">Disponibilidad:</label>
        <select id="availability-dropdown">
          <option value="">Seleccionar disponibilidad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="integrity-dropdown">Integridad:</label>
        <select id="integrity-dropdown">
          <option value="">Seleccionar integridad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="confidentiality-dropdown">Confidencialidad:</label>
        <select id="confidentiality-dropdown">
          <option value="">Seleccionar confidencialidad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="authenticity-dropdown">Autenticidad:</label>
        <select id="authenticity-dropdown">
          <option value="">Seleccionar autenticidad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="risk-dropdown">Riesgo asociado:</label>
        <select id="risk-dropdown">
          <option value="">Seleccionar Riesgo</option>
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
