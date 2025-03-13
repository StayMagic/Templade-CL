<template>
  <div class="page-container">
    <header class="section-header">
      <div class="header-content">
        <h1 class="header-title">Peticiones, Quejas, Reclamos y Solicitudes (PQRS)</h1>
        <p class="header-description">Complete el formulario a continuación para enviarnos sus peticiones, quejas,
          reclamos o sugerencias.
        </p>
      </div>
    </header>
    <div class="form-wrapper">
      <div class="form-column">
        <form @submit.prevent="submitForm" class="form">
          <div class="form-group">
            <div class="form-field">
              <label for="name" class="form-label">Nombre Completo</label>
              <input type="text" id="name" v-model="form.name" class="form-input"
                placeholder="Escriba su nombre y apellido" required />
            </div>

            <div class="form-field">
              <label for="phone" class="form-label">Teléfono</label>
              <input type="number" id="phone" v-model="form.phone" class="form-input"
                placeholder="Número de teléfono móvil" required />
            </div>
          </div>

          <div class="form-field">
            <label for="docNumber" class="form-label">Número de Documento</label>
            <input type="text" id="docNumber" v-model="form.docNumber" class="form-input"
              placeholder="Número de identificación" required />
          </div>

          <div class="form-field">
            <label for="docType" class="form-label">Tipo de Documento</label>
            <select id="docType" v-model="form.docType" class="form-input" required>
              <option value="">Seleccione</option>
              <option value="Cédula">C.C-Cédula</option>
              <option value="Pasaporte">PA-Pasaporte</option>
              <option value="Tarjeta de Identidad">T.I-Tarjeta de Identidad</option>
              <option value="Permiso Especial Pertenencia">P.E-Permiso Especial Pertenencia</option>
              <option value="Registro Civil">R.C-Registro Civil</option>
              <option value="NIT">NIT</option>
            </select>
          </div>

          <div class="form-field">
            <label for="address" class="form-label">Dirección de Residencia</label>
            <input type="text" id="address" v-model="form.address" class="form-input" placeholder="Ingrese su dirección"
              required />
          </div>

          <div class="form-field">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input type="email" id="email" v-model="form.email" class="form-input" placeholder="correo@ejemplo.com"
              required />
          </div>

          <div class="form-field">
            <label for="subject" class="form-label">Asunto</label>
            <select id="subject" v-model="form.subject" class="form-input" required>
              <option value="">Seleccione</option>
              <option value="Petición">Petición</option>
              <option value="Queja">Queja</option>
              <option value="Reclamo">Reclamo</option>
              <option value="Sugerencia">Sugerencia</option>
            </select>
          </div>

          <div class="form-field">
            <label for="message" class="form-label">Mensaje</label>
            <textarea id="message" v-model="form.message" rows="4" class="form-input"
              placeholder="Escriba su mensaje aquí..." required></textarea>
          </div>

          <div class="form-field">
            <label for="file" class="form-label">Archivo Adjunto (opcional)</label>
            <input type="file" id="file" class="form-input" @change="handleFileUpload" accept=".pdf" />
            <p class="form-note">Solo formatos PDF. Máximo 5 MB.</p>
          </div>

          <div class="form-field terms">
            <input type="checkbox" id="accept" v-model="form.accept" class="form-checkbox" required />
            <label for="accept" class="form-terms-label">
              Acepto la <a href="#" class="form-link">política de tratamiento de datos personales</a>.
            </label>
          </div>

          <button type="submit" class="form-button">Enviar</button>
        </form>
      </div>
    </div>


    <div class="redirect-container">
      <p>¿No encuentra lo que busca? <a href="/faq" class="redirect-link">Visite nuestra sección de preguntas
          frecuentes</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        docNumber: "",
        docType: "",
        phone: "",
        address: "",
        email: "",
        subject: "",
        message: "",
        accept: false,
        file: null,
      },
    };
  },
  methods: {
    submitForm() {
      alert("Formulario enviado correctamente.");
    },
    handleFileUpload(event) {
      this.form.file = event.target.files[0];
    },
  },
};
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  padding: 2rem;
}


.section-title {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title h1 {
  color: #2563eb;
  font-size: 2.5rem;
  font-weight: bold;
}

.section-description {
  font-size: 1rem;
  color: #4b5563;
  margin-top: 0.5rem;
}

.section-header {
  background-color: #003366;
  color: white;
  padding: 40px 217px;
  text-align: center;
}

.form-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 3rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}


.form-column {
  flex: 1;
  background: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 300px;
}


.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  color: #374151;
  background: #ffffff;
}

.form-input:focus {
  border-color: #003366;
  outline: none;
  box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
}


.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


.redirect-container {
  text-align: center;
  margin-top: 2rem;
}

.redirect-link {
  color: #003366;
  text-decoration: underline;
  font-weight: bold;
}

.redirect-link:hover {
  color: #003366;
}


.form-button {
  background: #003366;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background: #084685;
}


@media (max-width: 768px) {
  .form-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .form-column {
    width: 100%;
  }

  .form-group {
    grid-template-columns: 1fr;
  }
}
</style>
