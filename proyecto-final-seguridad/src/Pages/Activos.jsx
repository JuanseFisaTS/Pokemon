import React from 'react';
import '../Styles/Activos.css'
const Activos = () => {
  return (
    <div className="asset-management">
      <h1 className="section-title">Activos propios</h1>
      <table className="asset-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Propietario</th>
            <th>Fecha de creación</th>
            <th>Última modificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizar filas de datos */}
        </tbody>
      </table>
      <h1 className="section-title">Activos custodiados</h1>
      <table className="asset-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Propietario</th>
            <th>Fecha de creación</th>
            <th>Última modificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizar filas de datos */}
        </tbody>
      </table>
      <div className="button-group">
        <button className="action-button">Agregar activo</button>
        <button className="action-button">Editar activo</button>
        <button className="action-button">Eliminar activo</button>
      </div>
    </div>
  );
};

export default Activos;
