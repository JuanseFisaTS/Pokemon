import React, { useState } from 'react';
import '../Styles/Activos.css';
import { Link } from 'react-router-dom';

const Activos = () => {
  const [risks, setRisks] = useState([
    { id: 'A1', category: 'Servidores', subcategory: 'Infraestructura', owner: 'Técnico', description: 'Servidores y sistemas de almacenamiento', information: 'Equipos físicos que contienen la información de la empresa', availability: 'Privado', probability: 2, impact: 3, confidentiality: 1, integrity: 2, authenticity: 2, availabilityLevel: 3, integrityLevel: 3, confidentialityLevel: 3, riskLevel: 2.25 },
    { id: 'A2', category: 'Servidores', subcategory: 'Accesos', owner: 'Administrativo', description: 'Información personal de clientes', information: 'La información que contiene datos personales de los clientes sean nombres, dirección, cédula, número, etc.', availability: 'Sensible', probability: 2, impact: 2, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 1, integrityLevel: 3, confidentialityLevel: 3, riskLevel: 1.88 },
    { id: 'A3', category: 'Servidores', subcategory: 'Accesos', owner: 'Administrativo', description: 'Información financiera de clientes', information: 'Información de datos financieros de los clientes que contiene las transacciones realizadas', availability: 'Privado', probability: 1, impact: 2, confidentiality: 2, integrity: 2, authenticity: 3, availabilityLevel: 2, integrityLevel: 1, confidentialityLevel: 1, riskLevel: 1.75 },
    { id: 'A4', category: 'Servidores', subcategory: 'Accesos', owner: 'Administrativo', description: 'Historial de compras y transacciones de clientes', information: 'El número y detalle de cada historial de compras y transacciones que realiza el cliente', availability: 'Sensible', probability: 1, impact: 2, confidentiality: 1, integrity: 1, authenticity: 3, availabilityLevel: 2, integrityLevel: 2, confidentialityLevel: 1, riskLevel: 1.63 },
    { id: 'A5', category: 'Servidores', subcategory: 'Accesos', owner: 'Administrativo', description: 'Información financiera y contable de la empresa', information: 'Datos de transacciones e información de la empresa relacionado a pagos, ventas y movimientos de dinero.', availability: 'Privado', probability: 1, impact: 2, confidentiality: 1, integrity: 1, authenticity: 3, availabilityLevel: 2, integrityLevel: 3, confidentialityLevel: 3, riskLevel: 2.00 },
    { id: 'A6', category: 'Servidores', subcategory: 'Operativos', owner: 'Técnico', description: 'Datos de registro y auditoría del sistema', information: 'Información de auditorías y revisiones realizadas a la empresa', availability: 'Confidencial', probability: 2, impact: 3, confidentiality: 3, integrity: 3, authenticity: 2, availabilityLevel: 2, integrityLevel: 2, confidentialityLevel: 2, riskLevel: 2.25 },
    { id: 'A7', category: 'Investigación', subcategory: 'Nuevas tecnologías', owner: 'Hardware', description: 'Nuevas tecnologías y técnicas de desarrollo', information: 'Investigaciones y procesos para generar innovaciones tecnológicas dentro de la empresa, es un activo importante para la mejora continua', availability: 'Privado', probability: 2, impact: 1, confidentiality: 2, integrity: 1, authenticity: 3, availabilityLevel: 1, integrityLevel: 3, confidentialityLevel: 1, riskLevel: 1.88 },
    { id: 'A8', category: 'Servidores', subcategory: 'Infraestructura', owner: 'Físico', description: 'Equipos de red y dispositivos de enrutamiento', information: 'Equipo físico que brinda conectividad a red, transferencia de datos y seguridad al internet y entre la empresa', availability: 'Privado', probability: 1, impact: 1, confidentiality: 2, integrity: 2, authenticity: 3, availabilityLevel: 3, integrityLevel: 2, confidentialityLevel: 2, riskLevel: 2.00 },
    { id: 'A9', category: 'Propiedad intelectual', subcategory: 'Programas', owner: 'Técnico', description: 'Herramientas de desarrollo web y licencias', information: 'Proyector utilizado en las aulas de clase para presentar material didáctico, realizar presentaciones y mostrar contenidos multimedia.', availability: 'Sensible', probability: 1, impact: 0, confidentiality: 1, integrity: 1, authenticity: 3, availabilityLevel: 2, integrityLevel: 2, confidentialityLevel: 2, riskLevel: 1.50 },
    { id: 'A10', category: 'Software', subcategory: 'Accesos', owner: 'Técnico', description: 'Código fuente del software desarrollado', information: 'Código base de los productos que desarrolla la empresa', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 2, integrityLevel: 1, confidentialityLevel: 2, riskLevel: 1.50 },
    { id: 'A11', category: 'Investigación', subcategory: 'Data', owner: 'Administrativo', description: 'Datos de información y desarrollo', information: 'Información recopilada encaminada a la investigación y mejora continua de la empresa', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 2, integrityLevel: 3, confidentialityLevel: 3, riskLevel: 1.88 },
    { id: 'A12', category: 'Software', subcategory: 'Seguridad', owner: 'Técnico', description: 'Firewall', information: 'Software de seguridad que protege los datos e información de la empresa', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 1, integrityLevel: 3, confidentialityLevel: 3, riskLevel: 1.75 },
    { id: 'A13', category: 'Software', subcategory: 'Administración', owner: 'Técnico', description: 'Software desarrollado', information: 'El programa utilizado en la empresa para la administración de activos y evaluación de sus riesgos', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 1, availabilityLevel: 1, integrityLevel: 2, confidentialityLevel: 1, riskLevel: 1.25 },
    { id: 'A14', category: 'Equipos', subcategory: 'Desarrollo', owner: 'Administrativo', description: 'Programadores', information: 'Los programadores son aquellos que desarrollan y actualizan el software de la empresa.', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 3, availabilityLevel: 3, integrityLevel: 2, confidentialityLevel: 2, riskLevel: 1.88 },
    { id: 'A15', category: 'Equipos', subcategory: 'Desarrollo', owner: 'Administrativo', description: 'Diseñadores', information: 'Los diseñadores de interfaz son aquellos que se aseguran que el aplicativo sea usable por los usuarios.', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 2, integrityLevel: 3, confidentialityLevel: 2, riskLevel: 1.75 },
    { id: 'A16', category: 'Software', subcategory: 'Infraestructura', owner: 'Hardware', description: 'Computadoras de desarrollo', information: 'Las computadoras con las que cuentan los programadores para el proceso de desarrollo', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 3, availabilityLevel: 2, integrityLevel: 1, confidentialityLevel: 2, riskLevel: 1.50 },
    { id: 'A17', category: 'Software', subcategory: 'Infraestructura', owner: 'Hardware', description: 'Portátiles de desarrollo', information: 'Las computadoras portátiles con las que los programadores realizan el proceso de desarrollo', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 1, availabilityLevel: 2, integrityLevel: 2, confidentialityLevel: 3, riskLevel: 1.63 },
    { id: 'A18', category: 'Legal', subcategory: 'Proceso legal', owner: 'Administrativo', description: 'Contratos con clientes', information: 'Contratos con los cuales se establecen las pautas para mantener relación con los clientes', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 2, integrityLevel: 3, confidentialityLevel: 2, riskLevel: 1.75 },
    { id: 'A19', category: 'Legal', subcategory: 'Empresa', owner: 'Administrativo', description: 'Marca de la empresa', information: 'El nombre con el que la empresa está registrada de manera legal bajo todos los permisos necesarios.', availability: 'Público', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 2, integrityLevel: 2, confidentialityLevel: 2, riskLevel: 1.63 },
    { id: 'A20', category: 'Equipos', subcategory: 'Propiedad inmobiliaria', owner: 'Físico', description: 'Oficinas', information: 'Propiedad física donde se ubica el centro de operaciones de la empresa.', availability: 'Privado', probability: 2, impact: 1, confidentiality: 1, integrity: 1, authenticity: 2, availabilityLevel: 2, integrityLevel: 2, confidentialityLevel: 2, riskLevel: 1.63 },
 
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
            <th>ID</th>
            <th>Categoría</th>
            <th>Subcategoría</th>
            <th>Propietario</th>
            <th>Descripción</th>
            <th>Información</th>
            <th>Disponibilidad</th>
            <th>Probabilidad</th>
            <th>Impacto</th>
            <th>Confidencialidad</th>
            <th>Integridad</th>
            <th>Autenticidad</th>
            <th>Nivel de Disponibilidad</th>
            <th>Nivel de Integridad</th>
            <th>Nivel de Confidencialidad</th>
            <th>Nivel de Riesgo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((risk) => (
            <tr key={risk.id}>
              <td>{risk.id}</td>
              <td>{risk.category}</td>
              <td>{risk.subcategory}</td>
              <td>{risk.owner}</td>
              <td>{risk.description}</td>
              <td>{risk.information}</td>
              <td>{risk.availability}</td>
              <td>{risk.probability}</td>
              <td>{risk.impact}</td>
              <td>{risk.confidentiality}</td>
              <td>{risk.integrity}</td>
              <td>{risk.authenticity}</td>
              <td>{risk.availabilityLevel}</td>
              <td>{risk.integrityLevel}</td>
              <td>{risk.confidentialityLevel}</td>
              <td>{risk.riskLevel}</td>
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

export default Activos;
