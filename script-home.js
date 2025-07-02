// =============================
// Script Página de Inicio (Home)
// =============================

// Efecto de typing en el subtítulo
const typingSubtitle = document.getElementById('typing-subtitle');
const typingText = 'Desarrollador Full Stack apasionado por crear soluciones innovadoras';
let typingIndex = 0;
function typeEffect() {
  if (typingSubtitle && typingIndex <= typingText.length) {
    typingSubtitle.textContent = typingText.slice(0, typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 40);
  }
}
window.addEventListener('DOMContentLoaded', () => {
  typingSubtitle.textContent = '';
  typingIndex = 0;
  typeEffect();

  // Animaciones de entrada para hero
  const animElements = document.querySelectorAll('.hero__titulo, .hero__subtitulo, .hero__cta, .hero__tecnologias');
  animElements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('hero__animado');
    }, 400 + i * 200);
  });
});

// Animaciones de entrada para el hero
// (Implementación pendiente) 