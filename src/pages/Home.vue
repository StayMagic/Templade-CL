<template>
  <div class="home">
    <!-- Sección Hero mejorada -->
    <section class="hero-section">
      <div class="hero-slideshow">
        <div class="slide" v-for="(image, index) in images" :key="index" 
             :class="{ active: currentImageIndex === index }"
             :style="{ 'background-image': 'url(' + image + ')' }">
          <div class="slide-overlay"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">Clínica De Especialistas <span>Girardot</span></h1>
          <p class="hero-subtitle">Excelencia médica con calidez humana</p>
          <div class="hero-cta">
            <router-link to="/conocenos" class="cta-button primary">Conócenos</router-link>
            <router-link to="/inf_paciente_familia/linea_de_informacion/solic_citas_ext" class="cta-button secondary">Solicitar Cita</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarjetas de servicios destacados -->
    <section class="featured-services">
      <div class="container">
        <div class="section-header">
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos atención integral en todas las especialidades médicas</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <router-link v-if="!service.external" :to="service.link" class="service-link">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <div class="service-info">
                <h3>{{ service.title }}</h3>
                <p>Más información <i class="fas fa-chevron-right"></i></p>
              </div>
            </router-link>
            <a v-else :href="service.link" class="service-link" target="_blank">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <div class="service-info">
                <h3>{{ service.title }}</h3>
                <p>Más información <i class="fas fa-chevron-right"></i></p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de atención rápida -->
    <section class="quick-options">
      <div class="container">
        <div class="options-grid">
          <div class="option-card" v-for="(option, index) in option" :key="index">
            <router-link v-if="!option.external" :to="option.link" class="option-link">
              <div class="option-content">
                <div class="option-icon">
                  <i :class="option.icon"></i>
                </div>
                <h3>{{ option.title }}</h3>
              </div>
            </router-link>
            <a v-else :href="option.link" class="option-link" target="_blank">
              <div class="option-content">
                <div class="option-icon">
                  <i :class="option.icon"></i>
                </div>
                <h3>{{ option.title }}</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/src/assets/clinica.png",
        "/src/assets/cirugia.png",
        "/src/assets/consulta_ext2.png",
        "/src/assets/lab.png",
        "/src/assets/internacion.png",
      ],
      currentImageIndex: 0,
      currentTestimonial: 0,
      services: [
        {
          title: "Apoyo diagnóstico",
          icon: "fas fa-microscope",
          link: "/services/apoyo",
        },
        {
          title: "Consulta externa",
          icon: "fas fa-user-md",
          link: "/services/consulta",
        },
        {
          title: "Cirugía",
          icon: "fas fa-procedures",
          link: "/services/cirugia",
        },
        {
          title: "Internación",
          icon: "fas fa-bed",
          link: "/services/internacion",
        },
        {
          title: "Urgencias",
          icon: "fas fa-ambulance",
          link: "/services/urgencia",
        },
      ],
      option: [
        {
          title: "Historia Clínica",
          icon: "fas fa-file-medical",
          link: "/otras-opciones/soli-historia",
        },
        {
          title: "Solicitar cita",
          icon: "fas fa-calendar-check",
          link: "/inf_paciente_familia/linea_de_informacion/solic_citas_ext",
        },
        {
          title: "PQRS",
          icon: "fas fa-comment-medical",
          link: "/otras-opciones/pqrs",
        },
      ],
      testimonials: [
        {
          quote: "Excelente atención por parte de todo el personal médico. Me sentí acompañado en todo momento durante mi tratamiento.",
          name: "Juan Pérez",
          details: "Paciente de Cardiología"
        },
        {
          quote: "La clínica cuenta con tecnología de punta y profesionales altamente capacitados. Totalmente recomendada.",
          name: "María Gómez",
          details: "Paciente de Ginecología"
        },
        {
          quote: "Rapidez en la atención de urgencias y mucha calidez humana. Gracias por su excelente servicio.",
          name: "Carlos Rodríguez",
          details: "Paciente de Urgencias"
        }
      ]
    };
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000);
    
    setInterval(() => {
      this.nextTestimonial();
    }, 8000);
  },
  methods: {
    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    },
    prevTestimonial() {
      this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
    }
  }
};
</script>

<style scoped>
/* Estilos generales */
:root {
  --primary-color: #003366;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --light-color: #f8f9fa;
  --dark-color: #2c3e50;
  --text-color: #333;
  --text-light: #777;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Sección Hero */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  color: white;
}

.hero-slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-slideshow .slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.hero-slideshow .slide.active {
  opacity: 1;
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 51, 102, 0.7), rgba(0, 51, 102, 0.5));
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}



.hero-subtitle {
  font-size: 1.5rem;
  max-width: 700px;
  margin: 0 auto 30px;
  font-weight: 300;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta-button {
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-button.primary {
  background-color: var(--primary-color);
  color: white;
  border: 2px solid var(--primary-color);
}

.cta-button.primary:hover {
  background-color: transparent;
  color: white;
}

.cta-button.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}



/* Sección de servicios */
.featured-services {
  padding: 80px 0;
  background-color: var(--light-color);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  height: 3px;
  background-color: black
}

.section-header p {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.service-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-link {
  display: block;
  padding: 30px 20px;
  text-decoration: none;
  color: var(--text-color);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.service-info h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  
}

.service-info p {
  
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

/* Sección de opciones rápidas */
.quick-options {
  padding: 60px 0;
  background-color: white;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.option-card {
  background-color: var(--light-color);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.option-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.option-link {
  display: block;
  text-decoration: none;
  color: var(--text-color);
  padding: 25px;
}

.option-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.option-icon {
  font-size: 1.8rem;
  color: var(--primary-color);
  width: 60px;
  height: 60px;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-card h3 {
  font-size: 1.2rem;
  margin: 0;
  color: var(--primary-color);
}

/* Testimonios */
.testimonials {
  padding: 80px 0;
  background-color: var(--primary-color);
  color: white;
}

.testimonials .section-header h2 {
  color: white;
}

.testimonials .section-header p {
  color: rgba(255, 255, 255, 0.8);
}

.testimonial-carousel {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.testimonial-slide {
  display: none;
  animation: fadeIn 0.5s ease;
}

.testimonial-slide.active {
  display: block;
}

.testimonial-content {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  text-align: center;
}

.quote {
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 30px;
  position: relative;
}

.quote::before,
.quote::after {
  content: '"';
  font-size: 2rem;
  color: var(--secondary-color);
  opacity: 0.5;
}

.author {
  margin-top: 20px;
}

.name {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 5px;
}

.details {
  font-size: 0.9rem;
  opacity: 0.8;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
}

.control-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px 15px;
  transition: color 0.3s ease;
}

.control-btn:hover {
  color: var(--secondary-color);
}

.indicators {
  display: flex;
  gap: 10px;
}

.indicators span {
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicators span.active {
  background-color: var(--secondary-color);
  transform: scale(1.2);
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-cta {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .cta-button {
    width: 80%;
    max-width: 250px;
  }
  
  .options-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonial-content {
    padding: 30px 20px;
  }
  
  .quote {
    font-size: 1rem;
  }
}
</style>