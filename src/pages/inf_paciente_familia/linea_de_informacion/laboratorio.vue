<template>
  <div class="container-fluid">
    <!-- Card que ocupa el 100% de ancho -->
    <div class="card mb-4" style="width: 100%; border: 1px solid #ddd;">
      <div class="card-body">
        <!-- Contenido de la tarjeta -->
        <div class="position-relative overflow-hidden pl-0 ml-0 pr-0 mr-0 bg-light">
          <div class="row justify-content-center">
            <div class="col-md-11 col-12 mt-4 text-left">
              <div class="row flex">
                <div class="col-12 blog-main">
                  <header class="about-header">
                    <div class="container">
                      <h1 class="main-title">Recomendaciones de laboratorio</h1>
                    </div>
                  </header>
                  <div class="row">
                    <div class="d-flex flex-wrap align-items-center">
                      <!-- Texto a la izquierda -->
                      <div class="col-md-7">
                        <h4>Instructivo para toma de muestras de orina</h4>
                        <h6>Procedimiento</h6>
                        <ul>
                          <li class="pt-1">Marque el frasco o bolsa adhesiva con letra legible: nombres, apellidos, fecha de nacimiento y documento de identidad.</li>
                          <li class="pt-1">Aseé los genitales con agua y jabón y seque con una toalla limpia.</li>
                          <li class="pt-1">En el baño deje caer la primera parte de la primera micción de la mañana en el sanitario y parte de la orina restante, recolectela en el frasco.</li>
                          <li class="pt-1">En caso de ser un bebé o un niño sin control de esfínteres, coloque la bolsa adhesiva y quede pendiente para que no se retire la bolsa. 5cc o 10cc son suficientes.</li>
                          <li class="pt-1">En caso de pacientes con menstruación, debe dejar pasar una semana para realizar el examen.</li>
                          <li class="pt-1">Entregue la orina al laboratorio clínico.</li>
                        </ul>
                      </div>
                      <!-- Imagen a la derecha -->
                      <div class="col-md-5 text-center">
                        <img class="img-fluid" src="/src/assets/procedimientos/orina.jpg" alt="Imagen de muestra de orina" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orinaImage: '/static/img/procedimientos/orina.jpg'
    };
  },
  methods: {
    goBack() {
      // Manejar acción de volver
      console.log("Volver button clicked");
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  margin: 20px 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .d-flex {
    flex-direction: column; /* En pantallas pequeñas, las columnas se apilan */
  }
}

img {
  max-width: 100%; /* Asegura que la imagen sea responsiva */
  height: auto;
}
</style>
