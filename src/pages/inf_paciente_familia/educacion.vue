<template>
    <div class="education-module">
        <header class="education-header">
            <div class="container">
                <h1 class="main-title">Línea de Educación</h1>
            </div>
        </header>

        <div class="container py-4">
            <div class="accordion-container">
                <div class="accordion-item" v-for="(tema, index) in educacion" :key="index">
                    <div 
                        class="accordion-header" 
                        @click="toggleCollapse(index)"
                        :class="{ 'active': openIndex === index }"
                        :aria-expanded="openIndex === index"
                        role="button"
                        tabindex="0"
                        @keydown.enter="toggleCollapse(index)"
                    >
                        <h2 class="mb-0">
                            {{ tema.titulo }}
                            <span class="icon-toggle" :class="{ 'rotate': openIndex === index }">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </span>
                        </h2>
                    </div>

                    <transition 
                        name="accordion" 
                        @enter="startTransition" 
                        @leave="endTransition"
                    >
                        <div v-if="openIndex === index" class="accordion-content">
                            <div class="content-grid">
                                <div 
                                    v-for="(item, subIndex) in tema.contenido" 
                                    :key="subIndex" 
                                    class="content-card"
                                >
                                    <div class="card-inner">
                                        <h3 v-if="item.subtitulo" class="card-title">{{ item.subtitulo }}</h3>
                                        
                                        <p v-if="item.texto" class="card-text">{{ item.texto }}</p>

                                        <div v-if="item.imagen && item.imagen !== ''" class="card-media">
                                            <img :src="item.imagen" class="content-image" :alt="item.subtitulo || 'Imagen ilustrativa'" loading="lazy" />
                                        </div>

                                        <div v-if="item.video" class="card-media video-wrapper">
                                            <video controls preload="metadata" class="content-video">
                                                <source :src="item.video" type="video/mp4" />
                                                Su navegador no soporta la reproducción de videos.
                                            </video>
                                            <button class="play-button" aria-label="Reproducir video">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                                </svg>
                                            </button>
                                        </div>

                                        <ul v-if="item.lista" class="card-list">
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
            openIndex: null,
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
                        { subtitulo: "¿Qué es la diabetes?", texto: "La diabetes es una enfermedad crónica, caracterizada por el aumento de nivel de glucosa en la sangre. Aunque no tiene cura, puede controlarse con cuidados adecuados.", imagen: "/src/assets/educacion/diabetes_sin2.png"},
                        { subtitulo: "Tipos de diabetes", lista: ["Diabetes tipo 1: Generalmente se presenta en la niñez o la adolescencia y los pacientes necesitan inyecciones de insulina durante toda la vida, esto debido a que su cuerpo no la produce.", "Diabetes tipo 2: Aparece por lo general en la vida adulta y está relacionada con la obesidad, la inactividad física y la alimentación malsana, en este caso."] },
                        { subtitulo: "Síntomas", lista: ["Cansancio", "Mucha sed", "Orinar frecuentemente","Pérdida de peso inexplicada","Visión borrosa","Piel seca o picazón"]  },
                        { subtitulo: "Alimentación saludable", lista: ["Incluir frutas y verduras", "Reducir la sal", "Controlar las calorías"], imagen: "" },
                        { subtitulo: "Manejo de la diabetes", video: "/src/assets/videos/manejo_dia.mp4" }
                    ]
                },
                {
                    titulo: "Cuidados de la sonda vesical",
                    contenido: [
                        { subtitulo: "Recomendaciones", lista: ["No jalar la sonda bruscamente", "Lavar las manos antes y después de tocar la sonda.", "Evitar doblar o aplastar la sonda o el tubo que la conecta a la bolsa.", "Vaciar la bolsa de orina cada 8 horas o cuando esté casi llena."], imagen: "" },
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
        },
        startTransition(el) {
            el.style.height = 'auto';
            const height = el.scrollHeight;
            el.style.height = '0px';
            // Force repaint to ensure the transition happens
            el.offsetHeight; 
            el.style.height = height + 'px';
        },
        endTransition(el) {
            el.style.height = el.scrollHeight + 'px';
            // Force repaint to ensure the transition happens
            el.offsetHeight; 
            el.style.height = '0px';
        }
    }
};
</script>

<style scoped>
:root {
    --primary-color: #1a5a96;
    --primary-dark: #003366;
    --secondary-color: #4a90e2;
    --accent-color: #ff9800;
    --text-color: #333333;
    --light-text: #666666;
    --border-color: #e0e0e0;
    --light-bg: #f8f9fa;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
    --border-radius: 8px;
}

/* Base styles */
.education-module {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text-color);
    background-color: var(--light-bg);
    line-height: 1.6;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Header */
.education-header {
    background: #003366;
    padding: 30px 0;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.main-title {
    color: white;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

/* Accordions */
.accordion-container {
    margin-top: 30px;
    border-radius: var(--border-radius);
    overflow: hidden;
}

.accordion-item {
    margin-bottom: 16px;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    background-color: white;
}

.accordion-header {
    background-color: var(--primary-color);
    color: white;
    padding: 16px 24px;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    border-radius: var(--border-radius); 
    background-color: #003366;
}



.accordion-header h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
   
}

.icon-toggle {
    transition: transform 0.3s ease;
    margin-left: auto;
}

.icon-toggle.rotate {
    transform: rotate(180deg);
}

/* Accordion content animation */
.accordion-content {
    overflow: hidden;
    transition: height 0.3s ease;
    background-color: white;
}

.accordion-enter-active,
.accordion-leave-active {
    transition: height 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
    height: 0;
}

/* Content grid */
.content-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 24px;
}

/* Cards */
.content-card {
    height: 100%;
}

.card-inner {
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
    border: 1px solid var(--border-color);
}

.card-inner:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.card-title {
    color: var(--primary-color);
    font-size: 18px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 12px;
    border-bottom: 2px solid var(--secondary-color);
    padding-bottom: 8px;
}

.card-text {
    color: var(--text-color);
    font-size: 16px;
    margin-bottom: 16px;
}

.card-media {
    margin: 16px 0;
    text-align: center;
}

.content-image {
    width: 100%;
    max-height: 180px;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: var(--transition);
}

.card-inner:hover .content-image {
    transform: scale(1.03);
}

/* Video styling */
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    margin: 16px 0;
    border-radius: var(--border-radius);
    background-color: #000;
}

.content-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: var(--transition);
}

.play-button:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translate(-50%, -50%) scale(1.1);
}

.play-button svg {
    margin-left: 4px; /* Centering the play icon */
}

/* List styling */
.card-list {
    text-align: left;
    padding-left: 20px;
    margin-top: 16px;
    color: var(--text-color);
}

.card-list li {
    margin-bottom: 8px;
    position: relative;
    padding-left: 8px;
}

.card-list li::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--secondary-color);
}

/* Responsive design */
@media (max-width: 768px) {
    .content-grid {
        grid-template-columns: 1fr;
    }

    .accordion-header {
        padding: 14px 16px;
    }

    .main-title {
        font-size: 24px;
    }

    .accordion-header h2 {
        font-size: 18px;
    }

    .card-title {
        font-size: 16px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .content-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Utility classes */
.py-4 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

.mb-0 {
    margin-bottom: 0;
}
</style>
