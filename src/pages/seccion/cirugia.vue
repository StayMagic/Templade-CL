<template>
  <header class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">CIRUGÍA</h1>
      <p class="hero-subtitle">Excelencia quirúrgica con tecnología de vanguardia</p>
      <div class="hero-description">
        <p>Procedimientos seguros realizados por especialistas altamente calificados en instalaciones equipadas con lo
          último en tecnología médica.</p>
      </div>
    </div>
  </header>

  <section class="surgery-section">
    <div class="container">
      <div class="surgery-intro">
        <div class="intro-image">
          <img src="/src/assets/cirugia.png" alt="Área de Cirugía" class="featured-image" loading="lazy" />
        </div>
        <div class="intro-content">
          <h2 class="section-title">Centro Quirúrgico Especializado</h2>
          <p class="section-text">
            Nuestro pabellón quirúrgico, ubicado en el cuarto piso del edificio, cuenta con equipamiento de última
            generación
            y personal altamente capacitado para procedimientos de urgencia y programados. Destacamos por nuestro
            enfoque humano
            y profesional, brindando seguridad y confianza a cada paciente.
          </p>

          <div class="surgery-features">
            <div class="feature-item">
              <i class="fas fa-user-shield"></i>
              <div>
                <h4>Seguridad garantizada</h4>
                <p>Protocolos estrictos y equipo especializado para tu protección</p>
              </div>
            </div>

            <div class="feature-item">
              <i class="fas fa-procedures"></i>
              <div>
                <h4>Instalaciones modernas</h4>
                <p>Salas equipadas con tecnología médica de punta</p>
              </div>
            </div>

            <div class="feature-item">
              <i class="fas fa-comments-medical"></i>
              <div>
                <h4>Acompañamiento integral</h4>
                <p>Orientación pre y post operatoria por personal especializado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="facilities-section">
        <h3 class="facilities-title">Nuestras Instalaciones Quirúrgicas</h3>
        <div class="facilities-grid">
          <div class="facility-card">
            <i class="fas fa-clinic-medical"></i>
            <h4>Salas de Cirugía</h4>
            <p>2 salas completamente equipadas para todo tipo de intervenciones</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-baby"></i>
            <h4>Sala de Partos</h4>
            <p>Área especializada para atención gineco-obstétrica</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-pump-medical"></i>
            <h4>Esterilización</h4>
            <p>Área de procesamiento central con los más altos estándares</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-bed"></i>
            <h4>Sala de Recuperación</h4>
            <p>Espacio confortable para monitoreo post-operatorio</p>
          </div>
          <div class="facility-card">
            <i class="fas fa-user-injured"></i>
            <h4>Preparación del Paciente</h4>
            <p>Área dedicada a la preparación pre-quirúrgica</p>
          </div>
        </div>
      </div>

      <div class="surgery-gallery">
        <h3 class="gallery-title">Nuestro Trabajo</h3>
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="/src/assets/cirugia_inf.png" alt="Sala de Cirugía" class="gallery-image" />
            <div class="gallery-overlay">
              <h4>Sala de Cirugía</h4>
              <p>Equipamiento avanzado para procedimientos de precisión</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/src/assets/cirugia_girardot.png" alt="Equipo Quirúrgico" class="gallery-image" />
            <div class="gallery-overlay">
              <h4>Equipo Quirúrgico</h4>
              <p>Profesionales con amplia experiencia y reconocimiento</p>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/src/assets/cirugia-general.jpg" alt="Tecnología Avanzada" class="gallery-image" />
            <div class="gallery-overlay">
              <h4>Tecnología Avanzada</h4>
              <p>Instrumental de última generación para tu seguridad</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Cirugia',
};
</script>

<style scoped>
/* Variables de color */
:root {
  --primary: #8b0000;
  --primary-dark: #5a0000;
  --secondary: #4169e1;
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
  background: url('/src/assets/surgery-bg.jpg') center/cover no-repeat;
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
  background: rgb(0, 51, 102);
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

/* Surgery Section */
.surgery-section {
  padding: 5rem 0;
  background-color: var(--light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.surgery-intro {
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

.surgery-features {
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
.surgery-gallery {
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
  background: rgba(0, 51, 102, 0.6);
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

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.5rem;
  }

  .surgery-intro {
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
}
</style>
