<template>
<header class="section-header">
      <div class="header-content">
        <h1 class="header-title">REQUISITOS PARA LA ENTREGA DE LA COPIA DE LA HISTORIA</h1>
        <p class="header-description">Almacen de documentos historiales clinicas, resultados de Examenes, radiografias</p>
      </div>
    </header>
  <section class="apoyo-diagnostico-section">
    <div class="info-container">
      <div class="image-container">
        <img src="/src/assets/archivo.png" alt="Apoyo Diagnóstico" class="main-image" />
      </div>

      <div class="content">
        <p>
          “La historia clínica es un documento legal por lo tanto solo puede ser entregada al titular de la misma o con
          autorización firmada por un tercero. En caso de tratarse de un menor de edad o persona discapacitada se
          entregará al responsable o representante legal del paciente, autoridades judiciales previstas en ley”.
          (Resolución 1995 de 1999)
        </p>
        <ul>
          <li><strong>Dueño de la Historia Clínica (Mayor de edad)</strong>
            <ul>
              <li>Presentar documento de identidad original (C.C, C.E, Pasaporte).</li>
            </ul>
          </li>
          <li><strong>A un Tercero Autorizado</strong>
            <ul>
              <li>Presentar carta de autorización al departamento de archivo explicando el motivo de la solicitud.</li>
              <li>Fotocopia del documento de identidad del paciente.</li>
              <li>Fotocopia del documento de identidad del autorizado.</li>
              <li>Presentar el documento de identidad del autorizado.</li>
            </ul>
          </li>
          <li><strong>Paciente Menor de edad o persona en condición de discapacidad mental o física</strong>
            <ul>
              <li>Carta de solicitud del padre, madre o representante legal explicando el motivo de la solicitud.</li>
              <li>Fotocopia del documento de identificación del paciente (R.C, T.I y C.C.).</li>
              <li>Fotocopia del documento de identidad del padre, madre o representante legal.</li>
              <li>Presentar documento de identidad del solicitante.</li>
            </ul>
          </li>
          <li><strong>Paciente Fallecido</strong>
            <ul>
              <li>Presentar carta de solicitud al departamento de archivo explicando el motivo de la solicitud.</li>
              <li>Anexar fotocopia del Registro Civil de Defunción.</li>
              <li>Fotocopia de la cédula del paciente, registro civil o tarjeta de identidad (según el caso).</li>
              <li>Fotocopia de la cédula del solicitante.</li>
              <li>Registro civil para verificar el parentesco. En caso de que sea hijo y/o padres. Si el solicitante es
                esposo o esposa, Registro de Matrimonio, si es compañero o compañera presentar extra-juicio de
                convivencia.</li>
            </ul>
          </li>
          <p><strong>NOTA:</strong> En el caso de paciente fallecido, una vez radicada la solicitud con la documentación
            completa; se le hará entrega de esta en dos (2) días hábiles.</p>
        </ul>
      </div>
    </div>

    <div class="horizontal-cards-container">
      <div class="card-horizontal">
        <img src="/src/assets/archivo.png" alt="Tomografía Computarizada" class="card-image" />
        <div class="card-content">
          <h3>Tomografía Computarizada</h3>
          <p>Descripción breve sobre la Tomografía Computarizada y su importancia en el diagnóstico.</p>
        </div>
      </div>

      <div class="card-horizontal">
        <img src="/src/assets/archivo.png" alt="Resonancia Magnética" class="card-image" />
        <div class="card-content">
          <h3>Resonancia Magnética</h3>
          <p>Información sobre la Resonancia Magnética y su rol en la evaluación médica.</p>
        </div>
      </div>

      <div class="card-horizontal">
        <img src="/src/assets/archivo.png" alt="Laboratorio Clínico" class="card-image" />
        <div class="card-content">
          <h3>Laboratorio Clínico</h3>
          <p>Breve descripción del laboratorio clínico y su relevancia en los estudios médicos.</p>
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

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
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
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .info-container {
    flex-direction: column;
    text-align: center;
  }

  .main-image {
    max-width: 100%;
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
}
</style>