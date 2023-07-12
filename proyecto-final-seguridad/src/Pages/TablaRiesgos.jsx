import React, { useState } from 'react';
import '../Styles/TablaRiesgos.css';
import { Link } from 'react-router-dom';

const TablaRiesgos = () => {
    
  const [risks, setRisks] = useState([
    { id: 1, name: 'Pérdida de información confidencial', probability: 2, impact: 3, confidentiality: 'Baja', integrity: 'Alto', riskLevel: 2.5, availabilityLevel: 'Alto', action: 'Capacitaciones continuas, respaldos periódicamente' },
    { id: 2, name: 'Robo de información confidencial', probability: 1, impact: 3, confidentiality: 'Baja', integrity: 'Medio', riskLevel: 2, availabilityLevel: 'Medio', action: 'Capacitaciones contra la ingeniería social' },
    { id: 3, name: 'Violación de regulaciones y leyes de protección de datos', probability: 2, impact: 2, confidentiality: 'Baja', integrity: 'Alto', riskLevel: 2, availabilityLevel: 'Medio', action: 'Capacitación continua, actualizaciones a empleados (correos)' },
    { id: 4, name: 'Interrupción en el suministro de servicios', probability: 3, impact: 3, confidentiality: 'Alto', integrity: 'Medio', riskLevel: 3, availabilityLevel: 'Alto', action: 'Establecer horarios de mantenimiento a servidores' },
    { id: 5, name: 'Vencimiento de licencias o productos clave', probability: 1, impact: 1, confidentiality: 'Medio', integrity: 'Medio', riskLevel: 1, availabilityLevel: 'Bajo', action: 'Tener registro de fechas y presupuesto designado' },
    { id: 6, name: 'Obsolencia de tecnologías utilizadas en software', probability: 3, impact: 2, confidentiality: 'Alto', integrity: 'Medio', riskLevel: 2.5, availabilityLevel: 'Alto', action: 'Actualizaciones periódicas sobre vencimiento de tecnologías y programas' },
    { id: 7, name: 'Desastres naturales', probability: 3, impact: 3, confidentiality: 'Alto', integrity: 'Alto', riskLevel: 3, availabilityLevel: 'Alto', action: 'Infraestructura adecuada aprobada por reglamento, detectores de incendio, extintores, salidas de emergencia, sistemas de refrigeración, generadores de luz' },
    { id: 8, name: 'Robo de identidad', probability: 1, impact: 3, confidentiality: 'Bajo', integrity: 'Medio', riskLevel: 2, availabilityLevel: 'Medio', action: 'Capacitaciones contra la ingeniería social' },
    { id: 9, name: 'Daños a equipos de desarrollo', probability: 2, impact: 3, confidentiality: 'Medio', integrity: 'Alto', riskLevel: 2.5, availabilityLevel: 'Alto', action: 'Capacitación de buen uso de equipos, posicionamiento correcto de los equipos, mantenimiento correctivo y preventivo adecuado' },
    { id: 10, name: 'Robo de equipos', probability: 1, impact: 3, confidentiality: 'Bajo', integrity: '', riskLevel: 2, availabilityLevel: 'Medio', action: 'Sistemas de seguridad implementados (cámaras, detectores de movimiento, cerraduras)' },
    { id: 11, name: 'Mal manejo de datos por parte de proveedores', probability: 1, impact: 2, confidentiality: 'Bajo', integrity: '', riskLevel: 1.5, availabilityLevel: 'Medio', action: 'Normas y contratos establecidos, capacitaciones a proveedores' },
    { id: 12, name: 'Violación al reglamento de la empresa', probability: 1, impact: 1, confidentiality: 'Medio', integrity: '', riskLevel: 1, availabilityLevel: 'Bajo', action: 'Capacitaciones y manejo de buenas prácticas en la empresa' },
    { id: '15', name: 'Incapacidad para cumplir plazos', probability: 1, impact: 2, confidentiality: 'Bajo', integrity: 'Medio', riskLevel: 1.5, availabilityLevel: 'Medio', action: 'Establecimiento de metodologías enfocadas en la productividad, establecer plazos de manera adecuada' },
    { id: '16', name: 'Incapacidad para cumplir presupuestos', probability: 1, impact: 2, confidentiality: 'Bajo', integrity: 'Medio', riskLevel: 1.5, availabilityLevel: 'Medio', action: 'Establecer presupuestos' },
    { id: '17', name: 'Rotación de personal', probability: 2, impact: 3, confidentiality: 'Medio', integrity: 'Medio', riskLevel: 2.5, availabilityLevel: 'Alto', action: 'Realizar contratos bien establecidos, verificar la satisfacción del personal' },
    { id: '18', name: 'Fluctuación económica', probability: 2, impact: 3, confidentiality: 'Alto', integrity: 'Medio', riskLevel: 2.5, availabilityLevel: 'Alto', action: 'Mantener presupuesto de emergencia y actualizaciones constantes de la situación económica del país' },
    { id: '19', name: 'Cambios en leyes y regulaciones', probability: 1, impact: 2, confidentiality: 'Medio', integrity: 'Alto', riskLevel: 1.5, availabilityLevel: 'Medio', action: 'Establecer metodología ante cambios en leyes del país' },
    { id: '20', name: 'Fallos en control de calidad', probability: 1, impact: 2, confidentiality: 'Bajo', integrity: 'Alto', riskLevel: 1.5, availabilityLevel: 'Medio', action: 'Mejoramiento y capacitación continua al equipo de control de calidad' },
  ]);
  
  const handleDeleteRisk = (id) => {
    setRisks(risks.filter((risk) => risk.id !== id));
  };

  return (
    <div className="risk-table-container">
      <h1 className="section-title">Riesgos Registrados</h1>
      <table className="risk-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Probabilidad</th>
            <th>Impacto</th>
            <th>Confidencialidad</th>
            <th>Integridad</th>
            <th>Nivel de riesgo</th>
            
            <th>Acciones</th>
            <th>Eliminar Riesgo</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((risk) => (
            <tr key={risk.id}>
              <td>{risk.id}</td>
              <td>{risk.name}</td>
              <td>{risk.probability}</td>
              <td>{risk.impact}</td>
              <td>{risk.confidentiality}</td>
              <td>{risk.integrity}</td>
              <td>{risk.riskLevel}</td>
            
              <td>{risk.action}</td>
              <td>
                <button onClick={() => handleDeleteRisk(risk.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/Riesgos"> 
      <button className="button">Agregar Riesgos</button>
      </Link>
    </div>
  );
};

export default TablaRiesgos;
