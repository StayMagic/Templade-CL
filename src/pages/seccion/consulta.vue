<template>
  <header class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">CONSULTA EXTERNA</h1>
      <p class="hero-subtitle">Atención médica especializada para tu bienestar integral</p>
      <div class="hero-description">
        <p>Cuidamos de tu salud con un equipo médico altamente calificado y tecnología de vanguardia en un ambiente diseñado para tu comodidad.</p>
      </div>
    </div>
  </header>

  <section class="services-section">
    <div class="container">
      <div class="service-intro">
        <div class="intro-image">
          <img src="/src/assets/consulta_ext2.png" alt="Consulta Externa" class="featured-image" loading="lazy"/>
        </div>
        <div class="intro-content">
          <h2 class="section-title">Atención Ambulatoria de Excelencia</h2>
          <p class="section-text">
            Nuestro servicio de consulta externa ofrece atención integral con un equipo médico y paramédico altamente capacitado. 
            Hemos optimizado los procesos administrativos con un sistema digital de turnos y personal dedicado a la orientación 
            de pacientes para garantizar una experiencia fluida y sin complicaciones.
          </p>
          
          <div class="service-features">
            <div class="feature-item">
              <i class="fas fa-calendar-check"></i>
              <div>
                <h4>Agendamiento fácil</h4>
                <p>Reserva, confirma o cancela citas por teléfono sin desplazamientos innecesarios</p>
              </div>
            </div>
            
            <div class="feature-item">
              <i class="fas fa-user-md"></i>
              <div>
                <h4>Especialistas calificados</h4>
                <p>Médicos con amplia experiencia en sus respectivas especialidades</p>
              </div>
            </div>
            
            <div class="feature-item">
              <i class="fas fa-clock"></i>
              <div>
                <h4>Tiempos de espera reducidos</h4>
                <p>Sistema eficiente que valora tu tiempo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="specialties-section">
        <h3 class="specialties-title">Nuestras Especialidades Médicas</h3>
        <div class="specialties-grid">
          <div class="specialty-card">
            <i class="fas fa-procedures"></i>
            <span>Anestesiología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-scissors"></i>
            <span>Cirugía General</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-heartbeat"></i>
            <span>Cardiología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-eye"></i>
            <span>Oftalmología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-brain"></i>
            <span>Neurología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-bone"></i>
            <span>Ortopedia</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-lungs"></i>
            <span>Neumología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-stomach"></i>
            <span>Gastroenterología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-female"></i>
            <span>Ginecología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-child"></i>
            <span>Pediatría</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-allergies"></i>
            <span>Alergología</span>
          </div>
          <div class="specialty-card">
            <i class="fas fa-user-md"></i>
            <span>Medicina Interna</span>
          </div>
        </div>
      </div>

      <div class="gallery-section">
        <h3 class="gallery-title">Nuestras Instalaciones</h3>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="/src/assets/consulta_externa.png" alt="Consultorio" class="gallery-image"/>
            <div class="gallery-caption">Consultorios equipados</div>
          </div>
          <div class="gallery-item">
            <img src="/src/assets/consulta-exx.jpg" alt="Sala de espera" class="gallery-image"/>
            <div class="gallery-caption">Áreas de espera confortables</div>
          </div>
          <div class="gallery-item">
            <img src="/src/assets/externa.jpg" alt="Recepción" class="gallery-image"/>
            <div class="gallery-caption">Recepción amigable</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConsultaExterna',
};
</script>

<style scoped>
/* Variables de color */
:root {
  --primary: #218380;
  --primary-dark: #1a6b68;
  --secondary: #ffbc42;
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
  background: url('/src/assets/doctor-bg.jpg') center/cover no-repeat;
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
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInDown 1s ease;
}

.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.5s ease;
}

.hero-description {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.8;
  animation: fadeIn 2s ease;
}

/* Services Section */
.services-section {
  padding: 5rem 0;
  background-color: var(--light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.service-intro {
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
  font-size: 2.5rem;
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

.service-features {
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

/* Specialties Section */
.specialties-section {
  margin: 5rem 0;
}

.specialties-title {
  text-align: center;
  font-size: 2rem;
  color: var(--primary-dark);
  margin-bottom: 3rem;
  position: relative;
}

.specialties-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--secondary);
  margin: 1rem auto 0;
}

.specialties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.specialty-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.specialty-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.specialty-card i {
  font-size: 2rem;
  color: var(--primary);
}

.specialty-card span {
  font-weight: 600;
  color: var(--dark);
}

/* Gallery Section */
.gallery-section {
  margin: 5rem 0;
}

.gallery-title {
  text-align: center;
  font-size: 2rem;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #003366;
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: 600;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-caption {
  transform: translateY(0);
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .service-intro {
    flex-direction: column;
  }
  
  .specialties-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .specialties-title, .gallery-title {
    font-size: 1.8rem;
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
  
  .specialties-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>