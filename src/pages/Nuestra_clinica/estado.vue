<template>
  <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">ESTADOS FINANCIEROS</h1>
        <p class="header-description">Consulta nuestra información financiera actualizada</p>
      </div>
    </header>
  <div class="documentos-container">
    <div class="documentos-list">
      <div class="documento-card" v-for="(pdf, index) in documentos" :key="index">
        <div class="documento-info">
          <img src="@/assets/PDF_file_icon.svg.png" alt="PDF Icon" class="documento-icon" />
          <h3>{{ pdf.titulo }}</h3>
          <p>{{ pdf.descripcion }}</p>
        </div>
        <button @click="verDocumento(pdf.url)" class="btn-ver">Ver Documento</button>
      </div>
    </div>

    <div v-if="documentoActual" class="modal" @click="cerrarModal">
      <div class="modal-content" @click.stop>
        <iframe :src="documentoActual" width="100%" height="500px" frameborder="0"></iframe>
        <button @click="cerrarModal" class="close-btn">X</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      documentos: [
        {
          titulo: 'Estado Financiero 2017',
          descripcion: 'Este documento contiene las políticas de nuestra empresa.',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2017.pdf'
        },
        {
          titulo: 'Convenios de Servicio',
          descripcion: 'Aquí puedes consultar todos los convenios de servicio.',
          url: 'https://example.com/documento2.pdf'
        },
        {
          titulo: 'Estado Financiero',
          descripcion: 'Revisa el estado financiero de nuestra empresa.',
          url: 'https://example.com/documento3.pdf'
        },

        {
          titulo: 'Estado Financiero',
          descripcion: 'Revisa el estado financiero de nuestra empresa.',
          url: 'https://example.com/documento3.pdf'
        },

        {
          titulo: 'Estado Financiero',
          descripcion: 'Revisa el estado financiero de nuestra empresa.',
          url: 'https://example.com/documento3.pdf'
        },

        {
          titulo: 'Estado Financiero',
          descripcion: 'Revisa el estado financiero de nuestra empresa.',
          url: 'https://example.com/documento3.pdf'
        },
        {
          titulo: 'Estado Financiero',
          descripcion: 'Revisa el estado financiero de nuestra empresa.',
          url: 'https://example.com/documento3.pdf'
        },
        {
          titulo: 'Estado Financiero',
          descripcion: 'Revisa el estado financiero de nuestra empresa.',
          url: 'https://example.com/documento3.pdf'
        },
      ],
      documentoActual: null
    };
  },
  methods: {
    verDocumento(url) {
      this.documentoActual = url;
    },
    cerrarModal() {
      this.documentoActual = null;
    }
  }
};
</script>

<style scoped>
.documentos-container {
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.documentos-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.documento-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 250px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.documento-card:hover {
  transform: translateY(-10px);
}

.documento-info {
  margin-bottom: 15px;
}

.documento-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
}

p {
  font-size: 14px;
  color: #d6caca;
}

.btn-ver {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-ver:hover {
  background-color: #45a049;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 80%;
  max-width: 900px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 16px;
}

.close-btn:hover {
  background-color: darkred;
}
</style>