window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });