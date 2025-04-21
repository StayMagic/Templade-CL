<template>
  <section class="faq-section">
    <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">PREGUNTAS FRECUENTES</h1>
        <div class="header-decoration"></div>
        <p class="header-description">Encuentra respuestas rápidas a tus dudas más comunes</p>
      </div>
    </header>
    
    <div class="d-flex justify-content-center my-5">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-md-9">
            <div class="accordion">
              <div v-for="(question, index) in questions" :key="index" class="faq-card mb-4">
                <div class="card-header bg-transparent border-0 p-0">
                  <h2 class="mb-0">
                    <button class="btn btn-block text-left d-flex justify-content-between align-items-center"
                            type="button"
                            @click="toggleCollapse(index)"
                            :aria-expanded="isOpen(index)"
                            :aria-controls="'quest' + index"
                            :class="['faq-button', isOpen(index) ? 'active' : '']">
                      <div class="d-flex align-items-center">
                        <span class="faq-number">{{ index + 1 }}</span>
                        <span class="faq-question">{{ question.question }}</span>
                      </div>
                      <div class="icon-container">
                        <i :class="['icofont', isOpen(index) ? 'icofont-simple-up' : 'icofont-simple-down']"></i>
                      </div>
                    </button>
                  </h2>
                </div>
                <div :id="'quest' + index"
                     class="collapse"
                     :class="{ show: isOpen(index) }"
                     :aria-labelledby="'heading' + index">
                  <div class="faq-body">
                    <p v-if="question.answerTitle" class="answer-title">{{ question.answerTitle }}</p>
                    <ul class="answer-list">
                      <li v-for="(item, subIndex) in question.answerDetails" :key="subIndex" class="answer-item">
                        <h6 v-if="item.title" class="item-title">{{ item.title }}</h6>
                        <p v-if="item.detail" class="item-detail">{{ item.detail }}</p>
                      </li>
                    </ul>
                    <p v-if="question.additionalInfo" class="additional-info">
                      <i class="icofont-info-circle mr-2"></i>{{ question.additionalInfo }}
                    </p>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      openIndex: null,
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
            { title: "El acompañamiento permanente es una autorización especial (formato en físico) de ingreso y permanencia en el servicio de urgencias o en hospitalización, la cual es otorgada por el o la jefe de enfermería de este servicio en circunstancias específicas.", detail: "" },
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
            { title: "Si el médico considera que el paciente puede consumir alimentos, deben generar una orden escrita la cual debe ser presentada al personal de vigilancia para el ingreso de los mismos. Está prohibido el ingreso no autorizado de alimentos.", detail: "" },
          ]
        },
        {
          question: "¿Cómo puedo recibir información del paciente en urgencias?",
          answerTitle: "",
          answerDetails: [
            { title: "Puede obtener información del paciente en los horarios establecidos para brindar información en urgencias por parte de atención al usuario, estos son los mismos del horario de visita.", detail: "" },
          ]
        },
        {
          question: "¿Cuánto tarda una revaloración?",
          answerTitle: "",
          answerDetails: [
            { title: "El tiempo que se puede tardar una revaloración depende del tiempo de realización de exámenes paraclínicos o radiológicos que se hayan indicado, por lo cual el paciente debe esperar 2 horas a 6 horas en promedio, máximo 12 horas.", detail: "" },
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
          question: "¿Cuánto tiempo puede durar un paciente en observación?",
          answerTitle: "",
          answerDetails: [
            { title: "Cuando un paciente requiere estar en observación el tiempo estimado es de 12 horas, espacio en el que se decidirá si el paciente es dado de alta o debe permanecer en hospitalización", detail: "" },
          ]
        },
      ]
    };
  },
  methods: {
    toggleCollapse(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    }
  }
};
</script>

<style scoped>
/* Estilos Generales */
.faq-section {
  background-color: #f7f9fc;
  padding: 50px 0;
  font-family: 'Roboto', sans-serif;
}

/* Estilos del encabezado */
.section-header {
  text-align: center;
  padding: 20px 0 40px;
  position: relative;
  background: linear-gradient(to right, #f7f9fc, #e6ebf5, #f7f9fc);
  border-radius: 8px;
  margin-bottom: 40px;
}

.header-title {
  color: #003366;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-shadow: 1px 1px 2px rgba(0, 51, 102, 0.2);
  letter-spacing: 1px;
}

.header-decoration {
  height: 4px;
  width: 80px;
  background: linear-gradient(to right, #003366, #0074cc);
  margin: 0 auto 20px;
  border-radius: 2px;
}

.header-description {
  color: #4a5568;
  font-size: 1.15rem;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
}

/* Estilos del Accordion */
.accordion {
  border-radius: 12px;
  margin-bottom: 30px;
}

.faq-card {
  border: none;
  border-radius: 12px;
  margin-bottom: 16px;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
}

.faq-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.faq-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: linear-gradient(to bottom, #003366, #0074cc);
  border-radius: 4px 0 0 4px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.faq-card:hover::before {
  opacity: 1;
}

.faq-button {
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
  width: 100%;
  padding: 18px 22px;
  background-color: #003366;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.faq-button::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #0074cc, #00a8ff);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.faq-button:hover::after,
.faq-button.active::after {
  transform: scaleX(1);
}

.faq-button:hover {
  background-color: #002855;
}

.faq-button.active {
  background-color: #002244;
}

.faq-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 50%;
  margin-right: 15px;
  font-size: 0.9rem;
  font-weight: 700;
}

.faq-question {
  flex: 1;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  margin-left: 15px;
  transition: all 0.3s ease;
}

.faq-button.active .icon-container {
  background-color: rgba(255, 255, 255, 0.25);
  transform: rotate(180deg);
}

.faq-body {
  background-color: #ffffff;
  padding: 25px;
  border-radius: 0 0 8px 8px;
  border-top: 1px solid rgba(0, 51, 102, 0.1);
}

.answer-title {
  font-weight: 600;
  color: #003366;
  margin-bottom: 16px;
  font-size: 1.05rem;
  line-height: 1.6;
}

.answer-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.answer-item {
  margin-bottom: 16px;
  padding-left: 20px;
  position: relative;
  border-left: 2px solid rgba(0, 51, 102, 0.2);
  padding-bottom: 8px;
}

.answer-item:last-child {
  margin-bottom: 0;
}

.item-title {
  font-weight: 700;
  color: #003366;
  margin-bottom: 6px;
  font-size: 1rem;
}

.item-detail {
  color: #4a5568;
  margin-bottom: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.additional-info {
  margin-top: 20px;
  padding: 12px 16px;
  background-color: rgba(0, 51, 102, 0.05);
  border-left: 3px solid #003366;
  border-radius: 4px;
  color: #4a5568;
  font-size: 0.9rem;
  font-style: italic;
}

/* Responsive */
@media (max-width: 767px) {
  .header-title {
    font-size: 1.8rem;
  }
  
  .header-description {
    font-size: 1rem;
  }
  
  .faq-button {
    font-size: 0.95rem;
    padding: 14px 16px;
  }
  
  .faq-number {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
    margin-right: 10px;
  }
  
  .icon-container {
    width: 24px;
    height: 24px;
  }
  
  .faq-body {
    padding: 18px;
  }
  
  .item-title {
    font-size: 0.9rem;
  }
  
  .item-detail {
    font-size: 0.85rem;
  }
}
</style>