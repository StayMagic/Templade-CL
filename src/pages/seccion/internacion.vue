<template>
  <header class="hero-section">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">INTERNACIÓN</h1>
      <p class="hero-subtitle">Confort y atención especializada para tu recuperación</p>
      <div class="hero-description">
        <p>Habitaciones diseñadas para ofrecerte el máximo confort durante tu estancia, con atención personalizada las 24 horas</p>
      </div>
    </div>
  </header>

  <section class="hospitalization-section">
    <div class="container">
      <div class="hospitalization-intro">
        <div class="intro-image">
          <img src="/src/assets/internacion.png" alt="Área de Internación" class="featured-image" loading="lazy"/>
        </div>
        <div class="intro-content">
          <h2 class="section-title">Comodidad que Acelera tu Recuperación</h2>
          <p class="section-text">
            Nuestras modernas habitaciones están diseñadas para brindarte un ambiente cálido y confortable durante tu recuperación. 
            Cada espacio ha sido cuidadosamente planificado para combinar funcionalidad médica con comodidad, apoyados por un equipo 
            asistencial comprometido y áreas administrativas eficientes que trabajan para hacer tu estancia más agradable.
          </p>
          
          <div class="amenities-list">
            <div class="amenity-item">
              <i class="fas fa-tv"></i>
              <span>Televisión con cable</span>
            </div>
            <div class="amenity-item">
              <i class="fas fa-bell"></i>
              <span>Llamado electrónico</span>
            </div>
            <div class="amenity-item">
              <i class="fas fa-user-friends"></i>
              <span>Visitas diurnas</span>
            </div>
            <div class="amenity-item">
              <i class="fas fa-couch"></i>
              <span>Salas de espera por piso</span>
            </div>
          </div>
        </div>
      </div>

      <div class="rooms-section">
        <h3 class="rooms-title">Nuestras Habitaciones</h3>
        <div class="rooms-grid">
          <div class="room-card">
            <div class="room-image-container">
              <img src="/src/assets/consulta_ancho.png" alt="Habitación Unipersonal" class="room-image"/>
              <div class="room-badge">Más Popular</div>
            </div>
            <div class="room-content">
              <h4>Unipersonal</h4>
              <p>Espacio privado diseñado para tu tranquilidad y descanso óptimo</p>
              <ul class="room-features">
                <li><i class="fas fa-bed"></i> Cama individual premium</li>
                <li><i class="fas fa-bath"></i> Baño privado</li>
                <li><i class="fas fa-wifi"></i> WiFi de alta velocidad</li>
                <li><i class="fas fa-sun"></i> Iluminación natural</li>
              </ul>
            </div>
          </div>

          <div class="room-card">
            <div class="room-image-container">
              <img src="/src/assets/externa.jpg" alt="Habitación Bipersonal" class="room-image"/>
            </div>
            <div class="room-content">
              <h4>Bipersonal</h4>
              <p>Amplio espacio compartido con todas las comodidades</p>
              <ul class="room-features">
                <li><i class="fas fa-bed"></i> 2 camas individuales</li>
                <li><i class="fas fa-bath"></i> Baño privado</li>
                <li><i class="fas fa-phone"></i> Línea telefónica</li>
                <li><i class="fas fa-utensils"></i> Servicio de alimentación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="services-section">
        <h3 class="services-title">Servicios Adicionales</h3>
        <div class="services-grid">
          <div class="service-card">
            <i class="fas fa-user-nurse"></i>
            <h4>Atención 24/7</h4>
            <p>Personal médico y de enfermería disponible las 24 horas</p>
          </div>
          <div class="service-card">
            <i class="fas fa-utensils"></i>
            <h4>Nutrición Especializada</h4>
            <p>Menús adaptados a tus necesidades médicas</p>
          </div>
          <div class="service-card">
            <i class="fas fa-procedures"></i>
            <h4>Monitoreo Constante</h4>
            <p>Seguimiento médico permanente</p>
          </div>
          <div class="service-card">
            <i class="fas fa-spa"></i>
            <h4>Confort</h4>
            <p>Ropa de cama premium y ambiente tranquilo</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Internacion',
};
</script>

<style scoped>
/* Variables de color */
:root {
  --primary: #5d9cec;
  --primary-dark: #4a89dc;
  --secondary: #a0d468;
  --light: #f5f7fa;
  --dark: #434a54;
  --gray: #656d78;
  --light-gray: #e6e9ed;
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
  height: 70vh;
  min-height: 500px;
  background: url('/src/assets/hospital-room-bg.jpg') center/cover no-repeat;
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
  background:#003366;
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

/* Hospitalization Section */
.hospitalization-section {
  padding: 5rem 0;
  background-color: var(--light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.hospitalization-intro {
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

.amenities-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.amenity-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
  color: var(--primary-dark);
}

.amenity-item i {
  font-size: 1.3rem;
  color: var(--secondary);
}

/* Rooms Section */
.rooms-section {
  margin: 5rem 0;
}

.rooms-title {
  text-align: center;
  font-size: 2.2rem;
  color: var(--primary-dark);
  margin-bottom: 3rem;
  position: relative;
}

.rooms-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--secondary);
  margin: 1rem auto 0;
}

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.room-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.room-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.room-image-container {
  position: relative;
  height: 250px;
}

.room-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--secondary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.room-content {
  padding: 1.5rem;
}

.room-content h4 {
  font-size: 1.5rem;
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
}

.room-content p {
  color: var(--gray);
  margin-bottom: 1.2rem;
  font-size: 1rem;
}

.room-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.room-features li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--gray);
  font-size: 0.95rem;
}

.room-features i {
  color: var(--secondary);
  width: 20px;
  text-align: center;
}

/* Services Section */
.services-section {
  margin: 5rem 0;
}

.services-title {
  text-align: center;
  font-size: 2.2rem;
  color: var(--primary-dark);
  margin-bottom: 3rem;
  position: relative;
}

.services-title::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: var(--secondary);
  margin: 1rem auto 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.service-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.service-card i {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.service-card h4 {
  font-size: 1.3rem;
  color: var(--dark);
  margin-bottom: 0.8rem;
}

.service-card p {
  color: var(--gray);
  font-size: 0.95rem;
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
  
  .hospitalization-intro {
    flex-direction: column;
  }
  
  .rooms-grid {
    grid-template-columns: 1fr;
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
  
  .rooms-grid {
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
  
  .amenities-list {
    grid-template-columns: 1fr 1fr;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>