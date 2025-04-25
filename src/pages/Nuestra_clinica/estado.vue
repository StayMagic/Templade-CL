<template>
  <div class="financial-statements">
    <!-- Encabezado -->
    <header class="header">
      <h1>ESTADOS FINANCIEROS</h1>
      <p>Consulta nuestra información financiera actualizada</p>
    </header>
    
    <!-- Contenedor de documentos -->
    <div class="documentos-container">
      <!-- Filtros simples -->
      <div class="filtros">
        <input 
          v-model="busqueda" 
          type="text" 
          placeholder="Buscar documentos..." 
          class="busqueda-input"
        />
        <select v-model="yearFiltro" class="year-select">
          <option value="todos">Todos los años</option>
          <option v-for="year in ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']" :key="year">
            {{ year }}
          </option>
        </select>
      </div>
      
      <!-- Cuadrícula de documentos -->
      <div class="documentos-grid">
        <div 
          v-for="(doc, index) in documentosFiltrados" 
          :key="index"
          class="documento-card"
        >
          <div class="documento-icon">
            <img src="/src/assets/PDF_file_icon.svg.png" alt="PDF Icon" />
          </div>
          <div class="documento-info">
            <h3>{{ doc.titulo }}</h3>
            <p>{{ doc.descripcion }}</p>
          </div>
          <div class="documento-actions">
            <a :href="doc.url" target="_blank" class="btn-abrir">
              Abrir
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal para visualizar el documento -->
   
    </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: '',
      yearFiltro: 'todos',
      documentoActual: null,
      documentos: [
        {
          titulo: 'Estado Financiero 2017',
          descripcion: 'Informe financiero anual',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2017.pdf',
          year: '2017'
        },
        {
          titulo: 'Estados Financieros 2018',
          descripcion: 'Balance general y estado de resultados',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2018.pdf',
          year: '2018'
        },
        {
          titulo: 'Estado Financiero 2019',
          descripcion: 'Información financiera consolidada',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2019.pdf',
          year: '2019'
        },
        {
          titulo: 'Estado Financiero 2020',
          descripcion: 'Reporte financiero anual',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2020.pdf',
          year: '2020'
        },
        {
          titulo: 'Estado Financiero 2021',
          descripcion: 'Estados contables auditados',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2021.pdf',
          year: '2021'
        },
        {
          titulo: 'Estado Financiero 2022',
          descripcion: 'Reporte financiero completo',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2022.pdf',
          year: '2022'
        },
        {
          titulo: 'Estado Financiero 2023',
          descripcion: 'Últimos estados financieros',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2023.pdf',
          year: '2023'
        },
        {
          titulo: 'Estado Financiero 2024',
          descripcion: 'Información financiera actualizada',
          url: '/src/assets/document/ESTADOS_FINANCIEROS_2024.pdf',
          year: '2024'
        }
      ]
    };
  },
  computed: {
    documentosFiltrados() {
      return this.documentos.filter(doc => {
        // Filtrar por año
        if (this.yearFiltro !== 'todos' && doc.year !== this.yearFiltro) {
          return false;
        }
        
        // Filtrar por búsqueda
        if (this.busqueda) {
          const busquedaLower = this.busqueda.toLowerCase();
          return doc.titulo.toLowerCase().includes(busquedaLower) || 
                doc.descripcion.toLowerCase().includes(busquedaLower);
        }
        
        return true;
      });
    }
  },
  methods: {
    verDocumento(doc) {
      // Ahora pasamos el objeto completo del documento en lugar de solo la URL
      this.documentoActual = doc;
    },
    cerrarModal() {
      this.documentoActual = null;
    },
    abrirEnNuevaPestana(url) {
      window.open(url, '_blank');
    }
  },
  mounted() {
    // Comprobamos si podemos acceder a los archivos PDF en la ruta especificada
    console.log("Comprobando acceso a documentos PDF...");
    // Esto ayudará a depurar en la consola del navegador si hay problemas de ruta
    
    // Opcional: verificar que las rutas sean correctas
    fetch(this.documentos[0].url)
      .then(response => {
        if (response.ok) {
          console.log("PDF accesible correctamente");
        } else {
          console.error("Error al acceder al PDF:", response.status);
        }
      })
      .catch(error => {
        console.error("Error al acceder al PDF:", error);
      });
  }
};
</script>

<style scoped>
/* Estilos básicos */
.financial-statements {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f5f5f5;
  min-height: 100vh;
}

/* Encabezado */
.header {
  background-color: #003366;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.2rem;
  margin: 0 0 10px 0;
}

.header p {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
}

/* Contenedor principal */
.documentos-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
}

/* Filtros */
.filtros {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.busqueda-input, .year-select {
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.busqueda-input {
  flex: 1;
  min-width: 200px;
}

.year-select {
  width: 150px;
}

/* Cuadrícula de documentos */
.documentos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.documento-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 25px;
  display: flex;
  flex-direction: column;
}



.documento-icon {
  text-align: center;
  margin-bottom: 15px;
}

.documento-icon img {
  width: 50px;
  height: auto;
}

.documento-info {
  flex-grow: 1;
  margin-bottom: 20px;
}

.documento-info h3 {
  font-size: 18px;
  margin: 0 0 10px 0;
  color: #003366;
}

.documento-info p {
  font-size: 14px;
  color: #666;
  margin: 0;
  line-height: 1.4;
}

.documento-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.btn-abrir {
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  text-align: center;
  text-decoration: none;
}

.btn-abrir:hover {
  background-color: #083058;
}

/* Modal */
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
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 900px;
  position: relative;
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  font-size: 18px;
}

.modal-body {
  padding: 20px;
}

.close-btn {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background-color: #ff0000;
}

.pdf-object {
  border: 1px solid #eee;
}

.pdf-fallback {
  text-align: center;
  padding: 40px;
  border: 1px dashed #ccc;
  border-radius: 5px;
}

.btn-download {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.btn-download:hover {
  background-color: #1d4ed8;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .filtros {
    flex-direction: column;
  }
  
  .busqueda-input, .year-select {
    width: 100%;
  }
  
  .header h1 {
    font-size: 1.8rem;
  }
  
  .modal-content {
    width: 95%;
  }
}
</style>