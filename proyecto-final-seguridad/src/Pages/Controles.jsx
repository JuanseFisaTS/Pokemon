import React, { useState } from 'react';
import '../Styles/Activos.css';
import { Link } from 'react-router-dom';

const Controles = () => {
  const [risks, setRisks] = useState([
    { id: '1', category: 'Capacitacione continuas', subcategory: 'Información', description: 'Robo de información, filtraciones, fuga de información', availability: 'Alto', probability: 3, impact: 3, relevance: 1, design: 2.33 },
    { id: '2', category: 'Charlas', subcategory: 'Información', description: 'Robo de información, filtraciones, fuga de información', availability: 'Alto', probability: 2, impact: 3, relevance: 1, design: 2.00 },
    { id: '3', category: 'Actualizaciones via mail', subcategory: 'Información', description: 'Robo de información, filtraciones, fuga de información', availability: 'Alto', probability: 2, impact: 3, relevance: 2, design: 2.33 },
    { id: '4', category: 'Mantenimientos', subcategory: 'Hardware', description: 'Servicios, fallos en hardware, daños', availability: 'Alto', probability: 3, impact: 3, relevance: 3, design: 3.00 },
    { id: '5', category: 'Presupuestos', subcategory: 'Logística', description: 'Incapacidad de cumplimientos, cambios en la economía', availability: 'Medio', probability: 2, impact: 3, relevance: 1, design: 2.00 },
    { id: '6', category: 'Seguimiento de licencias', subcategory: 'Logística', description: 'Problemas de software, software caducado', availability: 'Medio', probability: 2, impact: 3, relevance: 1, design: 2.00 },
    { id: '7', category: 'Estándares de infraestructura', subcategory: 'Entorno', description: 'Entorno', availability: 'Alto', probability: 3, impact: 3, relevance: 3, design: 3.00 },
    { id: '8', category: 'Sistemas de seguridad', subcategory: 'Accesos', description: 'Robo de información, Robo de hardware', availability: 'Alto', probability: 2, impact: 2, relevance: 3, design: 2.33 },
    { id: '9', category: 'Biométrico', subcategory: 'Accesos', description: 'Robo de información, Robo de hardware', availability: 'Alto', probability: 2, impact: 1, relevance: 2, design: 1.67 },
    { id: '10', category: 'Configuraciones', subcategory: 'Hardware', description: 'Fallos en hardware', availability: 'Bajo', probability: 2, impact: 2, relevance: 3, design: 2.33 },
    { id: '11', category: 'Contratos bien establecidos', subcategory: 'Legal', description: 'Movilización de empleados, incumplimientos legales', availability: 'Medio', probability: 2, impact: 3, relevance: 2, design: 2.33 },
    { id: '12', category: 'Encuestas de satisfaccion (trabajadores)', subcategory: 'Información', description: 'Movilización de empleados', availability: 'Medio', probability: 2, impact: 2, relevance: 1, design: 1.67 },
    { id: '13', category: 'Encuestas de satisfaccion (clientes)', subcategory: 'Información', description: 'Perdida de clientes', availability: 'Alto', probability: 2, impact: 3, relevance: 3, design: 2.67 },
    { id: '14', category: 'Capacitaciones de calidad', subcategory: 'Información', description: 'Fallos en calidad de productos', availability: 'Medio', probability: 2, impact: 3, relevance: 3, design: 2.67 },
    { id: '15', category: 'Metodología ante cambios en leyes', subcategory: 'Legal', description: 'Cambios del país', availability: 'Alto', probability: 2, impact: 2, relevance: 3, design: 2.33 },
    { id: '16', category: 'Plazos de tiempo', subcategory: 'Logística', description: 'Incapacidad de cumplimientos', availability: 'Medio', probability: 2, impact: 1, relevance: 3, design: 2.00 },
 
    // Resto de los datos de riesgos...
  ]);

  const handleDeleteRisk = (id) => {
    setRisks(risks.filter((risk) => risk.id !== id));
  };

  return (
    <div className="risk-table-container">
      <h1 className="section-title">Activos Registrados</h1>
      <table className="risk-table">
        <thead>
          <tr>
            <th>Número de Control</th>
            <th>Nombre de Control</th>
            <th>Tipo de Control</th>
            <th>Tipo de Riesgo</th>
            <th>Clasificación del riesgo</th>
            <th>Relevancia</th>
            <th>Diseño</th>
            <th>Trazabilidad</th>
            <th>Calificación (promedio)</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((risk) => (
            <tr key={risk.id}>
              <td>{risk.id}</td>
              <td>{risk.category}</td>
              <td>{risk.subcategory}</td>
              <td>{risk.description}</td>

              <td>{risk.availability}</td>
              <td>{risk.probability}</td>
              <td>{risk.impact}</td>
              <td>{risk.relevance}</td>
              <td>{risk.design}</td>
            
              <td>
                <button onClick={() => handleDeleteRisk(risk.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/RegistroControles"> 
      <button className="button">Agregar Controles</button>
      </Link>
    </div>
  );
};

export default Controles;
