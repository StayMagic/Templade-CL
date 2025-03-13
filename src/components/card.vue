<template>
    <div class="card mb-4">
      <div class="card-body">
        <h4>{{ titulo }}</h4>
        <div class="row">
          <img class="col-md-5 img-fluid" :src="imagen" :alt="titulo" />
          <ul class="col-md-7 responsive">
            <li v-for="(recomendacion, index) in recomendaciones" :key="index" class="pt-1">{{ recomendacion }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      titulo: {
        type: String,
        required: true
      },
      imagen: {
        type: String,
        required: true
      },
      recomendaciones: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  