<template>
     <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">PREGUNTAS FRECUENTES</h1>
        <p class="header-description">Encuentra respuestas rápidas a tus dudas más comunes</p>
      </div>
    </header>
    <div class="d-flex justify-content-center my-5"> <!-- Centrar el contenido -->
    <div class="container-fluid">
      <div class="row justify-content-center"> <!-- Centrar la fila -->
        <div class="col-12 col-md-9"> <!-- Ancho ajustado para simetría -->
          <div class="accordion">
            <div v-for="(question, index) in questions" :key="index" class="card border-0 mb-3">
              <div class="card-header bg-transparent border-0 p-0">
                <h2 class="mb-0">
                  <button class="btn btn-block text-left p-3 d-flex justify-content-between align-items-center"
                          type="button"
                          @click="toggleCollapse(index)"
                          :aria-expanded="isOpen(index)"
                          :aria-controls="'quest' + index"
                          style="background-color: #003366; color: white; border-radius: 8px;">
                    <span>{{ question.question }}</span>
                    <i :class="['icofont', isOpen(index) ? 'icofont-simple-up' : 'icofont-simple-down']"></i>
                  </button>
                </h2>
              </div>
              <div :id="'quest' + index"
                   class="collapse"
                   :class="{ show: isOpen(index) }"
                   :aria-labelledby="'heading' + index">
                <div class="card-body p-4" style="background-color: #f8f9fa; border-radius: 0 0 8px 8px;">
                  <p class="lead text-dark">{{ question.answerTitle }}</p>
                  <ul class="list-unstyled">
                    <li v-for="(item, subIndex) in question.answerDetails" :key="subIndex" class="mb-3">
                      <h6 class="text-dark font-weight-bold">{{ item.title }}:</h6>
                      <p class="text-secondary mb-0">{{ item.detail }}</p>
                    </li>
                  </ul>
                  <p v-if="question.additionalInfo" class="text-secondary pt-3">{{ question.additionalInfo }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <hr class="my-5" />

  <div class="col-md-10 col-12 mt-4 text-left pl-5 ml-3">
    <advertisement-component />
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        openIndex: null, // Almacena el índice de la pregunta abierta
        questions: [
          {
            question: "¿Cómo es el proceso de atención en la unidad de urgencias?",
            answerTitle: "El tiempo de atención en nuestra Institución está acorde a lo contemplado en la Resolución 5596 de 2015:",
            answerDetails: [
              { title: "Triage 1", detail: "Atención inmediata." },
              { title: "Triage 2", detail: "Atención aproximada en 30 minutos." },
              { title: "Triage 3", detail: "Atención aproximada de 120 minutos a 240 minutos." },
              { title: "Triage 4", detail: "Atención aproximada de 240 minutos a 360 minutos." },
              { title: "Triage 5", detail: "Atención aproximada a más de 360 minutos." }
            ],
            additionalInfo: "Estos tiempos aproximados pueden modificarse en casos de congestión en urgencias."
          },
          {
            question: "¿Cuál es el horario de visita?",
            answerTitle: "Los horarios de visitas en urgencias son todos los días de la semana de:",
            answerDetails: [
              { title: "De 10:00a.m. a 12:00m.", detail: "" },
              { title: "de 16:00p.m. a 18:00p.m", detail: "" }
            ]
          },
          {
            question: "¿Qué significa proceso de remisión?",
            answerTitle: "",
            answerDetails: [
              { title: "El proceso de remisión significa que el cado clínico del paciente es notificado a su ente asegurador (EPS) con el fin de garantizar la continuidad de atención en una institución de salud diferente a la clínica. Esto se puede dar por requerimiento de mayor complejidad de servicios o por temas administrativos.", detail: "" }
            ]
          },
          {
            question: "¿Qué significa ser un acompañante permanente?",
            answerTitle: "",
            answerDetails: [
              { title: " El acompañamiento permanente es una autorización especial (formato en físico) de ingreso y permanencia en el servicio de urgencias o en hospitalización, la cual es otorgada por el o la jefe de enfermería de este servicio en circunstancias específicas.", detail: "" },
            ]
          },
          {
            question: "¿Cuáles son los requisitos para ser un acompañante permanente?",
            answerTitle: "",
            answerDetails: [
              { title: "Para ser acompañante permanente, el paciente deberá ser mayor de 70 años, en delirium, con riesgo de caída, con riesgo de fuga, limitados para actividades básicas e instrumentales, menores de edad, o en los casos en los cuales a pesar de no cumplir con algunas de las caracteristicas anteriormente mencionadas el médico tratante lo disponga", detail: "" },
            ]
          },
          {
            question: "¿Cómo se le pueden dar alimentos a un paciente?",
            answerTitle: "",
            answerDetails: [
              { title: "Si el médico considera que el paciente puede consumir alimentos, deben generar una orden escrita la cual debe ser presentada al personal de vigilancia para el ingreso de los mismos. Está prohibido el ingreso no autorizado de alimentos. ", detail: "" },
            ]
          },
          {
            question: " ¿Cómo puedo recibir información del paciente en urgencias?",
            answerTitle: "",
            answerDetails: [
              { title: " Puede obtener información del paciente en los horarios establecidos para brindar información en urgencias por parte de atención al usuario, estos son los mismos del horario de visita.", detail: "" },
            ]
          },
          {
            question: "¿Cuánto tarda una revaloración?",
            answerTitle: "",
            answerDetails: [
              { title: " El tiempo que se puede tardar una revaloración depende del tiempo de realización de exámenes paraclínicos o radiológicos que se hayan indicado, por lo cual el paciente debe esperar 2 horas a 6 horas en promedio, máximo 12 horas.", detail: "" },
            ]
          },
          {
            question: "¿Qué significa estar en observación?",
            answerTitle: "",
            answerDetails: [
              { title: "significa que debe permanecer en vigilancia médica, teniendo en cuenta que se encuentra pendiente la evolución de su enfermedad o el resultado de pruebas diagnósticas.", detail: "" },
            ]
          },
          
          {
            question: " ¿Cuánto tiempo puede durar un paciente en observación?",
            answerTitle: "",
            answerDetails: [
              { title: " Cuando un paciente requiere estar en observación el tiempo estimado es de 12 horas, espacio en el que se decidirá si el paciente es dado de alta o debe permanecer en hospitalización", detail: "" },
            ]
          },
        ]
      };
    },
    methods: {
      toggleCollapse(index) {
        // Si la pregunta ya está abierta, ciérrala; de lo contrario, ábrela
        this.openIndex = this.openIndex === index ? null : index;
      },
      isOpen(index) {
        // Retorna true si la pregunta está abierta
        return this.openIndex === index;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos Generales */
  .accordion {
  border-radius: 12px;
  margin-bottom: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card {
  border: none;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  background-color: #ffffff;
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
}

.card-header {
  padding: 0;
  background-color: transparent;
  border: none;
}

.card-header button {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  width: 100%;
  text-align: left;
  padding: 16px 20px;
  background-color: #003366;
  border: none;
  border-radius: 12px 12px 0 0;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header button:hover {
  background-color: #002244;
  transform: translateY(-2px);
}

.card-header button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.3);
}

.card-header button i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.card-header button[aria-expanded="true"] i {
  transform: rotate(180deg);
}

.card-body {
  background-color: #ffffff;
  padding: 20px;
  font-size: 1rem;
  color: #4a5568;
  border-radius: 0 0 12px 12px;
  border-top: 1px solid #e2e8f0;
}

.card-body h6 {
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 12px;
}

.card-body ul {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.card-body li {
  margin: 12px 0;
  padding-left: 16px;
  position: relative;
}

.card-body li::before {
  content: "•";
  color: #003366;
  font-size: 1.2rem;
  position: absolute;
  left: 0;
  top: -2px;
}

.card-body .lead {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.6;
}

.card-body p.pt-5 {
  font-style: italic;
  color: #718096;
  margin-top: 20px;
}

/* Responsive */
@media (max-width: 767px) {
  .col-md-8 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .card-header button {
    font-size: 1rem;
    padding: 12px 16px;
  }

  .card-body h6 {
    font-size: 0.95rem;
  }

  .card-body li {
    font-size: 0.95rem;
  }
}
  </style>