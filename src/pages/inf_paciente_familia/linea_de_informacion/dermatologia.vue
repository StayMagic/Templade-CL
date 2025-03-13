<template>
    <div class="position-relative overflow-hidden pl-0 ml-0 pr-0 mr-0 bg-light">
        <div class="container py-5">
            <header class="about-header">
            <div class="container">
                <h1 class="main-title">Recomendaciones Para Dermatlogia</h1>
            </div>
        </header>


                <!-- Holter 24 horas -->
                <div class="card mb-4">
                    <div class="card-body">
                        <h4>Recomendaciones para pacientes después del procedimiento de Dermatologia</h4>
                                <h6>Tenga en cuenta estas recomendaciones</h6>
                        <div class="row">
                            <img class="col-md-5 img-fluid" src="/src/assets/procedimientos/dermatologia.jpg" alt="Holter 24 horas" />
                            <ul class="col-md-7  responsive">
                                <li class="pt-1">Tenga cuidado de no golpear la piel cercana a la zona de la biopsia ni realizar actividades que la estiren (esto puede ocasionar sangrado). El riesgo 
                                        de sangrado aumenta si se hacen esfuerzos como practicar ejercicio, levantar objetos pesados, limpiar la casa. Evitar movimientos bruscos.</li>
                                        <li class="pt-1">Recuerde que si lo precisa, tras la realización del procedimiento, puede tomar los analgésicos ordenados por su médico. La zona del procedimiento 
                                        puede estar sensible durante unos días después del procedimiento y es normal sentir dolor leve y molestia o sensibilidad.</li>
                                        <li class="pt-1">La aparición de hinchazón en el sitio intervenido y en la piel de alrededor es común después de realizar el procedimiento; para disminuirla ponga 
                                        frío en la zona (no poner directamente hielo sobre la piel). Esta medida también ayudará para que no haya sangrado ni dolor.</li>
                                        <li class="pt-1">Si tiene sutura retirar el micropore, lavado con jabón neutro y agua al segundo día; si no hay sutura retirar el micropore al día siguiente de 
                                        la cirugía, dejar descubierta y aplicar antibiótico tópico ordenado.</li>
                                        <li class="pt-1">No baño en piscina o ríos hasta completar el proceso de cicatrización.</li>
                                        <li class="pt-1">No exposición al sol o calor directamente.</li>
                                        <li class="pt-1">Aplica un ungüento antibiótico una vez que hayas limpiado el sitio si el doctor lo ha indicado. Los ungüentos mantienen húmeda la herida y reducen la 
                                        formación de costras, lo cual ayuda a que se sane la herida. Usa un hisopo o copito limpio para aplicar el ungüento.</li>
                                        <li class="pt-1">Si el procedimiento necesitó puntos de sutura, asista a la clínica para su retiro. Es importante dejar los puntos de sutura por todo el tiempo que 
                                        indique el doctor, de modo que la herida sane de forma adecuada y no deje una cicatriz grande</li>
                                        <li class="pt-1">No tomar licor, comidas irritantes o grasosas</li>
                                        <li class="pt-1">Asista puntualmente a su control cuando tenga el resultado de patología</li>
                                    </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
               
</template>

<script>
export default {
    name: "CardiologiaPreparation",
};
</script>

<style>
.main-title {
    font-size: 2.5rem;
    font-weight: 700;
}

.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.content-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.img-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.img-fluid {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.text-container {
    display: flex;
    flex-direction: column;
}

ul.responsive {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;
    text-align: left;
}

ul.responsive li {
    margin-bottom: 10px;
}

@media screen and (max-width: 767px) {
    .main-title {
        font-size: 1.8rem;
    }

    .content-wrapper {
        flex-direction: column;
    }

    .img-container {
        order: 1;
        width: 100%;
        margin-bottom: 20px;
    }

    .text-container {
        order: 2;
        width: 100%;
    }

    .col-md-5,
    .col-md-7 {
        width: 100%;
        padding: 0 15px;
    }

    .card-body {
        padding: 15px;
    }

    ul.responsive {
        padding-left: 15px;
    }

    ul.responsive li {
        margin-bottom: 15px;
    }

    .img-fluid {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }
}
ul.responsive {
    list-style-position: outside;
    padding-left: 1.5rem;
    margin: 0;
    text-align: left;
}

ul.responsive li {
    margin-bottom: 1rem;
    line-height: 1.5;
    padding-left: 0.5rem;
}

/* Estilos móviles */
@media screen and (max-width: 767px) {
    ul.responsive {
        padding: 0 1.5rem;
        margin: 0;
        width: 100%;
        box-sizing: border-box;
    }

    ul.responsive li {
        margin-bottom: 1rem;
        padding-left: 0.5rem;
        line-height: 1.4;
        text-align: left;
        position: relative;
    }

    .card-body {
        padding: 1.25rem;
    }

    .content-wrapper {
        padding: 0 0.5rem;
    }
}
</style>