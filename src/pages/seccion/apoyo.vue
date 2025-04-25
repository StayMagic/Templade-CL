<template>
  <header class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">APOYO DIAGNÓSTICO</h1>
      <p class="hero-subtitle">Tecnología de vanguardia para resultados precisos y confiables</p>
      <div class="hero-description">
        <p>Ofrecemos diagnósticos avanzados en laboratorio clínico, cardiología, radiología y más, con equipos de última generación y profesionales altamente calificados.</p>
      </div>
    </div>
  </header>

  <section class="services-section">
    <div class="container">
      <div class="service-intro">
        <div class="intro-image">
          <img src="/src/assets/radiologia.png" alt="Tecnología diagnóstica" class="featured-image" loading="lazy"/>
        </div>
        <div class="intro-content">
          <h2 class="section-title">Excelencia en Diagnóstico Médico</h2>
          <p class="section-text">
            Nuestro centro proporciona diagnósticos precisos mediante un Laboratorio Clínico completo con análisis en química clínica, hematología, microbiología y patología. Complementamos con estudios cardiológicos no invasivos y tecnología de imagenología avanzada.
          </p>
          <div class="service-highlights">
            <div class="highlight-item">
              <i class="fas fa-flask"></i>
              <span>Laboratorio clínico completo</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-heartbeat"></i>
              <span>Cardiología no invasiva</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-x-ray"></i>
              <span>Radiología digital</span>
            </div>
            <div class="highlight-item">
              <i class="fas fa-procedures"></i>
              <span>Ultrasonografía especializada</span>
            </div>
          </div>
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
  </section>
</template>

<script>
export default {
  name: 'ApoyoDiagnostico',
};
</script>

<style scoped>
/* Variables de color */
:root {
  --primary: #0066cc;
  --primary-dark: #004d99;
  --secondary: #00b4d8;
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
  background: url('/src/assets/medical-bg.jpg') center/cover no-repeat;
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

.service-highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  color: var(--primary);
}

.highlight-item i {
  font-size: 1.3rem;
  color: var(--secondary);
}

/* Service Cards */
.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 2rem;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.service-card h3 {
  font-size: 1.5rem;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--gray);
  margin-bottom: 1.5rem;
  font-size: 1rem;
}

.card-link {
  color: var(--secondary);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: var(--primary);
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
  
  .intro-image, .intro-content {
    flex: none;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .service-highlights {
    grid-template-columns: 1fr;
  }
  
  .service-cards {
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
}

/* Estilos para la sección de galería */
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

/* Variables de color necesarias para que funcione */
:root {
  --primary: #218380;
  --primary-dark: #1a6b68;
  --secondary: #ffbc42;
  --light: #f8f9fa;
  --dark: #212529;
  --gray: #6c757d;
  --light-gray: #e9ecef;
}

/* Responsive */
@media (max-width: 992px) {
  .specialties-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .specialties-title, .gallery-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .specialties-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
