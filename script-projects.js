// =============================
// Script Página de Proyectos
// =============================

// Filtros por tecnología o categoría
// (Implementación pendiente)

// Modal para detalles de proyecto
const modal = document.getElementById('projects-modal');
const modalDetalle = modal ? modal.querySelector('.projects__modal-detalle') : null;
const modalCerrar = modal ? modal.querySelector('.projects__modal-cerrar') : null;

function abrirModalProyecto(contenido) {
  if (modal && modalDetalle) {
    modalDetalle.innerHTML = contenido;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
}
function cerrarModalProyecto() {
  if (modal) {
    modal.hidden = true;
    document.body.style.overflow = '';
  }
}
if (modalCerrar) {
  modalCerrar.addEventListener('click', cerrarModalProyecto);
}
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModalProyecto();
  });
}
// Demo: abrir modal con info básica al hacer clic en cualquier enlace Demo/Código
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.projects__enlace').forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault();
      const card = enlace.closest('.projects__card');
      if (card) {
        const titulo = card.querySelector('.projects__titulo').textContent;
        const desc = card.querySelector('p').textContent;
        abrirModalProyecto(`<h2>${titulo}</h2><p>${desc}</p><p><em>Más detalles próximamente...</em></p>`);
      }
    });
  });
}); 