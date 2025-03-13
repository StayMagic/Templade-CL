<template>
  <div class="home">
    <!-- Sección Hero -->
    <section class="hero">
      <div class="hero-background">
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :class="{ active: currentImageIndex === index }"
          alt="Imagen de fondo"
        />
        <div class="overlay"></div>
      </div>
      <div class="container">
        <h2 class="hero-title">Bienvenido a la Clínica De Especialistas Girardot</h2>
        <p class="hero-subtitle">
          Tu bienestar es nuestra prioridad. Confía en nuestros servicios médicos de calidad.
        </p>
        <router-link to="/conocenos">
          <button class="cta-button">Conócenos</button>
        </router-link>
      </div>
    </section>

    <!-- Sección de Servicios -->
    <section class="gallery">
      <div class="container">
        <h3>Nuestros Servicios</h3>
        <div class="gallery-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <router-link v-if="!service.external" :to="service.link" class="service-link">
              <div class="icon-container">
                <i :class="service.icon"></i>
              </div>
              <h4>{{ service.title }}</h4>
            </router-link>
            <a v-else :href="service.link" class="service-link" target="_blank">
              <div class="icon-container">
                <i :class="service.icon"></i>
              </div>
              <h4>{{ service.title }}</h4>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Otras Opciones -->
    <section class="gallery">
      <div class="container">
        <h3>Otras Opciones</h3>
        <div class="gallery-grid">
          <div class="service-card" v-for="(option, index) in option" :key="index">
            <router-link v-if="!option.external" :to="option.link" class="service-link">
              <div class="icon-container">
                <i :class="option.icon"></i>
              </div>
              <h4>{{ option.title }}</h4>
            </router-link>
            <a v-else :href="option.link" class="service-link" target="_blank">
              <div class="icon-container">
                <i :class="option.icon"></i>
              </div>
              <h4>{{ option.title }}</h4>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Carrusel -->
    <div class="carousel">
      <div class="slide" v-for="(slide, index) in slides" :key="slide.id" v-show="index === currentSlide">
        <img :src="slide.image" :alt="slide.title" />
        <div class="text">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
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
      services: [
        {
          title: "Apoyo diagnóstico",
          icon: "fa fa-stethoscope",
          link: "/services/apoyo",
        },
        {
          title: "Consulta externa",
          icon: "fa fa-user-md",
          link: "/services/consulta",
        },
        {
          title: "Cirugía",
          icon: "fa fa-medkit",
          link: "/services/cirugia",
        },
        {
          title: "Internación",
          icon: "fa fa-bed",
          link: "/services/internacion",
        },

        {
          title: "Urgencias",
          icon: "fa fa-ambulance",
          link: "/services/urgencia",
        },
      ],
      option: [
        {
          title: "Solicitud de Historia Clinica",
          icon: "fa fa-file",
          link: "/otras-opciones/soli-historia",
        },
        {
          title: "Solicitud de citas",
          icon: "fa fa-laptop",
          link: "/inf_paciente_familia/linea_de_informacion/solic_citas_ext",
        },
        {
          title: "PQRS",
          icon: "fa fa-question",
          link: "/otras-opciones/pqrs",
        },

      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    }, 4000);
  },
  methods: {
    goToAboutPage() {
      this.$router.push({ name: 'about' });
    }
  }
};
</script>


<style scoped>
.hero {
  position: relative;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-background img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-background img.active {
  opacity: 1;
}

.hero-background .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
  z-index: 2;
}

.container {
  position: relative;
  z-index: 3;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-top: 1rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
}

.cta-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #003366;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #234b82;
}


.gallery {
  padding: 40px;
  background-color: #f4f7f8;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

h3 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 30px;
}

.gallery-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.service-card {
  background-color: #fff;
  border: 2px solid #3498db;
  border-radius: 8px;
  width: 19%;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.service-link {
  text-decoration: none;
  color: inherit;
}

.icon-container {
  font-size: 3rem;
  color: #3498db;
  margin-bottom: 15px;
}

h4 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin: 0;
}


@media (max-width: 1200px) {
  .service-card {
    width: 23%;
  }
}

@media (max-width: 992px) {
  .service-card {
    width: 48%;
  }
}

@media (max-width: 768px) {
  .service-card {
    width: 100%;
  }
}

@media (max-width: 480px) {
  h3 {
    font-size: 2rem;
  }
}
</style>