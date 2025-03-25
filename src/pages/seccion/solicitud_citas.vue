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
                    <div class="d-grid gap-2">
                      <button type="button" @click="buscarPaciente" class="btn btn-primary">
                        <i class="icofont-search"></i> Continuar
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

                  <div v-if="form.entityHealth === '26'" class="col-12 mb-3">
                    <label>Si selecciono <b>OTRAS</b>, por favor escriba el nombre de la entidad:</label>
                    <input v-model="form.customHealthEntity" type="text" class="form-control border-primary">
                  </div>

                  <div v-if="form.processType === 'Agendar Cita'" class="col-sm-6 col-12 mb-3">
                    <label>Regimen:<span class="text-success">*</span></label>
                    <select v-model="form.regime" class="form-select border-primary" required>
                      <option value="">Seleccione</option>
                      <option v-for="reg in regime" :key="reg.value" :value="reg.value">
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
        appointmentType: "",
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

      ordenMedicaPreview: null,
      autorizacionEpsPreview: null,
      showForm: false,
      showConfirmationModal: false,
    };
  },

  mounted() {
    this.fetchDocumentTypes();
    this.fetchDepartments(); // Cargar departamentos al iniciar
  },

  watch: {
    'form.department': function (newDepartment) {
      if (newDepartment) {
        this.fetchMunicipalities(newDepartment);
      } else {
        this.municipalities = []; // Limpiar municipios cuando no hay departamento
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
    console.log("Consultando municipios para departmentId:", departmentId); // ✅ Verifica el ID
    const response = await axios.get(
      `http://127.0.0.1:8000/api/municipalities`, 
      { params: { department_id: departmentId } }
    );
    console.log("Respuesta del servidor:", response.data); // ✅ Verifica los datos
    this.municipalities = response.data;
  } catch (error) {
    console.error("Error al cargar los municipios:", error.response || error); // ✅ Ver error detallado
    this.municipalities = [];
  }
},

    async buscarPaciente() {
      if (!this.form.document) {
        alert('Por favor, ingrese el número de documento.');
        return;
      }
      try {
        const url = `http://127.0.0.1:8000/api/patient/buscar/${this.form.document}`;
        const response = await axios.get(url);

        const patient = response.data;
        this.form.firstName = patient.firstName;
        this.form.secondName = patient.secondName || '';
        this.form.firstLastName = patient.firstLastName;
        this.form.secondLastName = patient.secondLastName || '';
        this.form.birthday = patient.birthday;
        this.form.gender = patient.gender;
        this.form.bloodGroup = patient.bloodGroup;
        this.form.rh = patient.rh;
        this.showForm = true;
      } catch (error) {
        console.error('Error al buscar el paciente:', error);
        if (error.response && error.response.status === 404) {
          alert('Paciente no encontrado. Verifique el número de documento.');
        } else {
          alert('Hubo un error al buscar el paciente. Intente nuevamente.');
        }
      }
    },

    async submitForm() {
      if (!this.form.processType) {
        alert('Por favor, seleccione un tipo de trámite.');
        return;
      }

      try {
        let url = 'http://127.0.0.1:8000/api/patient/new';
        let postData = { ...this.form };

        if (this.form.processType === 'Agendar Cita') {
          postData = { ...postData, cancellationDate: null, reschedulingDate: null };
        } else if (this.form.processType === 'Cancelar Cita') {
          postData.reschedulingDate = null;
          if (!this.form.cancellationDate) {
            alert('Por favor, ingrese la fecha de cancelación.');
            return;
          }
        } else if (this.form.processType === 'Reprogramar Cita') {
          postData.cancellationDate = null;
          if (!this.form.reschedulingDate) {
            alert('Por favor, ingrese la fecha de reprogramación.');
            return;
          }
        }

        const response = await axios.post(url, postData, {
          headers: { 'Content-Type': 'application/json' },
        });

        console.log('Respuesta del servidor:', response.data);
        this.resetForm();
        alert('Solicitud enviada con éxito');
      } catch (error) {
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al enviar la solicitud');
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
        appointmentType: "",
        service: "",
        authorizationNumber: "",
        specialty: "",
        customHealthEntity: "",
        cancellationDate: "",
        reschedulingDate: ""
      };
      this.municipalities = []; // Limpiar municipios al resetear el formulario
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