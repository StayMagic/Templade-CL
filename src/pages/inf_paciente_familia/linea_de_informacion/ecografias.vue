<template>
  <div class="position-relative overflow-hidden pl-0 ml-0 pr-0 mr-0 bg-light">
    <div class="row justify-content-center">
      <div class="col-md-11 col-12 mt-4 text-left">
        <div class="row flex">
          <div class="col-12 blog-main">
            <header class="about-header">
                        <div class="container">
                            <h1 class="main-title">Preparación para Ecografías o Ultrasonidos</h1>
                        </div>
                    </header>
            
            <!-- Procedimiento Cards -->
            <div v-for="(procedimiento, index) in procedimientos" :key="index" class="card mb-4">
              <div class="card-body">
                <h4>{{ procedimiento.titulo }}</h4>
                <div class="row">
                  <img class="col-md-3 img-size" :src="procedimiento.imagen" :alt="procedimiento.titulo">
                  <ul class="col-md-7">
                    <li v-for="(detalle, i) in procedimiento.detalles" :key="i">{{ detalle }}</li>
                  </ul>
                </div>
                <h6 v-if="procedimiento.nota">{{ procedimiento.nota }}</h6>
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
          titulo: "Instructivo de preparación para ecografía o ultrasonografía de abdomen total",
          imagen: "/src/assets/procedimientos/eco-abdomen.jpg",
          detalles: [
            "Debe tener ayuno de 8 horas (No debe comer nada antes del examen).",
            "No orine antes de realizarse el examen.",
            "Presentarse preferiblemente con vestido de dos piezas.",
            "PACIENTE AMBULATORIO: traer autorización de la EPS, con fecha vigente y dirigida a la Sociedad de Especialistas de Girardot.",
            "Debe traer el copago si es beneficiario, cuota moderadora si es cotizante.",
            "Llegar 30 minutos antes de la hora de la cita.",
            "Traer todos los estudios previos el día del examen."
          ],
          nota: ""
        },
        {
          titulo: "Ecografía o ultrasonografía de abdomen superior hepatobiliar",
          imagen: "/src/assets/procedimientos/eco-hepato.jpg",
          detalles: [
            "Debe tener ayuno de 8 horas (No debe comer nada antes del examen).",
            "El día antes del examen debe consumir el último alimento a las 6:00 o 7:00 p.m.",
            "PACIENTE AMBULATORIO: traer Autorización de la EPS, con fecha vigente y dirigida a la Sociedad de Especialistas de Girardot.",
            "Presentarse preferiblemente con vestido de dos piezas.",
            "Debe traer el copago si es beneficiario, cuota moderadora si es cotizante.",
            "Llegar 30 minutos antes de la hora de la cita.",
            "Traer todos los estudios previos el día del examen."
          ],
          nota: ""
        },
        {
          titulo: "Ecografía o ultrasonografía renal/ de vías urinarias/ obstétrica de primer trimestre/pélvica/próstata transabdominal",
          imagen: "/src/assets/procedimientos/eco-pelvica.jpg",
          detalles: [
            "Requiere 6 horas de ayuno.",
            "El día anterior al examen, dieta ligera.",
            "No debe suspender medicación habitual.",
            "Si el examen se practica en la tarde, puede desayunar respetando las 6 horas de ayuno. En el caso de paciente diabética, puede comer algo ligero sobre el mediodía.",
            "Debe tomar 6 a 8 vasos de agua 1 a 2 horas antes del procedimiento (Vejiga llena).",
            "No orine antes de realizarse el examen.",
            "PACIENTE AMBULATORIO: traer Autorización de la EPS, con fecha vigente y dirigida a la Sociedad de Especialistas de Girardot.",
            "Presentarse preferiblemente en vestido de 2 piezas.",
            "Debe traer el copago si es beneficiario, cuota moderadora si es cotizante.",
            "Llegar 30 minutos antes de la hora de la cita."
          ],
          nota: "NOTA: Para ecografía obstétrica con un tiempo de gestación menor a 13 semanas, no tomar líquidos."
        },
        {
          titulo: "Ecografía o ultrasonografía transvaginal",
          imagen: "/src/assets/procedimientos/eco-transvaginal.jpg",
          detalles: [
            "Eliminar orina antes de realizar el examen.",
            "Traer 2 preservativos o condones.",
            "No debe suspender medicación habitual.",
            "PACIENTE AMBULATORIO: traer Autorización de la EPS, con fecha vigente y dirigida a la Sociedad de Especialistas de Girardot.",
            "Presentarse preferiblemente en vestido de 2 piezas.",
            "Debe traer el copago si es beneficiario, cuota moderadora si es cotizante.",
            "Llegar 30 minutos antes de la hora de la cita.",
            "Traer todos los estudios previos el día del examen."
          ],
          nota: "NOTA: La ecografía Transvaginal se puede realizar con la menstruación."
        },
        {
          titulo: "Ecografía o ultrasonografía de próstata transrectal",
          imagen: "/src/assets/procedimientos/eco-transrectal.jpg",
          detalles: [
            "Colocarse un enema TRAVAD el día anterior al examen a las 6:00 p.m. y otra 1 hora antes del examen.",
            "Dieta líquida el día anterior al examen, no debe contener granos, grasas, lácteos, bebidas oscuras ni gaseosas. El día del examen, estar en ayunas de 6 a 8 horas.",
            "Traer 2 preservativos o condones.",
            "Debe tomar 6 a 8 vasos de agua 1 a 2 horas antes del procedimiento (Vejiga llena).",
            "No orine antes de realizarse el examen.",
            "No debe suspender medicación habitual.",
            "PACIENTE AMBULATORIO: traer Autorización de la EPS, con fecha vigente y dirigida a la Sociedad de Especialistas de Girardot.",
            "Debe traer el copago si es beneficiario, cuota moderadora si es cotizante.",
            "Llegar 30 minutos antes de la hora de la cita."
          ],
          nota: ""
        },
        {
          titulo: "Ecografía o ultrasonografía mamaria",
          imagen: "/src/assets/procedimientos/eco-mamaria.jpg",
          detalles: [
            "PACIENTE AMBULATORIO: traer Autorización de la EPS, con fecha vigente y dirigida a la Sociedad de Especialistas de Girardot.",
            "Presentarse preferiblemente con vestido de dos piezas.",
            "Debe traer el copago si es beneficiario, cuota moderadora si es cotizante.",
            "Llegar 30 minutos antes de la hora de la cita.",
            "Traer los estudios previos el día del examen como: Mamografías y ecografías anteriores."
          ],
          nota: ""
        },
        {
          titulo: "Instructivo de preparación para RX columna lumbar-sacro-cóxis/abdomen simple",
          imagen: "/src/assets/procedimientos/xray.jpg",
          detalles: [
            "Dieta líquida el día anterior (caldos, jugos, agua aromática).",
            "Desayuno: Caldo sin grasa, y colado (sin cebolla ni ajo), jugo sin leche y poca azúcar y infusión de té o aromática con poca azúcar.",
            "Almuerzo: Caldo sin grasa, jugo de cualquier fruta sin leche y con poca azúcar, gelatina, agua de anís o té o cualquier agua aromática.",
            "Comida: Igual que el almuerzo.",
            "Si siente apetito entre comidas puede tomar agua aromática, té, jugo de frutas sin leche y con poca azúcar, tomar abundante líquido. NO DEBE TOMAR: leche, gaseosa, soda, ni tinto. DEBE SUSPENDER: Cigarrillo y chicle.",
            "Venir en ayunas el día del examen.",
            "Comprar un frasco Enema oral x 133 ml; disolver en un vaso de jugo de naranja artificial, tomar a sorbos a las 4:00 p.m. del día anterior al examen.",
            "Se suspende la medicación de hierro y laxantes.",
            "No orine antes del examen."
          ],
          nota: ""
        }
      ]
    };
  }
};
</script>


<style scoped>
.card {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
}

.card-body {
  padding: 20px;
}
.img-size {
  height: 390px; /* Mantiene la proporción */
  object-fit: cover; /* Asegura que las imágenes no se deformen */
}


</style>
