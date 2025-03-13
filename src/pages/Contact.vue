<template>
  <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">CONTACTANOS</h1>
        <p class="header-description">Agradecemos su interés por comunicarse con la Clínica de Especialistas de Girardot. Estamos aquí para ayudarte.</p>
      </div>
    </header>
  <div class="contact">
    <div class="breadcrumb">
    </div>

    <section class="contact-details">
      <div class="container">
        <div class="details-grid">
          <div class="card">
            <i class="fa fa-map-marker"></i>
            <h3>Dirección</h3>
            <p>Calle 13 No. 10 - 49<br>Barrio San Miguel, Girardot</p>
          </div>
          <div class="card">
            <i class="fa fa-phone"></i>
            <h3>Teléfono</h3>
            <p>(1) 7943221</p>
          </div>
          <div class="card">
            <i class="fa fa-envelope"></i>
            <h3>Correo electrónico</h3>
            <p>segl@clinicadeespecialistas.com</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-schedule">
      <div class="container">
        <h2>Información importante</h2>
        <div class="schedule-grid">
          <div class="schedule-card">
            <h3>Agendar citas</h3>
            <p>
              Puedes agendar tu cita llamando a nuestro Contact Center al <strong>(1) 7943221</strong>
              o utilizando nuestro chat en línea.
            </p>
          </div>
          <div class="schedule-card">
            <h3>Horario de atención</h3>
            <ul>
              <li><strong>Área administrativa:</strong> Lunes a viernes, 7:00 a.m. - 3:00 p.m.</li>
              <li><strong>Consulta externa:</strong> Lunes a viernes, 6:00 a.m. - 6:00 p.m.</li>
              <li><strong>Urgencias:</strong> 24 horas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-map">
      <div class="container">
        <h2>Encuéntranos</h2>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335.11335127737505!2d-74.80840559965392!3d4.293558564845874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f28f26d4a85f5%3A0xaf80dfe4ac8f872!2sCl.%2013%20%231049%2C%20Girardot%2C%20Cundinamarca!5e1!3m2!1ses-419!2sco!4v1738328472354!5m2!1ses-419!2sco"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.contact {
  font-family: 'Arial', sans-serif;
}

.contact-header {
  background-color: #234b82;
  color: #fff;
  padding: 3rem 0;
  text-align: center;
}

.contact-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-header p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.contact-details,
.contact-schedule,
.contact-map {
  padding: 2rem 0;
  background-color: #f8fafc;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.details-grid,
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card i {
  font-size: 2.5rem;
  color: #234b82;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.card p {
  font-size: 1.1rem;
  color: #6b7280;
}

.schedule-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.schedule-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.schedule-card p,
.schedule-card ul {
  font-size: 1.1rem;
  color: #6b7280;
}

.schedule-card ul {
  list-style-type: none;
  padding-left: 0;
}

.schedule-card li {
  margin-bottom: 0.8rem;
}

.contact-map h2 {
  text-align: center;
  font-size: 2rem;
  color: #234b82;
  margin-bottom: 2rem;
}

.map-container iframe {
  width: 100%;
  height: 450px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.map-container iframe:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2.5rem;
  }

  .contact-header p {
    font-size: 1rem;
  }

  .contact-map h2 {
    font-size: 1.5rem;
  }

  .map-container iframe {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .contact-header h1 {
    font-size: 2rem;
  }

  .contact-header p {
    font-size: 1rem;
  }

  .map-container iframe {
    height: 300px;
  }
}
</style>
