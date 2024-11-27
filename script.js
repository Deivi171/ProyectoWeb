window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.pageYOffset > 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Obtener todos los párrafos
  const paragraphs = document.querySelectorAll('p');

  // Asignar la clase 'loaded' para activar la animación
  paragraphs.forEach((paragraph, index) => {
    setTimeout(() => {
      paragraph.classList.add('loaded');
    }, index * 1000); // Animar cada párrafo con un retraso
  });

  // Alternar las clases 'left' y 'right' dinámicamente
  paragraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) {
      paragraph.classList.add('left');
    } else {
      paragraph.classList.add('right');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  fetch('html_modules/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;
    });
});
document.addEventListener('DOMContentLoaded', () => {
  fetch('html_modules/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-bar-container').innerHTML = data;
    });
});