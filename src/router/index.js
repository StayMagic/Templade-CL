import { createRouter, createWebHistory } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue'; // Importa el layout base

const routes = [
  {
    path: '/',
    component: BaseLayout, // Usa el layout base
    children: [
      // Rutas hijas que tendrán el header y el footer
      { path: '', component: () => import('@/pages/Home.vue') }, // Ruta principal
      { path: '/conocenos', component: () => import('@/pages/About.vue') },
      { path: '/preguntas', component: () => import('@/pages/Nuestra_clinica/preguntas.vue') },
      { path: '/contactanos', component: () => import('@/pages/Contact.vue') },
      { path: '/otras-opciones/soli-historia', component: () => import('@/pages/seccion/archivo.vue') },
      { path: '/services/urgencia', component: () => import('@/pages/seccion/urgencias.vue') },
      { path: '/services/consulta', component: () => import('@/pages/seccion/consulta.vue') },
      { path: '/services/internacion', component: () => import('@/pages/seccion/internacion.vue') },
      { path: '/services/cirugia', component: () => import('@/pages/seccion/cirugia.vue') },
      { path: '/services/apoyo', component: () => import('@/pages/seccion/apoyo.vue') },
      { path: '/otras-opciones/pqrs', component: () => import('@/pages/seccion/PQRS.vue') },
      { path: '/otras-opciones/politicas', component: () => import('@/pages/Nuestra_clinica/politicas.vue') },
      { path: '/otras-opciones/estado', component: () => import('@/pages/Nuestra_clinica/estado.vue') },
      { path: '/otras-opciones/seguridad', component: () => import('@/pages/Nuestra_clinica/seguridad.vue') },
      { path: '/inf_paciente_familia/acompanante', component: () => import('@/pages/inf_paciente_familia/acompanante.vue') },
      { path: '/inf_paciente_familia/deberes', component: () => import('@/pages/inf_paciente_familia/deberes.vue') },
      { path: '/inf_paciente_familia/educacion', component: () => import('@/pages/inf_paciente_familia/educacion.vue') },
      { path: '/inf_paciente_familia/informacion', component: () => import('@/pages/inf_paciente_familia/informacion.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/cardiologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/cardiologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/endoscopia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/endoscopia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/neurologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/neurologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/ecografia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/ecografias.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/laboratorio', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/laboratorio.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/urologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/urologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/prequirurgica', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/prequirurgica.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/gastroenterologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/gastroenterologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/cirugia_general', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/cirugia_general.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/plastica', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/plastica.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/dermatologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/dermatologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/escleroterapia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/escleroterapia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/ginecologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/ginecologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/oftamologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/oftamologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/ortopedia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/ortopedia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/otorrino', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/otorrino.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/egreso', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/egreso.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/pos-urologia', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/pos-urologia.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/uroprocedimiento', component: () => import('@/pages/inf_paciente_familia/linea_de_informacion/uroprocedimiento.vue') },
      { path: '/inf_paciente_familia/linea_de_informacion/solic_citas_ext', component: () => import('@/pages/seccion/solicitud_citas.vue') },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;