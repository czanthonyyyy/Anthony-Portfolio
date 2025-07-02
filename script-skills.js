// =============================
// Script Página de Habilidades
// =============================

// Animación de barras de progreso
function animarBarrasProgreso() {
  const barras = document.querySelectorAll('.skills__progreso-barra');
  barras.forEach(barra => {
    const valor = barra.getAttribute('data-valor');
    barra.style.width = valor + '%';
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const seccionSkills = document.querySelector('.skills');
  if (seccionSkills) {
    const observer = new window.IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animarBarrasProgreso();
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(seccionSkills);
  }
}); 