document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.skill-item');
    skills.forEach((item, i) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.transition = 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)';
            item.style.opacity = 1;
        }, 400 + i * 200);
    });
    // Sonido retro opcional
    // const audio = new Audio('skills-sound.mp3');
    // audio.volume = 0.2;
    // audio.play();
}); 