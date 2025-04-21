<template>
  <div class="preparacion-ecografias">
    <header class="page-header">
      <div class="container">
        <h1 class="main-title">Preparación para Ecografías o Ultrasonidos</h1>
      </div>
    </header>

    <div class="container">
      <div class="procedimientos-list">
        <div v-for="(procedimiento, index) in procedimientos" :key="index" class="procedimiento-card-wide">
          <div class="card-content-wide">
            <div class="card-image-wide">
              <img :src="procedimiento.imagen" :alt="procedimiento.titulo" class="img-fluid">
            </div>
            <div class="card-text-wide">
              <h3>{{ procedimiento.titulo }}</h3>
              <ul class="preparacion-list">
                <li v-for="(detalle, i) in procedimiento.detalles" :key="i">{{ detalle }}</li>
              </ul>
              <div v-if="procedimiento.nota" class="nota-importante">
                <strong>Nota:</strong> {{ procedimiento.nota }}
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
      procedimientos: [
        {
          titulo: "Ecografía de abdomen total",
          imagen: "/src/assets/procedimientos/eco-abdomen.jpg",
          detalles: [
            "Ayuno de 8 horas (no comer antes del examen)",
            "No orinar antes del examen",
            "Vestido de dos piezas preferiblemente",
            "Autorización EPS vigente (pacientes ambulatorios)",
            "Copago o cuota moderadora según corresponda",
            "Llegar 30 minutos antes de la cita",
            "Traer estudios previos"
          ],
          nota: ""
        },
        {
          titulo: "Ecografía abdomen superior hepatobiliar",
          imagen: "/src/assets/procedimientos/eco-hepato.jpg",
          detalles: [
            "Ayuno de 8 horas",
            "Última comida el día anterior a las 6-7 p.m.",
            "Autorización EPS vigente",
            "Vestido de dos piezas preferiblemente",
            "Copago o cuota moderadora",
            "Llegar 30 minutos antes",
            "Traer estudios previos"
          ],
          nota: ""
        },
        {
          titulo: "Ecografía renal/vías urinarias/pélvica",
          imagen: "/src/assets/procedimientos/eco-pelvica.jpg",
          detalles: [
            "6 horas de ayuno",
            "Dieta ligera el día anterior",
            "No suspender medicación habitual",
            "6-8 vasos de agua 1-2 horas antes",
            "Vejiga llena (no orinar antes)",
            "Autorización EPS vigente",
            "Vestido de dos piezas"
          ],
          nota: "Para ecografía obstétrica <13 semanas, no tomar líquidos"
        },
        {
          titulo: "Ecografía transvaginal",
          imagen: "/src/assets/procedimientos/eco-transvaginal.jpg",
          detalles: [
            "Vaciar vejiga antes del examen",
            "Traer 2 preservativos",
            "No suspender medicación",
            "Autorización EPS vigente",
            "Vestido de dos piezas",
            "Copago o cuota moderadora",
            "Llegar 30 minutos antes"
          ],
          nota: "Puede realizarse durante la menstruación"
        },
        {
          titulo: "Ecografía de próstata transrectal",
          imagen: "/src/assets/procedimientos/eco-transrectal.jpg",
          detalles: [
            "Enema TRAVAD el día anterior y 1 hora antes",
            "Dieta líquida el día anterior",
            "Traer 2 preservativos",
            "6-8 vasos de agua 1-2 horas antes",
            "Vejiga llena (no orinar antes)",
            "Autorización EPS vigente",
            "Ayunas 6-8 horas"
          ],
          nota: ""
        },
        {
          titulo: "Ecografía mamaria",
          imagen: "/src/assets/procedimientos/eco-mamaria.jpg",
          detalles: [
            "Autorización EPS vigente",
            "Vestido de dos piezas preferiblemente",
            "Copago o cuota moderadora",
            "Llegar 30 minutos antes",
            "Traer mamografías y ecografías anteriores"
          ],
          nota: ""
        },
        {
          titulo: "RX columna lumbar/abdomen simple",
          imagen: "/src/assets/procedimientos/xray.jpg",
          detalles: [
            "Dieta líquida el día anterior",
            "Enema oral a las 4 p.m. día anterior",
            "Ayunas el día del examen",
            "Suspender hierro y laxantes",
            "No orinar antes del examen",
            "No fumar ni masticar chicle",
            "Evitar lácteos, gaseosas y café"
          ],
          nota: ""
        }
      ]
    };
  }
};
</script>

<style scoped>
.preparacion-ecografias {
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.page-header {
  background-color: #003366;
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.main-title {
  font-size: 2.2rem;
  font-weight: 600;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.procedimientos-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.procedimiento-card-wide {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.procedimiento-card-wide:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-content-wide {
  display: flex;
  min-height: 250px;
}

.card-image-wide {
  flex: 0 0 35%;
  max-width: 35%;
  overflow: hidden;
}

.card-image-wide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.procedimiento-card-wide:hover .card-image-wide img {
  transform: scale(1.03);
}

.card-text-wide {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.card-text-wide h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 600;
}

.preparacion-list {
  margin: 0 0 1rem 0;
  padding-left: 1.2rem;
  flex-grow: 1;
  columns: 2;
  column-gap: 2rem;
}

.preparacion-list li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
  color: #555;
  break-inside: avoid;
}

.nota-importante {
  background-color: #9c9c9c10;
  padding: 0.8rem;
  border-radius: 5px;
  font-size: 0.9rem;
  color: #003366;
  border-left: 4px solid #1368c9;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .preparacion-list {
    columns: 1;
  }
  
  .card-image-wide {
    flex: 0 0 40%;
    max-width: 40%;
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 1.8rem;
  }
  
  .card-content-wide {
    flex-direction: column;
    min-height: auto;
  }
  
  .card-image-wide {
    flex: 1 1 100%;
    max-width: 100%;
    height: 200px;
  }
  
  .card-text-wide h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 2rem 0;
  }
  
  .main-title {
    font-size: 1.5rem;
  }
  
  .card-image-wide {
    height: 180px;
  }
  
  .preparacion-list {
    padding-left: 1rem;
  }
}
</style>