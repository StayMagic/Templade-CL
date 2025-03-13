<template>
   <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">APOYO DIAGNISTICO</h1>
        <p class="header-description">Tecnología avanzada para un diagnóstico preciso y eficiente, brindando los mejores
          resultados en las áreas de laboratorio, cardiología, radiología y más.</p>
      </div>
    </header>
  <section class="apoyo-diagnostico-section">
    <div class="info-container">
      <div class="image-container">
        <img src="/src/assets/radiologia.png" alt="Apoyo Diagnóstico" class="main-image" loading="lazy"/>
      </div>

      <div class="content">
        <div class="blog-post pl-3 pr-3">
          <p>
            Suministramos diagnósticos acertados a través de nuestro Laboratorio Clínico que cuenta con química clínica,
            hematología, coproanálisis, uroanálisis, y es complementado con laboratorios externos en las áreas de
            microbiología, hormonas y patología. En cardiología realizamos pruebas no intervencionistas como
            Ecocardiogramas, Holter, Pruebas de esfuerzo y Mapa Arterial. En Imagenología contamos con el equipamiento y
            recurso humano para toma y lectura de:
          </p>
          <div class="row">
            <div class="col-6">
              <ul>
                <li>Laboratorio clínico</li>
                <li>Farmacia</li>
                <li>Radiología convencional</li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>Ecografía</li>
                <li>Cardiología No Invasiva</li>
                <li>Ultrasonografía y Doppler no invasivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="horizontal-cards-container">
      <div class="card-horizontal">
        <img src="/src/assets/x-rayos.png" alt="Rayos X" class="card-image" />
        <div class="card-content">
          <h3>Rayos X</h3>
          <p>Utilizamos tecnología avanzada para diagnósticos mediante rayos X, asegurando una imagen clara y precisa.
          </p>
        </div>
      </div>

      <div class="card-horizontal">
        <img src="/src/assets/labora.jpg" alt="Laboratorio Clínico" class="card-image" />
        <div class="card-content">
          <h3>Laboratorio Clínico</h3>
          <p>Realizamos diversos análisis de laboratorio para ofrecer diagnósticos completos y certeros.</p>
        </div>
      </div>

      <div class="card-horizontal">
        <img src="/src/assets/apoyo.jpg" alt="Resultados" class="card-image" />
        <div class="card-content">
          <h3>Resultados</h3>
          <p>Entregamos resultados detallados con la interpretación precisa de cada prueba realizada.</p>
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
.apoyo-diagnostico-section {
  padding: 60px 20px;
  background-color: #f4f4f9;
  text-align: center;
  color: #333;
}

.section-header {
  background-color: #003366;
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.header-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
}

.header-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.header-description {
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.6;
  margin-bottom: 0;
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
  padding: 35px 100px;
}

.image-container {
  flex: 1;
  max-width: 50%;
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
  padding: 0 20px;
}

.content p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
}

.horizontal-cards-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.card-horizontal {
  display: flex;
  flex-direction: column;
  width: 30%;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-horizontal:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 15px;
}

.card-content {
  padding: 15px;
  text-align: center;
}

.card-content h3 {
  font-size: 1.5rem;
  color: #003366;
}

.card-content p {
  font-size: 1rem;
  color: #666;
  margin-top: 10px;
}


@media (max-width: 1200px) {
  .info-container {
    padding: 0 60px;
  }

  .image-container,
  .content {
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 50%;
  }

  .main-image {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
  }

  .content {
    max-width: 50%;
    text-align: left;
    padding: 0 20px;
  }

  .content p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
  }
}

@media (max-width: 992px) {
  .info-container {
    padding: 0 20px;
  }

  .main-image {
    height: 500px;
  }

  .horizontal-cards-container {
    gap: 15px;
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

  .horizontal-cards-container {
    flex-direction: column;
  }

  .card-horizontal {
    width: 100%;
    margin-bottom: 20px;
  }

  .card-image {
    height: 200px;
  }

  .card-content {
    padding: 20px;
  }
}
</style>
