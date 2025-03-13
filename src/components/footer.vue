<template>
  <footer class="footer">
    <header>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    </header>
    <div class="container">
      <div class="footer-top">
        <div class="footer-logo">
          <img src="/src/assets/logo.png" alt="Logo" />
        </div>

        <div class="footer-categories">
          <h3>Categorías</h3>
          <ul>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/about">Quiénes Somos</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h3>Contacto</h3>
          <p>Correo: <a href="mailto:contacto@empresa.com">segl@clinicadeespecialistasgirardot.com</a></p>
          <p>Numero: (1) 7943221</p>
        </div>

        <div class="footer-social">
          <h3>Síguenos</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/p/Sociedad-de-Especialistas-Girardot-SAS-100057502057195/"
              class="social-icon"><i class="fa-brands fa-facebook"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 Sociedad de Especialistas Girardot. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
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