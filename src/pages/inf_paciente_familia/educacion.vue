<template>
    <div>
        <header class="about-header">
            <div class="container">
                <h1 class="main-title">Línea de Educación</h1>
            </div>
        </header>

        <div class="container">
            <div class="accordion">
                <div class="card quest" v-for="(tema, index) in educacion" :key="index">
                    <div class="buttom" @click="toggleCollapse(index)">
                        <h2 class="mb-0">
                            <button class="btn-toggle">
                                {{ tema.titulo }}
                                <span :class="{ 'rotate-icon': openIndex === index }"></span>
                            </button>
                        </h2>
                    </div>

                    <!-- Contenido del acordeón con animación -->
                    <transition name="fade">
                        <div v-if="openIndex === index" class="card-body">
                            <div class="row">
                                <div v-for="(item, subIndex) in tema.contenido" :key="subIndex" class="col-12 col-md-6 col-lg-4 mb-4">
                                    <!-- Card para cada paso -->
                                    <div class="step-card">
                                        <h4 v-if="item.subtitulo" class="subtitulo">{{ item.subtitulo }}</h4>
                                        <p v-if="item.texto" class="info">{{ item.texto }}</p>

                                        <!-- Imagen centrada -->
                                        <div v-if="item.imagen" class="img-container">
                                            <img :src="item.imagen" class="img-fluid fixed-size" :alt="item.subtitulo" />
                                        </div>

                                        <!-- Video dentro de la card -->
                                        <div v-if="item.video" class="video-container">
                                            <video class="video" controls>
                                                <source :src="item.video" type="video/mp4" />
                                            </video>
                                        </div>

                                        <!-- Lista fuera de la card -->
                                        <ul v-if="item.lista" class="info">
                                            <li v-for="(punto, i) in item.lista" :key="i">{{ punto }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openIndex: null, // Índice del acordeón abierto
            educacion: [
                {
                    titulo: "Uso de inhaladores",
                    contenido: [
                        { subtitulo: "Aliste el inhalador", texto: "Quite la tapa y agite el inhalador durante 30 segundos", imagen: "/src/assets/educacion/uso_inhalador.png" },
                        { subtitulo: "Conecte a la inhalocámara", texto: "Conecte el inhalador a la inhalocámara y haga una inspiración profunda", imagen: "/src/assets/educacion/uso_inhalador2.png" },
                        { subtitulo: "Ubique la inhalocámara", texto: "Cúbrase boca y nariz para evitar escape de medicamento", imagen: "/src/assets/educacion/uso_inhalador3.png" },
                        { subtitulo: "Inhalación correcta", texto: "Realice una inspiración lenta y active el inhalador", imagen: "/src/assets/educacion/uso_inhalador4.png" },
                        { subtitulo: "Tiempo de retención", texto: "Mantenga la respiración 5 segundos para mejor absorción", imagen: "/src/assets/educacion/uso_inhalador5.png" },
                        { subtitulo: "Esperar entre inhalaciones", texto: "Espere 30 segundos antes de la siguiente inhalación", imagen: "/src/assets/educacion/uso_inhalador6.png" },
                        { subtitulo: "Uso del inhalador", video: "/src/assets/videos/uso_inhalador.mp4" }
                    ]
                },
                {
                    titulo: "Prevención de caídas",
                    contenido: [
                        { subtitulo: "¿Qué es una caída?", texto: "Caída se define como la consecuencia de un evento que lanza a la persona, al piso contra su voluntad. Esta suele ser repentina.", imagen: "" },
                        { subtitulo: "Riesgo bajo", lista: ["Orientación del espacio", "Solicitar dispositivos de ayuda", "Cama en posición baja", "Evitar caminar en pisos mojados"], imagen: "/src/assets/caidas-baja.png" },
                        { subtitulo: "Riesgo medio", lista: ["Mantener barandales en alto", "Asistencia en el baño", "Evitar desplazamientos innecesarios"], imagen: "/src/assets/caidas-media.png" },
                        { subtitulo: "Riesgo alto", lista: ["Vigilancia 24 horas", "Uso de medidas de sujeción si es necesario"], imagen: "/src/assets/caidas-alta.png" },
                        { subtitulo: "Riesgo de caída", video: "/src/assets/videos/riesgo_caida.mp4" }
                    ]
                },
                {
                    titulo: "Manejo de la Diabetes",
                    contenido: [
                        {
                            subtitulo: "¿Qué es la diabetes?", texto: "La diabetes es una enfermedad crónica, caracterizada por el aumento de nivel de glucosa en la sangre. Aunque no tiene cura, puede controlarse con cuidados adecuados.", imagen: "/src/assets/educacion/diabetes_sin2.png"},
                        { subtitulo: "Tipos de diabetes", lista: ["Diabetes tipo 1: Generalmente se presenta en la niñez o la adolescencia y los pacientes necesitan inyecciones de insulina durante toda la vida, esto debido a que su cuerpo no la produce.", "Diabetes tipo 2: Aparece por lo general en la vida adulta y está relacionada con la obesida, la inactividad física y la alimentación malsana, en este caso."] },
                        { subtitulo: "Síntomas", lista: ["Cansancio", "Mucha sed", "Orinar frecuentemente","Pérdida de peso inexplicada","Visión borrosa","Piel seca o picazón"]  },
                        { subtitulo: "Alimentación saludable", lista: ["Incluir frutas y verduras", "Reducir la sal", "Controlar las calorías"], imagen: "" },
                        { subtitulo: "Manejo de la diabetes", video: "/src/assets/videos/manejo_dia.mp4" }
                    ]
                },
                {
                    titulo: "Cuidados de la sonda vesical",
                    contenido: [
                        { subtitulo: "Recomendaciones", lista: ["No jalar la sonda bruscamente", "Lavar las manos antes y después de tocar la sonda.", "Evitar doblar o aplastar la sonda o el tubo que la conecta a la bolsa.", "Vaciar la bolsa de orina cada 8 horas o cuento esté casi llena."], imagen: "" },
                        { subtitulo: "¿Cuándo cambiar la sonda?", lista: ["Cambiar de manera rutinaria cada 15 días o cuando esta se encuentre defectuosa.", "Su enfermera será la encargada de cambiar la sonda vesical cuando lo corresponda.","Se debe cambiar la bolsa recolectora cada 5-6 días."], imagen: "" },
                        { subtitulo: "Partes de la sonda vesical", lista: ["Conducto del globo.", "Conducto de evacuación de la vejiga.", "Instructivo.", "Globo.", "Apertura de la vejiga."], imagen: "" },
                        { subtitulo: "Cuidados de la sonda vesical", video: "/src/assets/videos/sonda.mp4" }
                    ]
                }
            ]
        };
    },
    methods: {
        toggleCollapse(index) {
            this.openIndex = this.openIndex === index ? null : index;
        }
    }
};
</script>

