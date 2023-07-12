import React, { useState } from 'react';
import '../Styles/Activos.css';
import { Link } from 'react-router-dom';

const Amenazas = () => {
  const [risks, setRisks] = useState([
    
        { id: '1', threat: 'Ataques de malware y virus informáticos', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Media', mitigationActions: '- Mantener un software antivirus actualizado y realizar escaneos regulares. - Implementar cortafuegos y soluciones de seguridad de red.' },
        { id: '2', threat: 'Ataques de ransomware', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Baja', mitigationActions: '- Realizar copias de seguridad periódicas de los datos críticos y almacenarlas fuera de línea. - Implementar medidas de seguridad para evitar la ejecución de archivos maliciosos.' },
        { id: '3', threat: 'Ataques de phishing', origin: 'Externo', nature: 'Humana', impact: 'Medio', probability: 'Media', mitigationActions: '- Capacitar a los usuarios en la identificación de correos electrónicos y enlaces sospechosos. - Implementar filtros antispam y sistemas de autenticación de dos factores.' },
        { id: '4', threat: 'Ataques de ingeniería social', origin: 'Externo o Interno', nature: 'Humana', impact: 'Medio', probability: 'Baja', mitigationActions: '- Establecer políticas y procedimientos de seguridad que aborden la ingeniería social. - Sensibilizar y educar a los empleados sobre las tácticas comunes de ingeniería social.' },
        { id: '5', threat: 'Ataques de denegación de servicio (DDoS)', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Media', mitigationActions: '- Implementar soluciones de mitigación de DDoS, como sistemas de detección y filtrado de tráfico anómalo. - Establecer planes de contingencia para mantener la operación en caso de ataque DDoS.' },
        { id: '6', threat: 'Vulnerabilidades en el software y sistemas operativos', origin: 'Interno o Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Alta', mitigationActions: '- Aplicar parches y actualizaciones de seguridad de forma regular. - Realizar análisis de vulnerabilidades y pruebas de penetración.' },
        { id: '7', threat: 'Robo o pérdida de dispositivos móviles', origin: 'Externo o Interno', nature: 'Física', impact: 'Medio', probability: 'Baja', mitigationActions: '- Implementar medidas de protección física, como el cifrado de datos y el bloqueo remoto de dispositivos perdidos o robados. - Realizar copias de seguridad y almacenar datos sensibles en servidores seguros.' },
        { id: '8', threat: 'Acceso no autorizado a través de credenciales comprometidas', origin: 'Externo o Interno', nature: 'Tecnológica', impact: 'Alto', probability: 'Baja', mitigationActions: '- Implementar políticas de contraseñas robustas y de cambio frecuente. - Utilizar autenticación multifactor para agregar una capa adicional de seguridad.' },
        { id: '9', threat: 'Ataques de fuerza bruta', origin: 'Externo', nature: 'Tecnológica', impact: 'Medio', probability: 'Media', mitigationActions: '- Implementar sistemas de bloqueo temporal después de intentos fallidos de inicio de sesión. - Utilizar software que detecte y bloquee los ataques de fuerza bruta.' },
        { id: '10', threat: 'Fallos en la seguridad de la red', origin: 'Externo o Interno', nature: 'Tecnológica', impact: 'Alto', probability: 'Media', mitigationActions: '- Configurar firewalls y routers correctamente para filtrar el tráfico no autorizado. - Implementar sistemas de detección de intrusiones y monitorear la red de forma regular.' },
        { id: '11', threat: 'Robo de datos durante su transmisión o almacenamiento', origin: 'Externo o Interno', nature: 'Tecnológica', impact: 'Alto', probability: 'Alta', mitigationActions: '- Utilizar cifrado para proteger los datos confidenciales en tránsito y en reposo. - Establecer protocolos seguros para transferencia y almacenamiento de datos.' },
        { id: '12', threat: 'Acceso no autorizado a través de conexiones no seguras', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Media', mitigationActions: '- Implementar conexiones seguras mediante el uso de protocolos de cifrado, como SSL/TLS. - Evitar el uso de redes Wi-Fi públicas no seguras para acceder a los sistemas de valoración de activos.' },
        { id: '13', threat: 'Ataques de suplantación de identidad (spoofing)', origin: 'Externo', nature: 'Tecnológica', impact: 'Medio', probability: 'Alta', mitigationActions: '- Implementar mecanismos de autenticación robustos, como autenticación de dos factores. - Educar a los usuarios para que verifiquen la identidad de los remitentes antes de compartir información confidencial.' },
        { id: '14', threat: 'Fallos en la seguridad física', origin: 'Interno o Externo', nature: 'Física', impact: 'Medio', probability: 'Baja', mitigationActions: '- Establecer controles de acceso físico, como tarjetas de identificación y sistemas de vigilancia. - Realizar auditorías periódicas de seguridad física y corregir las vulnerabilidades identificadas.' },
        { id: '15', threat: 'Errores humanos', origin: 'Interno', nature: 'Humana', impact: 'Medio', probability: 'Media', mitigationActions: '- Proporcionar capacitación y concienciación en seguridad a los empleados. - Implementar controles y verificaciones adicionales para mitigar el impacto de los errores humanos.' },
        { id: '16', threat: 'Ataques dirigidos específicamente a la valoración de activos', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Baja', mitigationActions: '- Implementar soluciones avanzadas de seguridad, como sistemas de detección de amenazas avanzadas. - Realizar evaluaciones periódicas de seguridad y auditorías externas.' },
        { id: '17', threat: 'Ataques de inyección de código malicioso', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Media', mitigationActions: '- Aplicar buenas prácticas de desarrollo seguro de software. - Validar y filtrar todas las entradas de datos para prevenir ataques de inyección.' },
  { id: '18', threat: 'Robo de información confidencial por intercepción', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Alta', mitigationActions: '- Utilizar protocolos seguros de comunicación, como el cifrado de extremo a extremo. - Monitorear y detectar actividad sospechosa en la red para identificar la intercepción de información.' },
  { id: '19', threat: 'Ataques de espionaje cibernético', origin: 'Externo', nature: 'Tecnológica', impact: 'Alto', probability: 'Media', mitigationActions: '- Implementar sistemas de prevención y detección de intrusiones. - Mantener la información clasificada y restringir el acceso a datos confidenciales.' },
  { id: '20', threat: 'Exposición de datos debido a configuraciones incorrectas', origin: 'Interno', nature: 'Tecnológica', impact: 'Medio', probability: 'Media', mitigationActions: '- Realizar auditorías regulares de configuración y seguridad. - Establecer y seguir buenas prácticas de configuración de sistemas y aplicaciones.' },

      
 
    // Resto de los datos de riesgos...
  ]);

  const handleDeleteRisk = (id) => {
    setRisks(risks.filter((risk) => risk.id !== id));
  };

  return (
    <div className="risk-table-container">
      <h1 className="section-title">Amenazas Registradas</h1>
      <table className="risk-table">
        <thead>
          <tr>
            <th>Número de Amenaza</th>
            <th>Nombre de Amenaza</th>
            <th>Origen</th>
            <th>Naturaleza</th>
            <th>Impacto</th>
            <th>Probabilidad</th>
            <th>Acciones de mitigación</th>
           
          </tr>
        </thead>
        <tbody>
          {risks.map((risk) => (
            <tr key={risk.id}>
              <td>{risk.id}</td>
              <td>{risk.threat}</td>
              <td>{risk.origin}</td>
              <td>{risk.nature}</td>

              <td>{risk.impact}</td>
              <td>{risk.probability}</td>
              <td>{risk.mitigationActions}</td>
              
            
              <td>
                <button onClick={() => handleDeleteRisk(risk.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to="/RegistroAmenazas"> 
      <button className="button">Agregar Amenazas</button>
      </Link>
    </div>
  );
};

export default Amenazas;
