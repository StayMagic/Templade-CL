<template>
    <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">CONSULTA EXTERNA</h1>
        <p class="header-description">Atención médica especializada para tu bienestar</p>
      </div>
    </header>
  <section class="consulta-externa-section">
    <div class="info-container">
      <div class="image-container">
        <img src="/src/assets/consulta_ext2.png" alt="Consulta Externa" class="main-image" />
      </div>

      <div class="content">
        <div class="blog-post pl-3 pr-3">
          <p>
            Nuestros servicios ambulatorios se distinguen por una atención integral, amable y oportuna por su equipo
            médico y paramédico, cumpliendo permanentemente con los estándares de calidad y eficiencia. Los trámites
            administrativos son agilizados y organizados por un sistema de digiturnos y acompañados por un funcionario a
            cargo del SIAU, destinado a la orientación de los usuarios. Con consultorios externos garantizamos el
            servicio de tomografía y Mamografía. La asignación, confirmación y cancelación de citas médicas puede
            realizarse a través de nuestro PBX, con el objeto de evitar desplazamientos de los usuarios para esta
            actividad.
          </p>
          <p><strong>Nuestras especialidades:</strong></p>
          <div class="row">
            <div class="col-6">
              <ul>
                <li>Anestesia.</li>
                <li>Cirugía General.</li>
                <li>Cirugía Plástica y Estética.</li>
                <li>Dermatología.</li>
                <li>Gastroenterología.</li>
                <li>Ginecología.</li>
                <li>Medicina General.</li>
                <li>Medicina Interna.</li>
                <li>Nutrición y Dietética.</li>
                <li>Ortopedia y Traumatología.</li>
                <li>Psiquiatría.</li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Urología.</li>
                <li>Otorrinolaringología.</li>
                <li>Cirugía Dermatológica.</li>
                <li>Endoscopia Digestiva.</li>
                <li>Cirugía Ginecológica.</li>
                <li>Vascular Periférica.</li>
                <li>Oftalmología.</li>
                <li>Cardiología.</li>
                <li>Ortopedia de Hombro y Codo.</li>
                <li>Neurocirugía.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="image-collage">
      <div class="collage-card">
        <img src="/src/assets/consulta_externa.png" alt="Consulta Externa" class="collage-image" />
        <div class="collage-content">
          <h3>Imagen 1</h3>
          <p>Descripción breve de la imagen 1.</p>
        </div>
      </div>
      <div class="collage-card">
        <img src="/src/assets/consulta-exx.jpg" alt="Consulta Externa" class="collage-image" />
        <div class="collage-content">
          <h3>Imagen 2</h3>
          <p>Descripción breve de la imagen 2.</p>
        </div>
      </div>
      <div class="collage-card">
        <img src="/src/assets/externa.jpg" alt="Consulta Externa" class="collage-image" />
        <div class="collage-content">
          <h3>Imagen 3</h3>
          <p>Descripción breve de la imagen 3.</p>
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
.consulta-externa-section {
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
  padding: 40px 120px;
}

.image-container {
  flex: 1;
  max-width: 50%;
}

.main-image {
  width: 100%;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  object-fit: cover;
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
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.collage-card {
  position: relative;
  width: 30%;
  height: 300px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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

  .image-container,
  .content {
    max-width: 50%;
  }

  .main-image {
    height: 600px;
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
    height: 1100px;
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
