<template>
   <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">INTERNACION</h1>
        <p class="header-description">Comodidad y atención personalizada para tu recuperación</p>
      </div>
    </header>
  <section class="internacion-section">
    <div class="info-container">
      <div class="image-container">
        <img src="/src/assets/internacion.png" alt="Internación" class="main-image" />
      </div>

      <div class="content">
        <div class="blog-post pl-3 pr-3">
          <p>Confort y diseño de nuestras habitaciones, garantizan la comodidad y el ambiente cálido a nuestros
            usuarios, acompañado de una atención personalizada por el equipo de trabajo asistencial y con el apoyo
            logístico del área administrativa, nuestro objetivo es disminuir su tiempo de recuperación en condiciones
            más agradables. Cada habitación cuenta con servicio de televisión, TV cable, visitas diurnas, Sala de espera
            en cada piso y llamado electrónico.</p>
          <div class="row">
            <div class="col-6">
              <ul>
                <li>Habitaciones unipersonales</li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Habitaciones bipersonales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="image-collage">
      <div class="collage-card">
        <img src="/src/assets/internacion.png" alt="Habitación Unipersonal" class="collage-image" />
        <div class="collage-content">
          <h3>Habitación Unipersonal</h3>
          <p>Diseño cómodo y privado para tu descanso.</p>
        </div>
      </div>
      <div class="collage-card">
        <img src="/src/assets/internacion.png" alt="Atención Médica" class="collage-image" />
        <div class="collage-content">
          <h3>Atención Médica</h3>
          <p>Atención personalizada y profesional las 24 horas.</p>
        </div>
      </div>
      <div class="collage-card">
        <img src="/src/assets/internacion.png" alt="Recuperación" class="collage-image" />
        <div class="collage-content">
          <h3>Recuperación</h3>
          <p>Ambiente cálido y confortable para tu pronta recuperación.</p>
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
.internacion-section {
  padding: 60px 20px;
  background-color: #f4f4f9;
  text-align: center;
  color: #333;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #003366;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.breadcrumb {
  font-size: 1rem;
  margin-bottom: 20px;
  color: #666;
}

.breadcrumb-link {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-current {
  color: #333;
  font-weight: 600;
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 40px;
  flex-wrap: wrap;
  padding: 35px 120px;
}

.image-container {
  flex: 1;
  max-width: 50%;
  display: flex;
  align-items: center;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  min-height: 100%;
}

.content {
  flex: 1;
  text-align: left;
  max-width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.features-list {
  list-style-type: none;
  padding-left: 0;
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
}

.features-list li {
  margin-bottom: 10px;
}

.image-collage {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.collage-card {
  position: relative;
  width: 30%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform: scale(1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.collage-card:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.collage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.collage-card:hover .collage-image {
  transform: scale(1.1);
}

.collage-content {
  padding: 15px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.collage-content h3 {
  font-size: 1.2rem;
  color: #003366;
}

.collage-content p {
  font-size: 1rem;
  color: #666;
}


@media (max-width: 1420px) {
  .info-container {
    padding: 0 100px;
  }
}

@media (max-width: 992px) {
  .info-container {
    padding: 0 60px;
  }

  .image-container,
  .content {
    max-width: 50%;
  }

  .main-image {
    height: 640px;
  }
}

@media (max-width: 760px) {
  .info-container {
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
  }

  .image-container,
  .content {
    max-width: 100%;
  }

  .main-image {
    max-width: 100%;
    height: auto;
  }

  .content {
    margin-top: 20px;
  }

  .image-collage {
    flex-direction: column;
  }

  .collage-card {
    width: 100%;
    margin-bottom: 20px;
  }

  .collage-image {
    object-fit: cover;
  }
}
</style>