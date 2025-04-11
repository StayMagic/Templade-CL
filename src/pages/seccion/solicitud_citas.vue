<template>
  <header class="section-header">
    <div class="header-content">
      <h1 class="header-title">SOLICITUD DE CITAS MEDICAS</h1>
      <p class="card-text pb-3" id="texto_solicitud">
        Recuerde que su solicitud sera atendida en un
        <b style="color:gray;">plazo no mayor a 72 horas en horario habil </b>
        de Lunes a viernes de 7am a 6pm y sábados de 8am a 12m
      </p>
    </div>
  </header>
  <main class="main-content mt-1">
    <div class="container-fluid py-0 pb-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-11 col-md-9 col-sm-12 col-12">

          <div class="card mt-3 mb-3 border-primary" style="border-radius: 0px; border: solid 2px;">
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <label style="font-weight: 900;font-size:14pt;color: black;">
                  Datos del paciente:<span class="text-success">*</span>
                </label>

                <div class="row">
                  <div class="col-sm-4 col-12 mt-1">
                    <select v-model="form.documentType" class="form-select border-primary" required>
                      <option value="">Tipo de Identificación</option>
                      <option v-for="tipo in documentTypes" :key="tipo.value" :value="tipo.value">
                        {{ tipo.label }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-4 col-12 mt-1">
                    <input v-model="form.document" type="text" class="form-control border-primary"
                      placeholder="Número de Identificación" required>
                  </div>
                  <div class="col-sm-4 col-12 mt-1">
                    <div class="d-grid gap-2 d-md-flex">
                      <button type="button" @click="buscarPaciente" class="btn btn-outline-primary me-md-2">
                        <i class="icofont-search"></i> Buscar
                      </button>
                      <button type="button" @click="mostrarFormulario" class="btn btn-primary">
                        <i class="icofont-arrow-right"></i> Continuar
                      </button>
                    </div>
                  </div>
                </div>

                <hr class="bg-primary border-primary" style="height: 3px;">

                <div v-if="showForm" class="row">

                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Primer Nombre:<span class="text-success">*</span></label>
                    <input v-model="form.firstName" type="text" class="form-control border-primary" required>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Segundo Nombre:</label>
                    <input v-model="form.secondName" type="text" class="form-control border-primary">
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Primer Apellido:<span class="text-success">*</span></label>
                    <input v-model="form.firstLastName" type="text" class="form-control border-primary" required>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Segundo Apellido:</label>
                    <input v-model="form.secondLastName" type="text" class="form-control border-primary">
                  </div>

                  <div class="col-lg-4 col-sm-6 col-12 mb-3">
                    <label>Fecha de nacimiento:<span class="text-success">*</span></label>
                    <input v-model="form.birthday" type="date" class="form-control border-primary" required>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12 mb-3">
                    <label>Teléfono movil:<span class="text-success">*</span></label>
                    <input v-model="form.phone" type="text" class="form-control border-primary" minlength="10"
                      maxlength="10" required>
                  </div>
                  <div class="col-lg-4 col-sm-6 col-12 mb-3">
                    <label>Otro número de contacto:</label>
                    <input v-model="form.secondPhone" type="text" class="form-control border-primary" minlength="7">
                  </div>


                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Departamento de <strong>residencia</strong>:<span class="text-success">*</span></label>
                    <select v-model="form.department" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option v-for="dep in departments" :key="dep.id" :value="dep.id">
                        {{ dep.name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Municipio de <strong>residencia</strong>:<span class="text-success">*</span></label>
                    <select v-model="form.municipality" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option v-for="mun in municipalities" :key="mun.id" :value="mun.id">
                        {{ mun.name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-lg-6 col-sm-12 col-12 mb-3">
                    <label>Dirección de residencia:<span class="text-success">*</span></label>
                    <input v-model="form.address" type="text" class="form-control border-primary" required>
                  </div>

                  <div class="col-12 mb-3">
                    <label>Correo Electronico:<span class="text-success">*</span></label>
                    <input v-model="form.email" type="email" class="form-control border-primary" required>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Sexo:<span class="text-success">*</span></label>
                    <select v-model="form.gender" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option value="M">MASCULINO</option>
                      <option value="F">FEMENINO</option>
                    </select>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Grupo Sanguineo:<span class="text-success">*</span></label>
                    <select v-model="form.bloodGroup" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12 mb-3">
                    <label>Rh:<span class="text-success">*</span></label>
                    <select v-model="form.rh" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option value="+">+</option>
                      <option value="-">-</option>
                    </select>
                  </div>

                  <div class="col-12">
                    <hr class="bg-primary" style="height: 3px;">
                    <label style="font-weight: 900;font-size:14pt;color: black;">
                      Datos para solicitud de cita médica:
                    </label>
                    <hr class="bg-primary" style="height: 3px;">
                  </div>

                  <div class="col-sm-6 col-12 mb-3">
                    <label>Tipo de tramite:<span class="text-success">*</span></label>
                    <select v-model="form.processType" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option value="Agendar Cita">AGENDAR CITA</option>
                      <option value="Cancelar Cita">CANCELAR CITA</option>
                      <option value="Reprogramar Cita">REPROGRAMAR CITA</option>
                    </select>
                  </div>

                  <div v-if="form.processType == 'Cancelar Cita'" class="col-12 mb-3">
                    <label>Fecha de cancelacion<span class="text-success">*</span></label>
                    <input v-model="form.cancellationDate" type="date" class="form-control border-primary" required>
                  </div>

                  <div v-if="form.processType == 'Reprogramar Cita'" class="col-12 mb-3">
                    <label>Fecha de reprogramacion<span class="text-success">*</span></label>
                    <input v-model="form.reschedulingDate" type="date" class="form-control border-primary" required>
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-12 mb-3">
                    <label>Entidad de salud:<span class="text-success">*</span></label>
                    <select v-model="form.entityHealth" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option v-for="ent in entityHealth" :key="ent.value" :value="ent.value">
                        {{ ent.label }}
                      </option>
                    </select>
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-12 mb-3">
                    <label>Si selecciono <b>OTRAS</b>, por favor escriba el nombre de la entidad:</label>
                    <input v-model="form.customHealthEntity" type="text" class="form-control border-primary">
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-sm-6 col-12 mb-3">
                    <label>Regimen:<span class="text-success">*</span></label>
                    <select v-model="form.regime" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option v-for="reg in regimeOptions" :key="reg.value" :value="reg.value">
                        {{ reg.label }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-6 col-12 mb-3">
                    <label>Especialidad:<span class="text-success">*</span></label>
                    <select v-model="form.specialty" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option v-for="esp in specialty" :key="esp.value" :value="esp.value">
                        {{ esp.label }}
                      </option>
                    </select>
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-sm-6 col-12 mb-3">
                    <label>Servicio:<span class="text-success">*</span></label>
                    <select v-model="form.service" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option v-for="serv in service" :key="serv.value" :value="serv.value">
                        {{ serv.label }}
                      </option>
                    </select>
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-sm-6 col-12 mb-3">
                    <label>Número de autorización:</label>
                    <input v-model="form.authorizationNumber" type="text" class="form-control border-primary">
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-12 mb-3">
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <label>Imagen de orden médica:</label>
                        <input type="file" ref="ordenMedica" @change="handleOrdenMedicaUpload" accept="image/*"
                          capture="user" class="form-control border-primary">
                      </div>
                      <div class="col-sm-6 col-12 mt-1 text-center">
                        <img v-if="ordenMedicaPreview" :src="ordenMedicaPreview" class="img-fluid" style="width:40%;">
                      </div>
                    </div>
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-12 mb-3">
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <label>Imagen de Autorización de su EPS:</label>
                        <input type="file" ref="autorizacionEps" @change="handleAutorizacionEpsUpload" accept="image/*"
                          capture="user" class="form-control border-primary">
                      </div>
                      <div class="col-sm-6 col-12 mt-1 text-center">
                        <img v-if="autorizacionEpsPreview" :src="autorizacionEpsPreview" class="img-fluid"
                          style="width:40%;">
                      </div>
                    </div>
                  </div>

                  

                  <div class="col-12 mb-3 text-center">
                    <button type="submit" class="btn btn-primary">
                      <i class="icofont-check-circled"></i> Enviar Solicitud
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        documentType: "",
        document: "",
        firstName: "",
        secondName: "",
        firstLastName: "",
        secondLastName: "",
        birthday: "",
        phone: "",
        secondPhone: "",
        department: "",
        municipality: "",
        address: "",
        email: "",
        gender: "",
        bloodGroup: "",
        rh: "",
        processType: "",
        entityHealth: "",
        regime: "",
        service: "",
        authorizationNumber: "",
        specialty: "",
        customHealthEntity: "",
        cancellationDate: "",
        reschedulingDate: ""
      },
      documentTypes: [],
      departments: [],
      municipalities: [],
      entityHealth: [],
      regimeOptions: [],
      specialty: [],
      service: [],
      ordenMedicaPreview: null,
      autorizacionEpsPreview: null,
      showForm: false,
      showConfirmationModal: false,
    };
  },

  mounted() {
    this.fetchDocumentTypes();
    this.fetchDepartments();
    this.fetchHealthEntities();
    this.fetchRegime();
    this.fetchSpecialty();
    this.fetchService();
  },

  watch: {
    'form.department': function (newDepartment) {
      if (newDepartment) {
        this.fetchMunicipalities(newDepartment);
      } else {
        this.municipalities = [];
      }
    }
  },

  methods: {
    async fetchDocumentTypes() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/patient/document-types");
        this.documentTypes = response.data;
      } catch (error) {
        console.error("Error al cargar los tipos de documento:", error);
      }
    },

    async fetchDepartments() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/departments");
        this.departments = response.data;
      } catch (error) {
        console.error("Error al cargar los departamentos:", error);
      }
    },

    async fetchMunicipalities(departmentId) {
      try {
        console.log("Consultando municipios para departmentId:", departmentId);
        const response = await axios.get(
          `http://127.0.0.1:8000/api/municipalities`,
          { params: { department_id: departmentId } }
        );
        console.log("Respuesta del servidor:", response.data);
        this.municipalities = response.data;
      } catch (error) {
        console.error("Error al cargar los municipios:", error.response || error);
        this.municipalities = [];
      }
    },

    // Nuevo método para cargar las entidades de salud
    async fetchHealthEntities() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/health-entities");
        // Transformamos los datos al formato que necesita el select (value/label)
        this.entityHealth = response.data.map(item => ({
          value: item.id,
          label: item.name
        }));
      } catch (error) {
        console.error("Error al cargar las entidades de salud:", error);
        this.entityHealth = [];
      }
    },

    async fetchRegime() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/regime");
        console.log("Datos de régimen recibidos:", response.data); // ← Agrega esto
        this.regimeOptions = response.data.map(item => ({
          value: item.id,
          label: item.name
        }));
      } catch (error) {
        console.error("Error al cargar los regímenes:", error.response || error);
        this.regimeOptions = [];
      }
    },

    async fetchSpecialty() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/especialidad");
        console.log("Datos de régimen recibidos:", response.data); // ← Agrega esto
        this.specialty = response.data.map(item => ({
          value: item.id,
          label: item.name
        }));
      } catch (error) {
        console.error("Error al cargar los regímenes:", error.response || error);
        this.speciality = [];
      }
    },


    async fetchService() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/service");
        console.log("Datos de régimen recibidos:", response.data); // ← Agrega esto
        this.service = response.data.map(item => ({
          value: item.id,
          label: item.name
        }));
      } catch (error) {
        console.error("Error al cargar los regímenes:", error.response || error);
        this.service = [];
      }
    },


    resetFormFields() {
      // Guardamos los valores del documento que no queremos resetear
      const { documentType, document } = this.form;

      // Reseteamos el objeto form manteniendo tipo y número de documento
      this.form = {
        documentType,
        document,
        firstName: '',
        secondName: '',
        firstLastName: '',
        secondLastName: '',
        birthday: '',
        phone: '',
        secondPhone: '',
        department: '',
        municipality: '',
        address: '',
        email: '',
        gender: '',
        bloodGroup: '',
        rh: '',
      };

      // También puedes resetear las vistas previas de imágenes si las tienes
      this.ordenMedicaPreview = null;
      this.autorizacionEpsPreview = null;
    },

    // Método para mostrar formulario vacío
    async mostrarFormulario() {
      if (!this.form.documentType || !this.form.document) {
        alert('Por favor, seleccione el tipo e ingrese el número de documento.');
        return;
      }

      try {
        // Resetear campos del formulario
        this.resetFormFields();

        // Mostrar formulario vacío
        this.showForm = true;

      } catch (error) {
        console.error('Error al mostrar formulario:', error);
        alert('Ocurrió un error al preparar el formulario. Intente nuevamente.');
      }
    },

    // Método para buscar paciente
    async buscarPaciente() {
      if (!this.form.documentType || !this.form.document) {
        alert('Por favor, seleccione el tipo e ingrese el número de documento.');
        return;
      }

      try {
        // Resetear campos antes de nueva búsqueda
        this.resetFormFields();

        const url = `http://127.0.0.1:8000/api/patient/buscar/${this.form.document}`;
        const response = await axios.get(url);

        if (!response.data) {
          throw new Error('Paciente no encontrado');
        }


        this.form.firstName = response.data.firstName || '';
        this.form.secondName = response.data.secondName || '';
        this.form.firstLastName = response.data.firstLastName || '';
        this.form.secondLastName = response.data.secondLastName || '';
        this.form.birthday = response.data.birthday || '';
        this.form.phone = response.data.phone || '';
        this.form.gender = response.data.gender || '';
        this.form.bloodGroup = response.data.bloodGroup || '';
        this.form.rh = response.data.rh || ''

        // Mostrar el formulario con los datos cargados
        this.showForm = true;

      } catch (error) {
        console.error('Error al buscar el paciente:', error);
        this.manejarErrorBusqueda(error);
      }
    },

    // Método auxiliar para manejar errores
    manejarErrorBusqueda(error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert('Paciente no encontrado. Verifique el número de documento.');
        } else {
          alert(`Error del servidor: ${error.response.status}`);
        }
      } else {
        alert('Error de conexión. Verifique su red e intente nuevamente.');
      }
    },

    async submitForm() {
      // Validación básica
      if (!this.form.documentType || !this.form.document) {
        alert('Tipo y número de documento son obligatorios');
        return;
      }

      try {
        // Preparar datos (convertir tipos y evitar nulls)
        const formData = {
          documentType: this.form.documentType,
          document: this.form.document,
          firstName: this.form.firstName || "",
          secondName: this.form.secondName || "",
          firstLastName: this.form.firstLastName || "",
          secondLastName: this.form.secondLastName || "",
          birthday: this.form.birthday || null, // Asegúrate de que el formato sea YYYY-MM-DD
          phone: this.form.phone || "",
          secondPhone: this.form.secondPhone || "",
          department: Number(this.form.department), // Si es ID
          municipality: Number(this.form.municipality), // Si es ID
          address: this.form.address || "",
          email: this.form.email || "",
          gender: this.form.gender || "",
          bloodGroup: this.form.bloodGroup || "",
          rh: this.form.rh || "",
          processType: this.form.processType || "",
          entityHealth: Number(this.form.entityHealth), // Si es ID
          regime: Number(this.form.regime), // Si es ID
          service: Number(this.form.service), // Si es ID
          authorizationNumber: this.form.authorizationNumber || "",

          specialty: this.form.specialty.toString(), // Asegurar que sea string


          customHealthEntity: this.form.customHealthEntity || "",
          cancellationDate: this.form.cancellationDate || null,
          reschedulingDate: this.form.reschedulingDate || null
        };

        console.log('Datos a enviar:', formData);


        const response = await axios.post(
          'http://127.0.0.1:8000/api/patient/new',
          formData,
          { headers: { 'Content-Type': 'application/json' } }
        );

        if (response.status === 201) {
          alert('¡Paciente registrado!');
          this.resetForm();
        }
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        alert(`Error: ${error.response?.data?.message || 'Verifica la consola'}`);
      }
    },


    // Método para manejar la subida de la orden médica
    handleOrdenMedicaUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.ordenMedicaPreview = URL.createObjectURL(file);
      }
    },

    // Método para manejar la subida de la autorización EPS
    handleAutorizacionEpsUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.autorizacionEpsPreview = URL.createObjectURL(file);
      }
    },

    resetForm() {
      this.form = {
        documentType: "",
        document: "",
        firstName: "",
        secondName: "",
        firstLastName: "",
        secondLastName: "",
        birthday: "",
        phone: "",
        secondPhone: "",
        department: "",
        municipality: "",
        address: "",
        email: "",
        gender: "",
        bloodGroup: "",
        rh: "",
        processType: "",
        entityHealth: "",
        regime: "",
        service: "",
        authorizationNumber: "",
        specialty: "",
        customHealthEntity: "",
        cancellationDate: "",
        reschedulingDate: ""
      };
      this.municipalities = [];
    }
  }
};
</script>


<style scoped>
.form-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}


.highlight {
  color: #0066cc;
}

.section {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
}

.section h2 {
  margin-top: 0;
  color: #333;
  font-size: 18px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.form-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.form-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #666;
  font-size: 14px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

select.form-control {
  background-color: #fff;
}

textarea.form-control {
  resize: vertical;
  min-height: 100px;
}

.btn-refresh {
  background: #666;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 5px;
}

.submit-btn {
  background: #003366 !important;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  margin-top: 20px;
}

.submit-btn:hover {
  background: #3157c7;
}
</style>