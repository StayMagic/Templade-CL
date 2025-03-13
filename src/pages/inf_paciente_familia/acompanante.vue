<template>
  <header class="about-header">
      <div class="container">
        <h1>Lineamiento del Acompañante</h1>
      </div>
    </header>
  <div class="contenedor">
    <div class="informacion">
      <h5>👨‍⚕️ Señor Usuario</h5>
      <p>
        Nuestro compromiso por nuestros pacientes es garantizar una atmósfera de privacidad,
        comodidad y tranquilidad, velando por una pronta recuperación. Usted juega un papel
        importante en esta labor, por esto lo invitamos a seguir las siguientes recomendaciones.
      </p>
      <hr />

      <h4>🕒 Horario de visitas en hospitalización</h4>
      <p class="horario">10:00 AM - 12:00 M y 15:00 PM - 19:00 PM</p>
      <ul>
        <li>En habitaciones unipersonales se permiten dos familiares, en bipersonales solo uno.</li>
        <li>Ingresar fuera del horario obstaculiza la labor del personal médico.</li>
        <li>Menores de 14 años deben estar acompañados de un adulto y ser autorizados.</li>
        <li>Un acompañante permanente está permitido para mayores de 65 años, menores de 12 años y discapacitados.</li>
        <li>Portar el carnet de visitantes en un lugar visible (reposición $10,000 en caso de pérdida).</li>
        <li>Para cirugía, solo se permite un acompañante mayor de edad.</li>
        <li>En urgencias, solo se permite un acompañante por usuario.</li>
        <li>En consulta externa, se autoriza solo un acompañante por paciente.</li>
      </ul>

      <hr />

      <h4>🚫 No ingrese ningún tipo de alimentos</h4>
      <ul>
        <li>Los alimentos son preparados bajo condiciones especiales para los pacientes.</li>
        <li>Traer alimentos externos puede afectar la salud o el tratamiento.</li>
        <li>No ingiera alimentos en pasillos, salas de espera o habitaciones.</li>
      </ul>

      <hr />

      <h4>❌ No ingrese al servicio si presenta las siguientes condiciones:</h4>
      <ul>
        <li>Enfermedades respiratorias, heridas abiertas o infecciones contagiosas.</li>
        <li>Ser menor de 12 años.</li>
        <li>Estado de embriaguez o bajo efectos de sustancias psicoactivas.</li>
        <li>Paciente con restricción de visitas.</li>
      </ul>

      <hr />

      <h4>⚠️ Por favor absténgase de:</h4>
      <ul>
        <li>Irrespetar la intimidad de otros pacientes.</li>
        <li>Ensuciar las instalaciones de la clínica.</li>
        <li>Fumar o consumir alimentos y bebidas dentro de la clínica.</li>
        <li>Permanecer en áreas restringidas o pasillos.</li>
        <li>Hablar en voz alta, manipular equipos médicos o usar dispositivos de grabación.</li>
        <li>Ingresar armas de fuego o cortopunzantes.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.contenedor {
  width: 100%;
  max-width: 1650px;
  margin: 20px auto;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.banner {
  width: 100%;
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 1.5rem;
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px 10px 0 0;
}

.informacion {
  text-align: left;
  padding: 1.5rem;
}

.horario {
  font-weight: bold;
  color: #234b82;
  font-size: 18px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

li::before {
  content: "●";
  margin-right: 15px;
  color: #080808;
}

@media only screen and (max-width: 767px) {
  .contenedor {
    width: 95%;
    padding: 1rem;
  }

  .banner {
    font-size: 20px;
  }

  h4 {
    font-size: 18px;
  }
}
</style>
