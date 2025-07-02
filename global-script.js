// =============================
// Script Global - Anthony Portfolio
// =============================

// Menú hamburguesa para navegación móvil
window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const abierto = menu.classList.toggle('nav__menu--abierto');
      toggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    });
    // Cerrar menú al hacer clic en un enlace
    menu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('nav__menu--abierto');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Smooth scrolling para navegación interna
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      const destino = document.querySelector(this.getAttribute('href'));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Lazy loading de imágenes (fallback para navegadores antiguos)
document.addEventListener('DOMContentLoaded', () => {
  if ('loading' in HTMLImageElement.prototype) return;
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (!img.src) {
      img.src = img.dataset.src;
    }
  });
});

// Animaciones activadas por scroll (Intersection Observer)
// (Implementación pendiente) 