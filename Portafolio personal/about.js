document.addEventListener('DOMContentLoaded', function() {
    const sprites = document.querySelectorAll('.decor-sprite');
    sprites.forEach((sprite, i) => {
        sprite.style.opacity = 0;
        setTimeout(() => {
            sprite.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
            sprite.style.opacity = 1;
        }, 600 + i * 400);
    });
    // Sonido retro opcional
    // const audio = new Audio('about-sound.mp3');
    // audio.volume = 0.2;
    // audio.play();
}); 