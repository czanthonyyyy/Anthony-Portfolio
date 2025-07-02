// =============================
// Script Página de Contacto
// =============================

// Validación de formulario en tiempo real y envío simulado
const form = document.getElementById('contact-form');
const mensaje = document.getElementById('form-mensaje');

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener('input', e => {
    const target = e.target;
    if (target.classList.contains('contact__input') || target.classList.contains('contact__textarea')) {
      target.classList.remove('input-error');
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valido = true;
    const nombre = form.nombre;
    const email = form.email;
    const mensajeCampo = form.mensaje;
    // Validación básica
    if (!nombre.value.trim()) {
      nombre.classList.add('input-error');
      valido = false;
    }
    if (!validarEmail(email.value)) {
      email.classList.add('input-error');
      valido = false;
    }
    if (!mensajeCampo.value.trim()) {
      mensajeCampo.classList.add('input-error');
      valido = false;
    }
    if (!valido) {
      mostrarMensaje('Por favor, completa los campos obligatorios correctamente.', false);
      return;
    }
    // Simulación de envío
    form.querySelector('button[type="submit"]').disabled = true;
    mostrarMensaje('Enviando mensaje...', true);
    setTimeout(() => {
      mostrarMensaje('¡Mensaje enviado con éxito! Te responderé pronto.', true);
      form.reset();
      form.querySelector('button[type="submit"]').disabled = false;
    }, 1500);
  });
}

function mostrarMensaje(texto, exito) {
  if (mensaje) {
    mensaje.textContent = texto;
    mensaje.style.display = 'block';
    mensaje.style.color = exito ? '#88B796' : '#e74c3c';
    setTimeout(() => { mensaje.style.display = 'none'; }, exito ? 3000 : 4000);
  }
}

// Animaciones en campos al enfocar
const campos = document.querySelectorAll('.contact__input, .contact__textarea');
campos.forEach(campo => {
  campo.addEventListener('focus', () => campo.classList.add('input-focus'));
  campo.addEventListener('blur', () => campo.classList.remove('input-focus'));
});

// Animaciones en los campos del formulario
// (Implementación pendiente) 