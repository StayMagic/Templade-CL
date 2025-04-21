<template>
  <section class="safety-goals-section">
    <!-- Hero Banner -->
    <div class="hero-banner">
      <img src="/src/assets/clinica_extend.png" class="banner-image" alt="Clínica">
      <div class="banner-overlay">
        <div class="container">
          <h1 class="banner-title">Metas Internacionales de Seguridad</h1>
          <div class="banner-decoration"></div>
        </div>
      </div>
    </div>
    
    <!-- Contenido Principal -->
    <div class="container py-5">
      <!-- Introducción -->
      <div class="intro-section">
        <div class="intro-icon"><i class="icofont-shield"></i></div>
        <div class="intro-content">
          <h2 class="intro-title">Compromiso con la Seguridad del Paciente</h2>
          <p class="intro-text">
            Las Metas Internacionales de Seguridad del Paciente son estrategias prioritarias evaluadas por la
            Joint Commission International para acreditar la calidad y seguridad de la atención en instituciones de salud.
            La Clínica Especialistas implementa estas metas para fortalecer la calidad en la atención.
          </p>
        </div>
      </div>
      
      <!-- Contador de Metas -->
      <div class="goals-counter">
        <div class="counter-item">
          <div class="counter-value">7</div>
          <div class="counter-label">Metas de Seguridad</div>
        </div>
        <div class="counter-item">
          <div class="counter-value">100%</div>
          <div class="counter-label">Compromiso</div>
        </div>
      </div>
      
      <!-- Sección de Metas -->
      <div class="goals-container">
        <div class="goals-header">
          <h2 class="section-title white-title">Nuestras Metas de Seguridad</h2>
          <p class="section-description">Estrategias implementadas para garantizar su seguridad</p>
        </div>
        
        <!-- Tarjetas de Metas -->
        <div class="row">
          <div v-for="(meta, index) in metas" :key="index" class="col-12 mb-4">
            <div class="goal-card-expanded">
              <div class="goal-header">
                <div class="goal-icon">
                  <span class="goal-number">{{ index + 1 }}</span>
                </div>
                <h3 class="goal-title">{{ meta.titulo }}</h3>
              </div>
              <div class="goal-content">
                <p class="goal-description">{{ meta.descripcion }}</p>
                <div class="goal-details">
                  <div class="details-column">
                    <h4 class="details-title"><i class="icofont-check-circled"></i> Procedimientos clave</h4>
                    <ul class="details-list">
                      <li v-for="(proc, i) in meta.procedimientos" :key="i">{{ proc }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      metas: [
        {
          titulo: "Identificar correctamente a los pacientes",
          descripcion: "Garantizamos que cada paciente reciba el tratamiento correcto mediante sistemas de identificación seguros, previniendo errores en todos los procesos asistenciales.",
          procedimientos: [
            "Uso de brazaletes con dos identificadores únicos",
            "Verificación activa antes de cada procedimiento",
            "Protocolos de doble verificación para procedimientos críticos"
          ]
        },
        {
          titulo: "Mejorar la comunicación efectiva",
          descripcion: "Optimizamos los procesos de comunicación entre profesionales de la salud, especialmente en momentos críticos como el traspaso de información clínica o instrucciones verbales importantes.",
          procedimientos: [
            "Implementación del método SBAR para comunicaciones clínicas",
            "Protocolo de repetición verbal para órdenes verbales o telefónicas",
            "Sistematización del proceso de traspaso entre turnos"
          ]
        },
        {
          titulo: "Mejorar la seguridad de los medicamentos de alto riesgo",
          descripcion: "Minimizamos los errores en la administración de medicamentos con mayor potencial de causar daño significativo mediante protocolos específicos de control y verificación.",
          procedimientos: [
            "Etiquetado especial con alertas visuales",
            "Doble verificación independiente antes de la administración",
            "Uso de bombas de infusión con sistemas de seguridad"
          ]
        },
        {
          titulo: "Garantizar la cirugía en el lugar correcto, con el procedimiento y paciente correcto",
          descripcion: "Prevenimos errores durante procedimientos quirúrgicos asegurando la verificación sistemática del paciente, sitio y procedimiento correcto en cada intervención.",
          procedimientos: [
            "Protocolo universal de verificación preoperatoria",
            "Marcado del sitio quirúrgico con participación del paciente",
            "Realización de \"Time Out\" o pausa quirúrgica obligatoria"
          ]
        },
        {
          titulo: "Reducir el riesgo de infecciones asociadas a la atención en salud",
          descripcion: "Minimizamos el riesgo de infecciones adquiridas durante la atención sanitaria mediante prácticas basadas en evidencia y protocolos estrictos de prevención.",
          procedimientos: [
            "Programa de higiene de manos con los 5 momentos de la OMS",
            "Paquetes de medidas para prevención de infecciones asociadas a dispositivos",
            "Vigilancia epidemiológica activa"
          ]
        },
        {
          titulo: "Reducir el riesgo de los daños al paciente causado por caídas",
          descripcion: "Prevenimos las caídas de pacientes mediante la identificación de factores de riesgo y la implementación de medidas preventivas adaptadas a cada situación.",
          procedimientos: [
            "Evaluación del riesgo al ingreso y reevaluación periódica",
            "Identificación visual de pacientes con alto riesgo",
            "Adecuación del entorno físico para prevenir caídas"
          ]
        },
        {
          titulo: "Prevenir la aparición de zonas de presión en el paciente",
          descripcion: "Prevenimos las úlceras por presión en pacientes con movilidad reducida mediante evaluación del riesgo y estrategias de prevención basadas en evidencia.",
          procedimientos: [
            "Evaluación del riesgo utilizando escalas validadas",
            "Cambios posturales programados según protocolo",
            "Uso de superficies especiales de manejo de presión"
          ]
        }
      ]
    };
  }
};
</script>

