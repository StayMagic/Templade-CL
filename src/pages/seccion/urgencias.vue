<template>
  <header class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">URGENCIAS</h1>
      <p class="hero-subtitle">Atención inmediata las 24 horas</p>
      <div class="hero-description">
        <p>Servicio de emergencias médicas con respuesta rápida y profesional para salvar vidas</p>
      </div>
    </div>
  </header>

  <section class="emergency-section">
    <div class="container">
      <div class="emergency-intro">
        <div class="intro-image">
          <img src="/src/assets/urgencias.png" alt="Área de Urgencias" class="featured-image" loading="lazy" />
        </div>
        <div class="intro-content">
          <h2 class="section-title">Emergencias Médicas Especializadas</h2>
          <p class="section-text">
            Ubicadas en la primera planta de nuestras instalaciones, ofrecemos atención continua e inmediata para
            urgencias médicas, quirúrgicas y traumáticas de mediana complejidad. Contamos con personal altamente
            capacitado y certificado, respaldado por tecnología de vanguardia para diagnósticos precisos y
            tratamientos oportunos.
          </p>

          <div class="emergency-features">
            <div class="feature-item">
              <i class="fas fa-stopwatch"></i>
              <div>
                <h4>TRIAGE prioritario</h4>
                <p>Sistema de clasificación para atención inmediata según gravedad</p>
              </div>
            </div>

            <div class="feature-item">
              <i class="fas fa-user-clock"></i>
              <div>
                <h4>Recepción 24/7</h4>
                <p>Personal administrativo siempre disponible para orientación</p>
              </div>
            </div>

            <div class="feature-item">
              <i class="fas fa-procedures"></i>
              <div>
                <h4>Áreas especializadas</h4>
                <p>Espacios diferenciados para cada tipo de emergencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="facilities-section">
        <h3 class="facilities-title">Nuestras Instalaciones de Urgencias</h3>
        <div class="facilities-grid">
          <div class="facility-card">
            <i class="fas fa-hospital-user"></i>
            <h4>Atención General</h4>
            <p>Servicio completo de urgencias las 24 horas</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-heartbeat"></i>
            <h4>Sala de Reanimación</h4>
            <p>Equipada para emergencias críticas</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-child"></i>
            <h4>Pediatría</h4>
            <p>Sala de observación con 4 camillas infantiles</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-venus"></i>
            <h4>Área Femenina</h4>
            <p>Sala de observación con 4 camillas</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-mars"></i>
            <h4>Área Masculina</h4>
            <p>Sala de observación con 4 camillas</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-band-aid"></i>
            <h4>Sala de Yesos</h4>
            <p>Atención especializada en traumatología</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-cut"></i>
            <h4>Sala de Suturas</h4>
            <p>Para procedimientos menores</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-stethoscope"></i>
            <h4>Consultorios</h4>
            <p>2 consultorios médicos completamente equipados</p>
          </div>
        </div>
      </div>

      <div class="emergency-gallery">
        <h3 class="gallery-title">Nuestro Servicio de Emergencias</h3>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="/src/assets/urgencias.png" alt="Sala de Urgencias" class="gallery-image" />
            <div class="gallery-overlay">
              <h4>Sala de Urgencias</h4>
              <p>Área equipada para atención inmediata las 24 horas</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/src/assets/urgencias.png" alt="Equipo Médico" class="gallery-image" />
            <div class="gallery-overlay">
              <h4>Equipo Profesional</h4>
              <p>Médicos y enfermeras altamente capacitados</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/src/assets/urgencias.png" alt="Tecnología Avanzada" class="gallery-image" />
            <div class="gallery-overlay">
              <h4>Monitoreo Constante</h4>
              <p>Tecnología de última generación para tu seguridad</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </section>
</template>

<script>
export default {
  name: 'Urgencias',
};
</script>

<style scoped>
/* Variables de color */
:root {
  --primary: #d32f2f;
  --primary-dark: #b71c1c;
  --secondary: #1976d2;
  --light: #f8f9fa;
  --dark: #212529;
  --gray: #6c757d;
  --light-gray: #e9ecef;
}

/* Estilos generales */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark);
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 80vh;
  min-height: 500px;
  background: url('/src/assets/emergency-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #003366;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  padding: 0 20px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInDown 1s ease;
}

.hero-subtitle {
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.5s ease;
}

.hero-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.3rem;
  line-height: 1.8;
  animation: fadeIn 2s ease;
}

.emergency-banner {
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--primary);
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 600;
  margin-top: 2rem;
  animation: pulse 2s infinite;
}

.emergency-banner i {
  font-size: 1.5rem;
}

/* Emergency Section */
.emergency-section {
  padding: 5rem 0;
  background-color: var(--light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.emergency-intro {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
}

.intro-image {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.featured-image {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.intro-image:hover .featured-image {
  transform: scale(1.03);
}

.intro-content {
  flex: 1;
}

.section-title {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: var(--secondary);
  margin-top: 1rem;
}

.section-text {
  font-size: 1.1rem;
  color: var(--gray);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.emergency-features {
  display: grid;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.feature-item i {
  font-size: 1.8rem;
  color: var(--primary);
  margin-top: 0.3rem;
}

.feature-item h4 {
  font-size: 1.2rem;
  color: var(--primary-dark);
  margin-bottom: 0.5rem;
}

.feature-item p {
  color: var(--gray);
  font-size: 1rem;
}

/* Facilities Section */
.facilities-section {
  margin: 5rem 0;
}

.facilities-title {
  text-align: center;
  font-size: 2.2rem;
  color: var(--primary-dark);
  margin-bottom: 3rem;
  position: relative;
}

.facilities-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--secondary);
  margin: 1rem auto 0;
}

.facilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.facility-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.facility-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.facility-card i {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.facility-card h4 {
  font-size: 1.3rem;
  color: var(--dark);
  margin-bottom: 0.8rem;
}

.facility-card p {
  color: var(--gray);
  font-size: 0.95rem;
}

/* Gallery Section */
.emergency-gallery {
  margin: 5rem 0;
}

.gallery-title {
  text-align: center;
  font-size: 2.2rem;
  color: var(--primary-dark);
  margin-bottom: 3rem;
  position: relative;
}

.gallery-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--secondary);
  margin: 1rem auto 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 250px;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0033668f;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1.5rem;
  text-align: center;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay h4 {
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
}

.gallery-overlay p {
  font-size: 1rem;
}

/* Emergency Contact */
.emergency-contact {
  margin: 5rem auto;
  max-width: 600px;
}

.contact-card {
  background: var(--primary);
  color: white;
  border-radius: 10px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(211, 47, 47, 0.3);
}

.contact-card i {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.contact-card h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-card p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.emergency-number {
  display: inline-block;
  background: white;
  color: var(--primary);
  font-size: 1.8rem;
  font-weight: 700;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.emergency-number:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .emergency-intro {
    flex-direction: column;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .facilities-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.3rem;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .hero-section {
    height: auto;
    padding: 6rem 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .facilities-grid {
    grid-template-columns: 1fr;
  }

  .emergency-number {
    font-size: 1.5rem;
    padding: 0.6rem 1.5rem;
  }
}
</style>
