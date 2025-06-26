document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('battle-anim');
            // Sonido retro opcional
            // const audio = new Audio('battle-sound.mp3');
            // audio.volume = 0.2;
            // audio.play();
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('battle-anim');
        });
    });
}); 