const tarjetas = document.querySelectorAll('.info-tarjeta, .conocimientos-tarjeta, .proyectos-tarjeta, .contacto-tarjeta');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('mostrar');
      observador.unobserve(entrada.target); 
    }
  });
}, { 
  threshold: 0.15
});

tarjetas.forEach(tarjeta => {
  tarjeta.classList.add('oculta');
  observador.observe(tarjeta);
});