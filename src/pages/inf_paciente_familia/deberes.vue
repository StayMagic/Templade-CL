<template>
  <div>
    <!-- Encabezado con título principal -->
    <header class="about-header">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
      <div class="container">
        <h1 class="main-title">Derechos y Deberes del Pacientes</h1>
      </div>
    </header>

    <div class="container">
      <div class="accordion">
        <!-- Derechos Generales -->
        <div class="accordion-item">
          <div class="accordion-header" @click="toggleSection('derechos')">
            <h2 class="section-title">Derechos</h2>
          </div>
          <div v-if="activeSection === 'derechos'" class="accordion-body">
            <ul>
              <li v-for="(derecho, index) in derechos" :key="'derecho-' + index" class="list-item">
                <i :class="derecho.icono" class="list-icon"></i>
                <span>{{ derecho.texto }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Derechos Pacientes con Discapacidad -->
        <div class="accordion-item">
          <div class="accordion-header" @click="toggleSection('derechosDiscapacidad')">
            <h2 class="section-title">Derechos del Paciente con Discapacidad</h2>
          </div>
          <div v-if="activeSection === 'derechosDiscapacidad'" class="accordion-body">
            <ul>
              <li v-for="(derecho, index) in derechosDiscapacidad" :key="'discapacidad-' + index" class="list-item">
                <i :class="derecho.icono" class="list-icon"></i>
                <span>{{ derecho.texto }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Deberes del Paciente -->
        <div class="accordion-item">
          <div class="accordion-header" @click="toggleSection('deberes')">
            <h2 class="section-title">Deberes</h2>
          </div>
          <div v-if="activeSection === 'deberes'" class="accordion-body">
            <ul>
              <li v-for="(deber, index) in deberes" :key="'deber-' + index" class="list-item">
                <i :class="deber.icono" class="list-icon"></i>
                <span>{{ deber.texto }}</span>
              </li>
            </ul>
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
      activeSection: null, // Define qué sección está abierta en el acordeón
      derechos: [
        { texto: "Derecho a la privacidad y confidencialidad de su historia médica", icono: "fa fa-lock" },
        { texto: "Derecho a recibir o rehusar apoyo espiritual", icono: "fa fa-heart" },
        { texto: "Derecho a aceptar o rechazar la donación de órganos", icono: "fa fa-gift" },
        { texto: "Derecho a elegir libremente su institución de salud", icono: "fa fa-stethoscope" },
        { texto: "Derecho a conocer sus derechos y deberes administrativos y económicos", icono: "fa fa-book" },
        { texto: "Derecho a conocer los costos de los servicios obtenidos", icono: "fa fa-dollar-sign" },
        { texto: "Derecho a participar o no en investigaciones científicas", icono: "fa fa-flask" },
        { texto: "Derecho a morir con dignidad", icono: "fa fa-sad-tear" },
        { texto: "Derecho a recibir información clara sobre su enfermedad y tomar decisiones sobre su tratamiento", icono: "fa fa-info-circle" },
        { texto: "Derecho a recibir una atención en salud cumpliendo con los parámetros de calidad y seguridad", icono: "fa fa-check-circle" },
        { texto: "Derecho a expresar su opinión sobre los servicios recibidos y recibir respuesta", icono: "fa fa-comment" },
        { texto: "Derecho a acceder a los servicios de salud con una atención integral y de alta calidad sin restricciones", icono: "fa-solid fa-truck-medical" },
        { texto: "Derecho a recibir un trato digno, respetando su intimidad, opinión, creencias y costumbres", icono: "fa fa-user-alt" }
      ],
      derechosDiscapacidad: [
        { texto: "Derecho a no ser discriminado por ningún motivo y en ninguna ocasión", icono: "fa fa-wheelchair" },
        { texto: "Derecho a fácil acceso a la institución de salud (arquitectura sin barreras)", icono: "fa fa-building" },
        { texto: "Derecho a recibir atención en salud basada en el respeto por la diferencia y la diversidad", icono: "fa fa-users" },
        { texto: "Derecho a ser protegidos contra el abuso mientras estén en la institución", icono: "fa fa-shield-alt" },
        { texto: "Derecho al respeto de su privacidad, dignidad y autonomía", icono: "fa fa-shield-alt" },
        { texto: "Derecho a un acceso adecuado y oportuno a programas de habilitación y rehabilitación", icono: "fa-solid fa-user-nurse" },
        { texto: "Derecho a recibir información sobre su salud con los medios de comunicación más apropiados", icono: "fa fa-info-circle" },
        { texto: "Derecho a expresar su opinión sobre los servicios recibidos y recibir una respuesta", icono: "fa fa-comment" },
        { texto: "Derecho a participar activamente en la asociación de usuarios de la institución", icono: "fa fa-users-cog" }
      ],
      deberes: [
        { texto: "Deber de cuidar su salud, la de su familia y la de su comunidad", icono: "fa fa-heart" },
        { texto: "Deber de dar información clara y completa sobre su estado de salud", icono: "fa fa-info-circle" },
        { texto: "Deber de tratar con dignidad al personal de salud y respetar la intimidad de los demás pacientes", icono: "fa fa-user-alt" },
        { texto: "Deber de cumplir las recomendaciones del personal de salud", icono: "fa fa-check-circle" },
        { texto: "Deber de cuidar los recursos del sistema y las instalaciones de la institución de salud", icono: "fa fa-building" },
        { texto: "Deber de actuar de manera solidaria ante situaciones que pongan en peligro la vida o salud de las personas", icono: "fa fa-handshake" },
        { texto: "Deber de reportar cualquier situación anómala o que atente contra sus derechos como paciente", icono: "fa fa-exclamation-triangle" },
        { texto: "Deber de asistir puntualmente a las citas médicas y de servicios, o informar si no puede asistir", icono: "fa fa-clock" }
      ]
    };
  },
  methods: {
    toggleSection(section) {
      // Si la sección está ya abierta, la cierra, si no, la abre
      this.activeSection = this.activeSection === section ? null : section;
    }
  }
};
</script>

<style scoped>
/* Estilos del encabezado */
.about-header {
  background: #003366;
  padding: 20px 0;
  text-align: center;
}

.main-title {
  color: white;
  font-size: 28px;
  font-weight: bold;
}

/* Contenedor principal */
.container {
  text-align: center;
  padding: 57px;
}

/* Acordeón */
.accordion {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
}

.accordion-header {
  cursor: pointer;
  background-color: #003366;
  color: white;
  padding: 4px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  transition: background-color 0.3s;
}


.accordion-body {
  padding: 15px;
  
  border-radius: 5px;
}

/* Estilos para los items de la lista */
.list-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
}

.list-item:last-child {
  border-bottom: none;
}

.list-icon {
  font-size: 1.8rem;
  color: #003366;
  margin-right: 15px;
}

.list-item span {
  font-size: 16px;
  line-height: 1.4;
}
.section-title {
  background: #003366;
  color: white;
  padding: 10px;
  border-radius: 8px;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: bold;
}
</style>
