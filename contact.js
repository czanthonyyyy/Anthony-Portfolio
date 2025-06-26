document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.pokedex-form');
    const success = document.getElementById('form-success');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.style.opacity = 0.5;
            setTimeout(() => {
                form.style.display = 'none';
                success.style.display = 'block';
                // Sonido retro opcional
                // const audio = new Audio('success-sound.mp3');
                // audio.volume = 0.2;
                // audio.play();
            }, 600);
        });
    }
}); 