<style scoped>
/* Estilos generales */
/* Estilos generales */
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

.accordion {
    margin-top: 20px;
}

.btn-toggle {
    background-color: #003366;
    color: white;
    border: none;
    padding: 15px 25px; 
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    width: 100%;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-toggle:hover {
    background-color: #0c2847;
}

.rotate-icon {
    transition: transform 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.card-body {
    padding-top: 20px;
}

.subtitulo {
    font-size: 20px;
    color: #003366;
    font-weight: bold;
}

.info {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
}

.img-fluid {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.fixed-size {
    width: 100%;  /* Asegura que las imágenes ocupen todo el ancho del contenedor */
    height: 200px; /* Mantén la altura fija */
    object-fit: cover; /* Asegura que la imagen se recorte correctamente */
    border-radius: 8px;
}

.video-container {
    margin-top: 10px;
    width: 100%;  /* Video ocupa todo el ancho disponible */
    display: flex;
    justify-content: center;  /* Centrado horizontal del video */
}

.video {
    width: 100%;  /* Ancho completo */
    max-width: 700px; /* Limitar el tamaño máximo del video */
    height: auto;   /* Asegurarse de mantener la proporción */
    border-radius: 8px;
    margin-bottom: 20px; /* Añade un pequeño margen abajo del video */
}

.step-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center; /* Centramos el contenido dentro de la card */
    height: 330px; /* Altura fija para las cards */
    overflow: hidden; /* Para evitar que el contenido se desborde */
}

.img-container {
    display: flex;
    justify-content: center; /* Centra la imagen */
    align-items: center;
    margin-top: 10px;
}

/* Asegúrate que las imágenes estén bien adaptadas en cualquier dispositivo */
@media (max-width: 767px) {
    .step-card {
        padding: 10px; /* Reducimos el padding en pantallas pequeñas */
    }

    .fixed-size {
        width: 43%; /* La imagen ocupa el 100% en pantallas pequeñas */
        height: auto; /* Mantén la altura proporcional */
    }

    .video {
        width: 100%; /* El video ocupa el 100% en pantallas pequeñas */
    }
}

@media (min-width: 768px) {
    .col-lg-6 {
        padding: 0 20px;
    }

    .btn-toggle {
        font-size: 20px;
        padding: 15px;
    }
}

</style>
