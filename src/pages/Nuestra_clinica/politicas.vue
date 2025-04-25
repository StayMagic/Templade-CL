<template>
  <div class="policy-page">
    <header class="policy-header">
      <div class="container">
        <h1>Política Tratamiento de Datos Personales</h1>
        <div class="header-decoration"></div>
      </div>
    </header>
    
    <div class="policy-container">
      <div class="policy-content">
        <div class="policy-section">
          <h2>Responsable del Tratamiento</h2>
          <div class="company-info">
            <div class="info-item">
              <span class="info-label">Entidad:</span>
              <span class="info-value">SOCIEDAD DE ESPECIALISTAS GIRARDOT S.A.S</span>
            </div>
            <div class="info-item">
              <span class="info-label">NIT:</span>
              <span class="info-value">890601210-9</span>
            </div>
            <div class="info-item">
              <span class="info-label">Dirección:</span>
              <span class="info-value">Calle 13 No. 10 – 49 Barrio San Miguel, Girardot (Cundinamarca)</span>
            </div>
          </div>
        </div>

        <div class="policy-section">
          <h2>Finalidades del Tratamiento</h2>
          <ul class="policy-list">
            <li>Contestar, gestionar y realizar seguimiento a solicitudes de agendas y PQRS.</li>
            <li>Almacenar y mantener control de información histórica o estadística.</li>
            <li>Cumplir con procedimientos administrativos y de auditoria.</li>
            <li>Comunicar acerca de los servicios de salud que ofrece la institución.</li>
            <li>Establecer comunicación vía telefónica, Whatsapp, SMS o correo electrónico con el propósito de gestionar las finalidades anteriormente descritas.</li>
          </ul>
        </div>

        <div class="policy-section">
          <h2>Derechos del Titular</h2>
          <p class="intro-text">Como titular de sus datos personales usted tiene derecho a:</p>
          <ul class="policy-list rights-list">
            <li><span class="number">1.</span> Acceder en forma gratuita a los datos proporcionados que hayan sido objeto de tratamiento.</li>
            <li><span class="number">2.</span> Conocer, actualizar y rectificar su información frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o a aquellos cuyo tratamiento esté prohibido o no haya sido autorizado.</li>
            <li><span class="number">3.</span> Solicitar prueba de la autorización otorgada.</li>
            <li><span class="number">4.</span> Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la normatividad vigente. Revocar la autorización y/o solicitar la supresión del dato, siempre que no exista un deber legal o contractual que impida eliminarlos.</li>
            <li><span class="number">5.</span> Abstenerse de responder las preguntas sobre datos sensibles.</li>
          </ul>
        </div>

        <div class="policy-section">
          <h2>No Autorización</h2>
          <div class="no-auth-box">
            <p>Si usted <strong>NO autoriza</strong> al tratamiento de sus datos personales de acuerdo a las finalidades anteriormente descritas puede presentar una solicitud escribiendo al correo electrónico:</p>
            <a href="mailto:segl@clinicadeespecialistasgirardot.com" class="email-link">segl@clinicadeespecialistasgirardot.com</a>
            <p class="note">Tenga en cuenta que dicha solicitud requerirá cumplir con lo descrito en el artículo 2.2.2.25.4.1 del Decreto 1074 de 2015 y en nuestra política de protección de datos.</p>
          </div>
        </div>
      </div>

      <div class="policy-document">
        <div class="document-container">
          <h3>Documento Completo</h3>
          <div class="document-frame">
            <iframe src="/src/assets/document/politica_tratamiento_datos_personales.pdf" frameborder="0"></iframe>
          </div>
          <a href="/src/assets/document/politica_tratamiento_datos_personales.pdf" target="_blank" class="download-btn">
            <span class="icon">📥</span>
            <span>Descargar documento completo</span>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
:root {
  --primary-color: #003366;
  --primary-light: #004c99;
  --secondary-color: #38b2ac;
  --text-color: #333;
  --text-light: #555;
  --bg-color: #f8f9fa;
  --white: #ffffff;
  --border-color: #e2e8f0;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --radius: 8px;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header Styles */
.policy-header {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 40px 0;
  text-align: center;
  position: relative;
}

.policy-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
}

.header-decoration {
  height: 5px;
  width: 80px;
  background-color: white;
  margin: 20px auto 0;
  border-radius: 3px;
}

/* Main Content Styles */
.policy-container {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 10px auto 60px;
  padding: 0 20px;
}

.policy-content {
  flex: 1;
  min-width: 600px;
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 40px;
}

.policy-document {
  flex: 0 0 350px;
}

.policy-section {
  margin-bottom: 40px;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.policy-section h2 {
  font-size: 1.5rem;
  color: black;
  margin-top: 0;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
}

.company-info {
  background-color: #f3f8fb;
  padding: 20px;
  border-radius: var(--radius);
  border-left: 4px solid black;
}

.info-item {
  margin-bottom: 10px;
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-label {
  font-weight: 600;
  margin-right: 8px;
}

/* Lists */
.policy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.policy-list li {
  position: relative;
  padding: 12px 0 12px 30px;
  border-bottom: 1px solid var(--border-color);
}

.policy-list li:last-child {
  border-bottom: none;
}

.policy-list li:before {
  content: "•";
  color: var(--secondary-color);
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  left: 0;
  top: 10px;
}

.rights-list li {
  padding-left: 40px;
}

.rights-list .number {
  position: absolute;
  left: 0;
  top: 12px;
  width: 28px;
  height: 28px;
  background-color: #003366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
}

.intro-text {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

/* No Auth Box */
.no-auth-box {
  background-color: #fff9f0;
  border: 1px solid #ffeacf;
  border-radius: var(--radius);
  padding: 20px;
}

.no-auth-box strong {
  color: black;
}

.email-link {
  display: block;
  text-align: center;
  color: var(--primary-color);
  font-weight: 600;
  padding: 15px 0;
  font-size: 1.1rem;
  text-decoration: underline;
}

.email-link:hover {
  color: var(--primary-light);
}

.note {
  font-size: 0.9rem;
  color: var(--text-light);
  margin-top: 15px;
  margin-bottom: 0;
}

/* Document Section */
.document-container {
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.document-container h3 {
  text-align: center;
  margin: 0;
  padding: 20px;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 1.3rem;
}

.document-frame {
  flex: 1;
  height: 500px;
}

.document-frame iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #003366;
  color: var(--white);
  text-decoration: none;
  padding: 15px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.download-btn:hover {
  background-color: white;
}

.download-btn .icon {
  margin-right: 8px;
  font-size: 1.2rem;
}

/* Footer */
.policy-footer {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 20px 0;
  text-align: center;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .policy-content {
    min-width: 0;
  }
}

@media (max-width: 768px) {
  .policy-header h1 {
    font-size: 2rem;
  }
  
  .policy-container {
    flex-direction: column;
    margin-top: -20px;
  }
  
  .policy-content, 
  .policy-document {
    flex: 1 1 100%;
  }
  
  .policy-content {
    padding: 30px 20px;
  }
  
  .document-frame {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .policy-header {
    padding: 30px 0;
  }
  
  .policy-header h1 {
    font-size: 1.8rem;
  }
  
  .policy-section h2 {
    font-size: 1.3rem;
  }
  
  .document-frame {
    height: 350px;
  }
}
</style>
