<template>
   <header class="about-header">
      <div class="container">
        <h1>Politica Tratamiento de Datos Personales</h1>
      </div>
    </header>
  <div class="politicas-container">
    <div class="content-container">
      <div class="texto-politicas">
        <p>
          La SOCIEDAD DE ESPECIALISTAS GIRARDOT S.A.S identificada con NIT 890601210-9 ubicada en la Calle 13 No. 10 – 49 Barrio San Miguel en la ciudad de Girardot (Cundinamarca) será responsable del tratamiento, almacenamiento y uso de su información personal para las siguientes finalidades: 
          <br><br>
          • Contestar, gestionar y realizar seguimiento a solicitudes de agendas y PQRS. <br>
          • Almacenar y mantener control de información histórica o estadística. <br>
          • Cumplir con procedimientos administrativos y de auditoria. <br>
          • Comunicar acerca de los servicios de salud que ofrece la institución. <br>
          • Establecer comunicación vía telefónica, Whatsapp, SMS o correo electrónico con el propósito de gestionar las finalidades anteriormente descritas.
          <br><br>
          Adicionalmente se le informa que como titular de sus datos personales usted tiene derecho a: 
          <br><br>
          • (I) Acceder en forma gratuita a los datos proporcionados que hayan sido objeto de tratamiento. <br>
          • (II) Conocer, actualizar y rectificar su información frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o a aquellos cuyo tratamiento esté prohibido o no haya sido autorizado. <br>
          • (III) Solicitar prueba de la autorización otorgada. <br>
          • (IV) Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la normatividad vigente. Revocar la autorización y/o solicitar la supresión del dato, siempre que no exista un deber legal o contractual que impida eliminarlos. <br>
          • (V) Abstenerse de responder las preguntas sobre datos sensibles.
          <br><br>
          Si usted NO autoriza al tratamiento de sus datos personales de acuerdo a las finalidades anteriormente descritas puede presentar una solicitud escribiendo al correo electrónico <a href="mailto:segl@clinicadeespecialistasgirardot.com">segl@clinicadeespecialistasgirardot.com</a>. Tenga en cuenta que dicha solicitud requerirá cumplir con lo descrito en el artículo 2.2.2.25.4.1 del Decreto 1074 de 2015 y en nuestra política de protección de datos la cual se encuentra publicada a continuación.
        </p>
      </div>


      <div class="documentos-list">
        <div class="documento-card" v-for="(pdf, index) in documentos" :key="index">
          <iframe :src="pdf.url" width="100%" height="100%" frameborder="0"></iframe>


          <div class="open-document-link">
            <a :href="pdf.url" target="_blank" class="open-link">Abrir documento</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentos: [
        { 
          url: '/src/assets/document/politica_tratamiento_datos_personales.pdf' 
        },
      ]
    };
  }
};
</script>

<style scoped>
.politicas-container {
  padding: 40px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.about-header {
  text-align: center;
  margin-bottom: 40px;
}

.about-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.about-header .subtitle {
  font-size: 1.2rem;
  color: #6c757d;
}

.content-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
}

.texto-politicas {
  flex: 1;
  max-width: 60%;
}

.texto-politicas p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 20px;
}

.texto-politicas ul {
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.texto-politicas ul li {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 10px;
}

.texto-politicas a {
  color: #003366;
  text-decoration: underline;
}

.texto-politicas a:hover {
  color: #002244;
}

.documentos-list {
  flex: 1;
  max-width: 40%;
}

.documento-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.documento-card iframe {
  width: 100%;
  height: 400px;
  border: none;
}

.open-document-link {
  text-align: center;
  padding: 15px;
  background-color: #f8f9fa;
}

.open-link {
  font-size: 1rem;
  color: #003366;
  text-decoration: none;
  font-weight: 500;
}

.open-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
  }

  .texto-politicas,
  .documentos-list {
    max-width: 100%;
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .about-header .subtitle {
    font-size: 1rem;
  }

  .documento-card iframe {
    height: 300px;
  }
}
</style>
