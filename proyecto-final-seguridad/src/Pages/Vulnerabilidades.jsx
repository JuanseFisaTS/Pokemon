import React, { useState } from 'react';
import '../Styles/Activos.css';
import { Link } from 'react-router-dom';

const Vulnerabilidades = () => {
  const [risks, setRisks] = useState([
    
    { id: '1', vulnerability: 'Configuraciones incorrectas en los dispositivos de red', affectedSystem: 'Sistema de red', nature: 'Tecnológica', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '2', vulnerability: 'Inyección de código SQL', affectedSystem: 'Aplicación web', nature: 'Tecnológica', potentialImpact: 'Medio', severity: 'Media' },
    { id: '3', vulnerability: 'Acceso no autorizado a áreas restringidas', affectedSystem: 'Acceso físico', nature: 'Física', potentialImpact: 'Bajo', severity: 'Baja' },
    { id: '4', vulnerability: 'Phishing', affectedSystem: 'Ingeniería social', nature: 'Humana', potentialImpact: 'Medio', severity: 'Media' },
    { id: '5', vulnerability: 'Falta de parches y actualizaciones de seguridad', affectedSystem: 'Sistema operativo', nature: 'Tecnológica', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '6', vulnerability: 'Puertos abiertos innecesariamente', affectedSystem: 'Firewall', nature: 'Tecnológica', potentialImpact: 'Medio', severity: 'Media' },
    { id: '7', vulnerability: 'Ataques de ransomware', affectedSystem: 'Malware', nature: 'Tecnológica', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '8', vulnerability: 'Uso de contraseñas cortas o predecibles', affectedSystem: 'Contraseña débil', nature: 'Tecnológica', potentialImpact: 'Bajo', severity: 'Media' },
    { id: '9', vulnerability: 'Falta de aplicación de actualizaciones de seguridad', affectedSystem: 'Vulnerabilidades sin parches', nature: 'Tecnológica', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '10', vulnerability: 'Brecha de seguridad física', affectedSystem: 'Vulnerabilidades en sistemas de control de acceso', nature: 'Física', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '11', vulnerability: 'Ataque de fuerza bruta', affectedSystem: 'Sistemas de autenticacion', nature: 'Tecnológica', potentialImpact: 'Medio', severity: 'Media' },
    { id: '12', vulnerability: 'Desactualización de software', affectedSystem: 'Falta de protección contra exploits conocidos', nature: 'Tecnológica', potentialImpact: 'Medio', severity: 'Media' },
    { id: '13', vulnerability: 'Intercepción de comunicaciones', affectedSystem: 'Bloqueo de señales', nature: 'Tecnológica', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '14', vulnerability: 'Inyección de código', affectedSystem: 'Inyección de comandos', nature: 'Tecnológica', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '15', vulnerability: 'Ataque de denegación de servicio', affectedSystem: 'Ataques de inundación de tráfico', nature: 'Tecnológica', potentialImpact: 'Alto', severity: 'Alta' },
    { id: '16', vulnerability: 'Ingeniería inversa', affectedSystem: 'Exposición de código fuente', nature: 'Tecnológica', potentialImpact: 'Medio', severity: 'Media' },

      
 
    // Resto de los datos de riesgos...
  ]);

  const handleDeleteRisk = (id) => {
    setRisks(risks.filter((risk) => risk.id !== id));
  };

  return (
    <div className="risk-table-container">
      <h1 className="section-title">Vulnerabilidades Registradas</h1>
      <table className="risk-table">
        <thead>
          <tr>
            <th>Número de Vulnerabilidad</th>
            <th>Nombre de Vulnerabilidad</th>
            <th>Sistema Afectado</th>
            <th>Naturaleza</th>
            <th>Impacto Potencial</th>
            <th>Gravedad</th>
           
           
          </tr>
        </thead>
        <tbody>
          {risks.map((risk) => (
            <tr key={risk.id}>
              <td>{risk.id}</td>
              <td>{risk.vulnerability}</td>
              <td>{risk.affectedSystem}</td>
              <td>{risk.nature}</td>

              <td>{risk.potentialImpact}</td>
              <td>{risk.severity}</td>
           
              
            
              <td>
                <button onClick={() => handleDeleteRisk(risk.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/RegistroVulnerabioidades"> 
      <button className="button">Agregar Vulnerabilidades</button>
      </Link>
    </div>
  );
};

export default Vulnerabilidades;