<style>
:root {
  --primary-color: #003366;
  --secondary-color: #0066cc;
  --accent-color: #ffffff;
  --text-color: #333333;
  --light-color: #ffffff;
  --border-color: #e0e0e0;
}

.safety-goals-section {
  color: var(--text-color);
  font-family: 'Arial', sans-serif;
}

/* Hero Banner */
.hero-banner {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 51, 102, 0.85);
  display: flex;
  align-items: center;
}

.banner-title {
  color: var(--light-color);
  font-size: 2.5rem;
  font-weight: 700;
}

.banner-decoration {
  width: 80px;
  height: 4px;
  background-color: var(--accent-color);
  margin-top: 15px;
}

/* Sección de introducción */
.intro-section {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  padding: 2rem 0;
}

.intro-icon {
  flex: 0 0 80px;
  height: 80px;
  background-color: var(--primary-color);
  color: var(--light-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
}

.intro-icon i {
  font-size: 2.5rem;
}

.intro-content {
  flex: 1;
}

.intro-title {
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.intro-text {
  font-size: 1rem;
  line-height: 1.6;
}

/* Contador de metas */
.goals-counter {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.counter-item {
  text-align: center;
  margin: 0 2rem;
}

.counter-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
}

.counter-label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Encabezado de sección de metas */
.goals-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.white-title {
  color: var(--light-color);
}

.section-description {
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* Tarjetas de metas */
.goal-card-expanded {
  background-color: var(--light-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 51, 102, 0.1);
  overflow: hidden;
}

.goal-header {
  background-color: var(--primary-color);
  padding: 1.5rem;
  display: flex;
  align-items: center;
}

.goal-icon {
  width: 60px;
  height: 60px;
  background-color: var(--light-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
}

.goal-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
}

.goal-title {
  color: var(--light-color);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.goal-content {
  padding: 1.5rem;
}

.goal-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.goal-details {
  display: flex;
  flex-wrap: wrap;
}

.details-column {
  flex: 1;
  min-width: 250px;
  padding: 0 10px;
  margin-bottom: 1rem;
}

.details-title {
  color: var(--primary-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.details-title i {
  margin-right: 8px;
}

.details-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.details-list li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  line-height: 1.5;
}

.details-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .intro-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .goals-counter {
    flex-direction: column;
  }
  
  .counter-item {
    margin: 1rem 0;
  }
  
  .goal-header {
    flex-direction: column;
    text-align: center;
  }
  
  .goal-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
  
  .details-column {
    flex: 1 0 100%;
  }
}
</style>
