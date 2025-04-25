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

    
  </div>

  <div class="col-12">
    <div class="pqrs-card">
      <div class="pqrs-header">
        <i class="fas fa-comments"></i>
        Peticiones, Quejas, Reclamos y Solicitudes (PQRS)
      </div>
      <div class="pqrs-body">
        <div class="row">
          <div class="col-12">
            <div class="inner-card">
              <h5 class="card-title">
                <i class="fas fa-question-circle"></i>
                ¿Tienes alguna Petición, Queja, Reclamo o alguna Solicitud?
              </h5>
              <p class="card-text">
                Valoramos su opinión y estamos comprometidos a mejorar constantemente nuestros servicios. 
                Por favor realizar su PQRS al siguiente correo electrónico:
                <a href="mailto:segl@clinicadeespecialistasgirardot.com" class="email-link">
                  <i class="fas fa-envelope"></i> segl@clinicadeespecialistasgirardot.com
                </a>
                y la estaremos atendiendo lo más pronto posible.
              </p>
              <a href="mailto:segl@clinicadeespecialistasgirardot.com" class="contact-button">
                <i class="fas fa-paper-plane"></i> Enviar PQRS
              </a>
              <p class="footer-text">
                Muchas gracias por elegir los servicios de la Clínica De Especialistas Girardot. Su satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </div>
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
/* Variables de colores */
:root {
  --primary-color: #003366;
  --primary-light: #e6eef5;
  --accent-color: #0056b3;
  --white: #ffffff;
  --gray-100: #f9fafb;
  --gray-200: #d1d5db;
  --gray-600: #4b5563;
  --gray-700: #374151;
}

/* Estilos generales */
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-100);
  padding: 2rem;
}

/* Estilos del encabezado */
.section-header {
  background-color: #003366;
  color: white;
  padding: 40px 217px;
  text-align: center;
  width: 95%;
  border-radius: 8px 8px 0 0;
}

.header-title {
  font-size: 2.5rem;
  color: white; 
  font-weight: bold;
  margin-bottom: 1rem;
}

.header-description {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* Estilos del formulario */
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
  background: var(--white);
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
  color: var(--gray-700);
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  font-size: 1rem;
  color: var(--gray-700);
  background: var(--white);
}

.form-input:focus {
  border-color: #003366;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 51, 102, 0.5);
}

.form-note {
  font-size: 0.85rem;
  color: var(--gray-600);
  margin-top: 0.5rem;
}

.form-checkbox {
  margin-right: 10px;
  accent-color: #003366;
}

.form-terms-label {
  font-size: 0.95rem;
  color: var(--gray-700);
}

.form-link {
  color: #003366;
  text-decoration: underline;
}

.form-button {
  background: #003366;
  color: var(--white);
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

/* Estilos de redirección */
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
  color: #084685;
}

/* Estilos del módulo PQRS */
.pqrs-card {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 51, 102, 0.15);
  border: none;
  margin-top: 2rem;
}

.pqrs-header {
  background-color: #003366;
  color: white;
  padding: 15px 20px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
}

.pqrs-header i {
  margin-right: 10px;
  font-size: 22px;
}

.pqrs-body {
  padding: 25px;
  background-color: var(--white);
}

.inner-card {
  border: 1px solid rgba(0, 51, 102, 0.1);
  border-radius: 6px;
  padding: 20px;
  background-color: #e6eef5;
}

.card-title {
  color: #003366;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 600;
}

.card-text {
  color: var(--gray-700);
  line-height: 1.6;
  margin-bottom: 20px;
}

.email-link {
  color: #003366;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

.email-link:hover {
  color: #0056b3;
  text-decoration: underline;
}

.contact-button {
  display: inline-block;
  background-color: #003366;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px;
}

.contact-button:hover {
  background-color: #0056b3;
}

.footer-text {
  font-size: 13px;
  color: var(--gray-600);
  margin-top: 15px;
  font-style: italic;
}

/* Estilos responsive */
@media (max-width: 768px) {
  .section-header {
    padding: 30px 20px;
  }
  
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
  
  .header-title {
    font-size: 2rem;
  }
}
</style>
