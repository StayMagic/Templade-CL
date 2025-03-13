<template>
   <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">CIRUGIA</h1>
        <p class="header-description">Tecnología avanzada y un equipo experto a tu servicio</p>
      </div>
    </header>
  <section class="cirugia-section">
    <!-- Contenedor principal -->
    <div class="info-container">
      <!-- Imagen a la izquierda -->
      <div class="image-container">
        <img src="/src/assets/cirugia.png" alt="Cirugía" class="main-image" />
      </div>

      <!-- Texto sobre Cirugía -->
      <div class="content">
        <div class="blog-post pl-3 pr-3">
          <p>
            Nuestras salas de cirugía cuentan con el equipamiento requerido y con la disponibilidad permanente para
            procedimientos de urgencias o programados. Se encuentran ubicadas en el cuarto piso del edificio y disponen
            de un grupo de especialistas con gran reconocimiento y aceptación en la región, por su profesionalismo,
            idoneidad, humanismo y experiencia. En procedimientos programados es fortalecida la orientación al usuario
            con un funcionario, encargado de realizar la programación e idóneamente reiterando la información
            suministrada por el especialista en los cuidados pre y post-quirúrgicos. El área esta distribuida de la
            siguiente manera:
          </p>
          <div class="row">
            <div class="col-6">
              <ul>
                <li>Dos salas de cirugía</li>
                <li>Sala de Partos</li>
                <li>Esterilización</li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Sala de recuperación</li>
                <li>Área de Preparación del paciente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Collage de imágenes estilizado con Cards -->
    <div class="image-collage">
      <div class="collage-card">
        <img src="/src/assets/cirugia_inf.png" alt="Sala de Cirugía" class="collage-image" />
        <div class="collage-content">
          <h3>Sala de Cirugía</h3>
          <p>Equipamiento avanzado para procedimientos de urgencias y programados.</p>
        </div>
      </div>
      <div class="collage-card">
        <img src="/src/assets/cirugia_girardot.png" alt="Equipo de Cirugía" class="collage-image" />
        <div class="collage-content">
          <h3>Equipo de Cirugía</h3>
          <p>Especialistas altamente capacitados en cada tipo de intervención quirúrgica.</p>
        </div>
      </div>
      <div class="collage-card">
        <img src="/src/assets/cirugia-general.jpg" alt="Tecnología de Cirugía" class="collage-image" />
        <div class="collage-content">
          <h3>Tecnología de Cirugía</h3>
          <p>Las últimas innovaciones tecnológicas para una cirugía más precisa y segura.</p>
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
.cirugia-section {
  padding: 60px 20px;
  background-color: #f9f9f9;
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

.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  padding: 0 120px;
}


.image-container {
  flex: 1;
  max-width: 50%;
  padding: 20px;
}

.main-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}


.content {
  flex: 1;
  text-align: left;
  max-width: 50%;
}


.content p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.specialties-list {
  list-style-type: none;
  padding-left: 0;
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
}

.specialties-list li {
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

@media (max-width: 1731px) {
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

@media (max-width: 768px) {
  .info-container {
    flex-direction: column;
    text-align: center;
    padding: 0 20px;
  }

  .main-image {
    max-width: 100%;
    height: auto;
  }

  .content {
    max-width: 100%;
    margin-top: 20px;
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
