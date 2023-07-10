import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/InicioSesion.css"

const InicioSesion = () => {
  return (
    <div className="login-form">
      <h1 className="form-title">Formulario</h1>
      <h2 className="form-subtitle">Iniciar sesión</h2>
      <div className="form-group">
        <label htmlFor="username">Usuario:</label>
        <input type="text" id="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" />
      </div>
      <h2 className="form-subtitle">Crear cuenta</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="new-username">Usuario:</label>
        <input type="text" id="new-username" />
      </div>
      <div className="form-group">
        <label htmlFor="new-password">Contraseña:</label>
        <input type="password" id="new-password" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Teléfono:</label>
        <input type="text" id="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="department">Departamento:</label>
        <select id="department">
          <option value="">Seleccionar departamento</option>
          <option value="marketing">Marketing</option>
          <option value="sales">Ventas</option>
          <option value="hr">Recursos Humanos</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="role">Rol:</label>
        <select id="role">
          <option value="">Seleccionar rol</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
        </select>
      </div>
    <Link to="/RegistroActivos">
      <button className="form-button">Enviar</button>
      </Link>
    </div>
  );
};

export default InicioSesion;
