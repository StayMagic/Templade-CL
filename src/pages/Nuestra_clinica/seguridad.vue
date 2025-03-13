<template>
  <div class="position-relative overflow-hidden text-center bg-light">
    <img src="/src/assets/clinica_extend.png" class="d-block w-100" height="150" alt="Clinica">
    <div class="row justify-content-center">
      <div class="col-md-11 col-12 mt-4 text-left">
        <h1 class="pb-4 mb-4 font-italic border-bottom">
          Metas De Seguridad
        </h1>
        <p class="lead">
          Las Metas Internacionales de Seguridad del Paciente son una de las estrategias prioritarias, evaluadas por la
          Joint Commission International, para acreditar la calidad y seguridad de la atención de hospitales y clínicas
          que adoptan estas acciones para la seguridad de los pacientes.
        </p>
        <p class="lead">
          La Clínica Especialistas implementa las metas internacionales de seguridad del paciente para fortalecer la calidad en la atención.
        </p>
        <div class="row justify-content-center">
          <!-- Tarjetas de Meta #1 a Meta #7 -->
          <div
            class="col-10 col-md-3 pt-5 carta"
            v-for="(meta, index) in metas"
            :key="index"
          >
            <div class="card shadow-custom">
              <div class="card-body">
                <h2 class="card-title">Meta #{{ index + 1 }}</h2>
                <p class="card-text">{{ meta }}</p>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      metas: [
        'Identificar correctamente a los pacientes',
        'Mejorar la comunicación efectiva',
        'Mejorar la seguridad de los medicamentos de alto riesgo',
        'Garantizar la cirugía en el lugar correcto, con el procedimiento y paciente correcto',
        'Reducir el riesgo de infecciones asociadas a la atención en salud',
        'Reducir el riesgo de los daños al paciente causado por caídas',
        'Prevenir la aparición de zonas de presión en el paciente',
      ],
    };
  },
};
</script>

<style scoped>
/* Estilo de la tarjeta principal */
.card {
  border-radius: 20px;
  background-color: #f9f9f9;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* Sombra personalizada para las tarjetas */
.shadow-custom {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

/* Estilo del cuerpo de la tarjeta */
.card-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #003366;
}

.card-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

/* Media Queries para pantallas más pequeñas */
@media only screen and (max-width: 768px) {
  .card {
    height: auto;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.875rem;
  }
}

.carta {
  margin-left: 1rem !important;
  margin-right: 1rem !important;
}
</style>
