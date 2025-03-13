<template>
   <header class="about-header">
              <div class="container">
                <h1 class="main-title">Línea de Información</h1>
                <p class="sub-title">Conoce todo lo necesario sobre los procedimientos médicos.</p>
              </div>
            </header>
    <div class="informacion">
      <div class="position-relative overflow-hidden pl-0 ml-0 pr-0 mr-0 text-center bg-light">
        <div class="row justify-content-center">
          <div class="col-md-10 col-12 mt-4 text-left">
            <div class="row">
              <div class="col-12">
                <h4>Bienvenido a la línea de información de la sociedad de especialistas de Girardot S.A.S</h4>
                <p>
                  Aquí podrás encontrar recomendaciones, preparaciones, signos de alarma y pautas para
                  los cuidados que debes llevar a cabo antes, durante y después de un procedimiento médico.
                  Solo debes seleccionar el área específica en el que se va a realizar el procedimiento y podrás encontrar la información allí.
                </p>
                <hr />
                <div v-for="(section, index) in sections" :key="index">
                  <h1 class="pb-3 mb-5 font-italic section-title">{{ section.title }}</h1>
                  <div class="row">
                    <div class="col-md-3 col-12 mb-4" v-for="(item, i) in section.items" :key="i">
                      <router-link :to="item.link" class="card-link">
                        <div class="card text-dark">
                          <div class="card-body text-center">
                            <i :class="item.iconClass" class="fa-3x mb-3"></i>
                            <h4 class="card-title" style="font-weight: bold;">{{ item.subtitulo }}</h4>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
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
            sections: [
                {
                    title: "Preparación medios diagnósticos",
                    items: [
                        { subtitulo: "Cardiología", link: "/inf_paciente_familia/linea_de_informacion/cardiologia", iconClass: "fa fa-heart" },
                        { subtitulo: "Endoscopía", link: "/inf_paciente_familia/linea_de_informacion/endoscopia", iconClass: "fa fa-stethoscope" },
                        { subtitulo: "Neurología", link: "/inf_paciente_familia/linea_de_informacion/neurologia", iconClass: "fa fa-brain" },
                        { subtitulo: "Ecografía", link: "/inf_paciente_familia/linea_de_informacion/ecografia", iconClass: "fa fa-x-ray" },
                        { subtitulo: "Laboratorio", link: "/inf_paciente_familia/linea_de_informacion/laboratorio", iconClass: "fa fa-flask" },
                    ]
                },
                {
                    title: "Pre cirugía",
                    items: [
                        { subtitulo: "Urología", link: "/inf_paciente_familia/linea_de_informacion/urologia", iconClass: "fa fa-tint" },
                        { subtitulo: "Prequirúrgica", link: "/inf_paciente_familia/linea_de_informacion/prequirurgica", iconClass: "fa fa-user-md" },
                        { subtitulo: "Gastroenterología", link: "/inf_paciente_familia/linea_de_informacion/gastroenterologia", iconClass: "fa fa-cutlery" },
                    ]
                },
                {
                    title: "Pos Cirugía",
                    items: [
                        { subtitulo: "Cirugía General", link: "/inf_paciente_familia/linea_de_informacion/cirugia_general", iconClass: "fa fa-hospital" },
                        { subtitulo: "Plástica", link: "/inf_paciente_familia/linea_de_informacion/plastica", iconClass: "fa fa-bed" },
                        { subtitulo: "Dermatología", link: "/inf_paciente_familia/linea_de_informacion/dermatologia", iconClass: "fa fa-heartbeat" },
                        { subtitulo: "Escleroterapia", link: "/inf_paciente_familia/linea_de_informacion/escleroterapia", iconClass: "fa fa-syringe" },
                        { subtitulo: "Ginecología", link: "/inf_paciente_familia/linea_de_informacion/ginecologia", iconClass: "fa fa-female" },
                        { subtitulo: "Oftalmología", link: "/inf_paciente_familia/linea_de_informacion/oftamologia", iconClass: "fa fa-eye" },
                        { subtitulo: "Ortopedia", link: "/inf_paciente_familia/linea_de_informacion/ortopedia", iconClass: "fa fa-bone" },
                        { subtitulo: "Otorrino", link: "/inf_paciente_familia/linea_de_informacion/otorrino", iconClass: "fa fa-user-md" },
                        { subtitulo: "Egreso", link: "/inf_paciente_familia/linea_de_informacion/egreso", iconClass: "fa fa-ambulance" },
                        { subtitulo: "Pos Urología", link: "/inf_paciente_familia/linea_de_informacion/pos-urologia", iconClass: "fa fa-tint" },
                        { subtitulo: "Uroprocedimiento", link: "/inf_paciente_familia/linea_de_informacion/uroprocedimiento", iconClass: "fa fa-tint" },
                    ]
                },
            ]
        };
    }
};
</script>

<style scoped>
.informacion {
    position: relative;
    background-color: #f4f7fa;
    padding: 0 0;
}

.main-title {
    font-size: 2.5rem;
    font-weight: bold;
}

.sub-title {
    font-size: 1.25rem;
}

.section-title {
    font-size: 1.75rem;
}

.card-link {
    text-decoration: none;
}

.card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 200px; /* Tamaño más pequeño para las tarjetas */
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-body {
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.fa-3x {
    color: #0056b3;
    margin-bottom: 15px;
}

.card-title {
    color: #333;
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 10px;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 767px) {
    .card {
        height: 180px; /* Ajustamos aún más el tamaño en móviles */
    }

    .fa-3x {
        font-size: 2rem;
    }

    .main-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.5rem;
    }
}
</style>
