<template>
     <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">CONOCENOS</h1>
        <p class="header-description">Descubre quiénes somos y por qué somos la mejor opción para tu salud.</p>
      </div>
    </header>
  <div class="about">
    <div class="breadcrumb">
    </div>

    <section class="about-section">
      <div class="container">
        <div class="section-content">
          <div class="image-wrapper">
            <div class="square blue-gray"></div>
            <div class="square dark-blue"></div>
            <div class="square light-blue"></div>
            <img src="/src/assets/clinica.png" alt="Quiénes somos" class="decorated-image" />
          </div>
          <div class="text-content">
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos una Institución Prestadora de Servicios de Salud de mediana complejidad de carácter privado,
              debidamente habilitada por la secretaría de salud de Cundinamarca. Ubicada estratégicamente en el centro
              de la ciudad de Girardot facilita el acceso en la atención a los afiliados de las diferentes entidades
              administradoras de planes de beneficios, empresas particulares y personas naturales particulares que
              operan en el Municipio de Girardot y su área de influencia. Tratamientos integrales, pertinentes y
              oportunos al usuario, son producto de nuestra atención calida y humana, distinguida por la profesionalidad
              e idoneidad de su talento humano y fundamentado en los principios de eficiencia y calidad. El respaldo de
              tres décadas de experiencia y alto reconocimiento en el sector, el equipamiento adecuado tecnología, la
              alta disposición al cambio positivo y el continuo mejoramiento de nuestros procesos, garantizan a nuestros
              usuarios un servicio de excelente calidad orientado a propender por su salud física y mental.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="section-content reverse">
          <div class="image-wrapper">
            <div class="square blue-gray"></div>
            <div class="square dark-blue"></div>
            <div class="square light-blue"></div>
            <img src="/src/assets/mision.png" alt="Misión" class="decorated-image" />
          </div>
          <div class="text-content">
            <h2>Misión</h2>
            <p>
              Somos un grupo idóneo de Talento Humano con amplia experiencia en la prestación de servicios contemplados
              en el Sistema General de Seguridad Social en Salud. Apoyados con modernas y propicias instalaciones,
              equipos de tecnología adecuada, el mejoramiento continuo de los procesos administrativos y asistenciales;
              prestamos servicios de salud de mediana complejidad dentro del marco conceptual del Sistema Obligatorio de
              Calidad en Salud, con calidez humana, buen trato, ética y eficiencia a la comunidad Girardoteña y su zona
              de influencia. Con el liderazgo de una Gerencia estratégica y el apoyo de su estructura organizacional, la
              Clínica fortalece su competitividad orientando sus esfuerzos a superar las expectativas de los usuarios
              que demandan nuestra atención paralelo a propender por asegurar los niveles de rentabilidad propuestos,
              sostenibilidad financiera y alto reconocimiento en el mercado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <div class="section-content">
          <div class="image-wrapper">
            <div class="square blue-gray"></div>
            <div class="square dark-blue"></div>
            <div class="square light-blue"></div>
            <img src="/src/assets/vision.png" alt="Visión" class="decorated-image" />
          </div>
          <div class="text-content">
            <h2>Visión</h2>
            <p>
              Consolidarnos al 2.021 como la mejor alternativa en instituciones prestadoras de servicios de Salud del
              Municipio de Girardot y su área de influencia; con cobertura de baja, mediana y alta complejidad,
              acreditada por el sistema Único de acreditación en salud y certificada en Sistema de Gestión de Calidad
              bajo la norma ISO 9001:2015. Igualmente convertirnos a nivel de prestadores de servicios de salud, en un
              centro de referencia a nivel Departamental y Nacional, líder en servicio al cliente y en garantía de
              calidad; distinguidos por el uso de recursos tecnológicos de avanzada, nuestra perfección en los
              procedimientos asistenciales y administrativos y por nuestro idóneo talento humano quienes verán en la
              Clínica, una magnifica opción para su desarrollo personal y profesional por nuestro posicionamiento en el
              sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-section {
  padding: 50px 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;

}

.section-content {
  display: flex;
  align-items: center;
  gap: 40px;

}

.reverse {
  flex-direction: row-reverse;
}

.image-wrapper {
  position: relative;
  width: fit-content;
}

.decorated-image {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.square {
  position: absolute;
  width: 130px;
  height: 130px;
  opacity: 0.8;
  z-index: 1;
}

.blue-gray {
  background-color: #7a8a99;
  top: -40px;
  left: -40px;
  z-index: 1;
}

.dark-blue {
  background-color: #003366;
  bottom: -30px;
  right: -50px;
  z-index: 1;
}

.light-blue {
  background-color: #5d86a6;
  top: 20px;
  right: 40px;
  z-index: 0;
}

.text-content {
  max-width: 600px;
  padding-left: 20px;
}
</style>
