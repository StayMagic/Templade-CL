<template>
    <div>
        <!-- Header -->
        <div id="app">
            <header class="main-header">
                <div class="container">
                    <div class="logo">
                        <img src="/src/assets/logo.png" alt="Logo Clínica" />
                    </div>
                    <nav>
                        <ul :class="['menu', { visible: mobileMenuOpen }]">
                            <li>
                                <router-link to="/" :class="{ active: $route.path === '/' }" @click="closeMenu">
                                    Inicio
                                </router-link>
                            </li>
                            <li class="dropdown">
                                <button @click="toggleDropdown" class="dropdown-button">
                                    Servicios
                                </button>
                                <ul :class="['dropdown-menu', { visible: dropdownOpen }]">
                                    <li>
                                        <router-link to="/services/apoyo"
                                            :class="{ active: $route.path === '/services/apoyo' }" @click="closeMenu">
                                            Apoyo Diagnóstico
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/services/consulta"
                                            :class="{ active: $route.path === '/services/consulta' }" @click="closeMenu">
                                            Consulta Externa
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/services/cirugia"
                                            :class="{ active: $route.path === '/services/cirugia' }" @click="closeMenu">
                                            Cirugía
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/services/urgencia"
                                            :class="{ active: $route.path === '/services/urgencia' }" @click="closeMenu">
                                            Urgencias
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/services/internacion"
                                            :class="{ active: $route.path === '/services/internacion' }" @click="closeMenu">
                                            Internación
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <button @click="toggleClinicDropdown" class="dropdown-button">
                                    Nuestra Clínica
                                </button>
                                <ul :class="['dropdown-menu', { visible: clinicDropdownOpen }]">
                                    <li>
                                        <router-link to="/otras-opciones/pqrs"
                                            :class="{ active: $route.path === '/otras-opciones/pqrs' }" @click="closeMenu">
                                            PQRS
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/otras-opciones/estado"
                                            :class="{ active: $route.path === '/otras-opciones/estado' }" @click="closeMenu">
                                            Estados Financieros
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/otras-opciones/politicas"
                                            :class="{ active: $route.path === '/otras-opciones/politicas' }" @click="closeMenu">
                                            Política de Tratamientos de Datos
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <button @click="togglePatientInfoDropdown" class="dropdown-button">
                                    Inf Paciente Familia
                                </button>
                                <ul :class="['dropdown-menu', { visible: patientInfoDropdownOpen }]">
                                    <li>
                                        <router-link to="/inf_paciente_familia/acompanante"
                                            :class="{ active: $route.path === '/inf_paciente_familia/acompanante' }" @click="closeMenu">
                                            Acompañante
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/inf_paciente_familia/deberes"
                                            :class="{ active: $route.path === '/inf_paciente_familia/deberes' }" @click="closeMenu">
                                            Derechos y Deberes del Paciente
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/inf_paciente_familia/educacion"
                                            :class="{ active: $route.path === '/inf_paciente_familia/educacion' }" @click="closeMenu">
                                            Educacion
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/inf_paciente_familia/informacion"
                                            :class="{ active: $route.path === '/inf_paciente_familia/informacion' }" @click="closeMenu">
                                            Informacion
                                        </router-link>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li>
                                <router-link to="/conocenos" :class="{ active: $route.path === '/conocenos' }" @click="closeMenu">
                                    Nosotros
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/contactanos" :class="{ active: $route.path === '/contactanos' }" @click="closeMenu">
                                    Contacto
                                </router-link>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=573174336098&text&type=phone_number&app_absent=0"
                                    target="_blank" class="whatsapp-button" @click="closeMenu">
                                    <img src="" alt="WhatsApp" class="whatsapp-icon" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button class="menu-toggle" @click="toggleMobileMenu">
                        <span class="hamburger"></span>
                    </button>
                </div>
            </header>
        </div>

        <!-- Contenido dinámico -->
        <main>
            <router-view></router-view>
        </main>

        <!-- Footer -->
        <footer class="footer">
            <header>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                    rel="stylesheet" />
            </header>
            <div class="container">
                <div class="footer-top">
                    <div class="footer-logo">
                        <img src="/src/assets/logo.png" alt="Logo" />
                    </div>

                    <div class="footer-categories">
                        <h3>Categorías</h3>
                        <ul>
                            <li>
                                <router-link to="/">Servicios</router-link>
                            </li>
                            <li>
                                <router-link to="/conocenos">Quiénes Somos</router-link>
                            </li>
                            <li>
                                <router-link to="/contactanos">Contacto</router-link>
                            </li>
                            <li>
                                <router-link to="/preguntas">Preguntas</router-link>
                            </li>
                            <li>
                                <router-link to="/otras-opciones/seguridad">Seguridad</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-contact">
                        <h3>Contacto</h3>
                        <p>
                            Correo: <a
                                href="mailto:segl@clinicadeespecialistasgirardot.com">segl@clinicadeespecialistasgirardot.com</a>
                        </p>
                        <p>Número: (1) 7943221</p>
                        <p>Direccion: Cl. 13 #1049, Girardot, Cundinamarca
                        </p>
                    </div>

                    <div class="footer-social">
                        <h3>Síguenos</h3>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/p/Sociedad-de-Especialistas-Girardot-SAS-100057502057195/"
                                target="_blank" class="social-icon">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>&copy; 2025 Sociedad de Especialistas Girardot. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
      clinicDropdownOpen: false,
      patientInfoDropdownOpen: false,
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      this.clinicDropdownOpen = false;
      this.patientInfoDropdownOpen = false;
    },
    toggleClinicDropdown() {
      this.clinicDropdownOpen = !this.clinicDropdownOpen;
      this.dropdownOpen = false;
      this.patientInfoDropdownOpen = false;
    },
    togglePatientInfoDropdown() {
      this.patientInfoDropdownOpen = !this.patientInfoDropdownOpen;
      this.dropdownOpen = false;
      this.clinicDropdownOpen = false;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    
    closeAllDropdowns() {
      this.dropdownOpen = false;
      this.clinicDropdownOpen = false;
      this.patientInfoDropdownOpen = false;
    },
    
    // Nuevo método para cerrar todo el menú (desplegables y menú móvil)
    closeMenu() {
      this.closeAllDropdowns();
      this.mobileMenuOpen = false;
    },

    handleClickOutside(event) {
      const dropdowns = document.querySelectorAll('.dropdown-menu');
      const buttons = document.querySelectorAll('.dropdown-button');
      const mobileMenu = document.querySelector('.menu-toggle');

      let isClickInside = false;

      dropdowns.forEach((dropdown) => {
        if (dropdown.contains(event.target)) {
          isClickInside = true;
        }
      });

      buttons.forEach((button) => {
        if (button.contains(event.target)) {
          isClickInside = true;
        }
      });

      if (mobileMenu && mobileMenu.contains(event.target)) {
        isClickInside = true;
      }

      if (!isClickInside) {
        this.closeAllDropdowns();
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    
    // Añadimos un listener para el evento de cambio de ruta
    this.$router.afterEach(() => {
      // Cerrar menús al cambiar de ruta
      this.closeMenu();
    });
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style scoped>
.whatsapp-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

.whatsapp-icon {
    width: 30px;
    height: 30px;
    margin-left: 0.5rem;
}

.whatsapp-button:hover {
    color: #25d366;
}

body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main-header {
    background: rgba(1, 57, 112, 0.616);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.main-header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.logo img {
    max-height: 50px;
    width: auto;
}

.menu {
    list-style: none;
    display: flex;
    gap: 2rem;
    padding: 0;
    margin: 0;
    align-items: center;
    transition: transform 0.3s ease;
}

.menu li {
    position: relative;
}

.dropdown-button {
    background: none;
    border: none;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-align: left;
}

.dropdown-button:hover {
    border-bottom: 2px solid #235979;
}

.menu a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    transition: color 0.3s ease, border-bottom 0.3s ease;
}

.menu a:hover,
.menu a.active {
    border-bottom: 2px solid #235979;
}

button {
    font-size: 13px;
}

.dropdown-menu {
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(1, 57, 112, 0.616);
    backdrop-filter: blur(10px);
    margin: 0;
    padding: 0.5rem 0;
    display: none;
    z-index: 1000;
    min-width: 200px;
    border-radius: 5px;
}

.dropdown-menu.visible {
    display: block;
}

a {
    font-size: 14px;
}

.dropdown-menu li {
    border-bottom: 1px solid #e0e0e0;
}

.dropdown-menu li:last-child {
    border-bottom: none;
}

.dropdown-menu a {
    display: block;
    padding: 0.75rem 1rem;
    color: #ffffff;
    text-decoration: none;
}

.dropdown-menu a:hover {
    background: #003366;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

.hamburger {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #ffffff;
    position: relative;
}

.hamburger::before,
.hamburger::after {
    content: '';
    display: block;
    width: 25px;
    height: 3px;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    transition: 0.3s ease;
}

.hamburger::before {
    top: -8px;
}

.hamburger::after {
    top: 8px;
}

@media (max-width: 768px) {
    .menu {
        display: none;
        flex-direction: column;
        gap: 1rem;
        background: rgba(0, 51, 102, 0.9);
        padding: 1rem;
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        transform: translateY(-100%);
    }

    .menu.visible {
        display: flex;
        transform: translateY(0);
    }

    .menu-toggle {
        display: block;
    }
}



.footer {
    background-color: #003366;
    color: #fff;
    padding: 40px 0;
    font-family: 'Arial', sans-serif;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

.footer-logo img {
    width: 150px;
}

.footer-categories,
.footer-contact,
.footer-social {
    flex: 1;
    min-width: 200px;
    margin-left: 20px;
}

.footer-categories h3,
.footer-contact h3,
.footer-social h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.footer-categories ul {
    list-style: none;
    padding: 0;
}

.footer-categories ul li {
    margin-bottom: 10px;
}

.footer-categories ul li a {
    color: #ccc;
    text-decoration: none;
}

.footer-categories ul li a:hover {
    color: #fff;
}

.footer-contact p {
    font-size: 16px;
}

.footer-social .social-icons {
    display: flex;
    gap: 15px;
}

.footer-social .social-icon {
    display: inline-block;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    background-color: rgb(1, 38, 82);
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.footer-social .social-icon:hover {
    background-color: #072b52;
}

.footer-bottom {
    text-align: center;
    font-size: 14px;
    border-top: 1px solid #555;
    padding-top: 15px;
    margin-top: 30px;
}

.footer-bottom p {
    margin: 0;
}


@media (max-width: 768px) {
    .footer-top {
        flex-direction: column;
        align-items: center;
    }

    .footer-categories,
    .footer-contact,
    .footer-social {
        text-align: center;
        margin-left: 0;
    }

    .footer-logo img {
        margin-bottom: 20px;
    }

    .footer-bottom {
        margin-top: 40px;
    }
}
</style>