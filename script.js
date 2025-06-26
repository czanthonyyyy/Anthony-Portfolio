// Cursor pixel art dinámico
function setCursorOnHover(selector, cursorClass) {
    document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add(cursorClass);
        });
        el.addEventListener('mouseleave', () => {
            document.body.classList.remove(cursorClass);
        });
    });
}

// Animación de entrada tipo batalla Pokémon
function battleEntryAnimation() {
    const overlay = document.createElement('div');
    overlay.className = 'battle-entry-overlay';
    document.body.appendChild(overlay);
    setTimeout(() => {
        overlay.classList.add('fade-out');
        setTimeout(() => overlay.remove(), 900);
    }, 1100);
}

// Pantalla de carga tipo Centro Pokémon (fix)
function hideLoadingScreen() {
    const loading = document.getElementById('loading-screen');
    if (loading) {
        loading.style.opacity = 0;
        setTimeout(() => loading.style.display = 'none', 700);
    }
}
function showLoadingScreen() {
    const loading = document.getElementById('loading-screen');
    if (loading) {
        loading.style.display = 'flex';
        loading.style.opacity = 1;
        setTimeout(hideLoadingScreen, 1200);
    }
}

// Modo día/noche
function setTheme(mode) {
    document.body.classList.remove('theme-day', 'theme-night');
    document.body.classList.add('theme-' + mode);
    localStorage.setItem('theme', mode);
}
function toggleTheme() {
    const current = localStorage.getItem('theme') || 'day';
    setTheme(current === 'day' ? 'night' : 'day');
}
function autoTheme() {
    const hour = new Date().getHours();
    setTheme((hour >= 19 || hour < 7) ? 'night' : 'day');
}

// Easter egg: código Konami
const konami = [38,38,40,40];
let kIndex = 0;
window.addEventListener('keydown', function(e) {
    if (e.keyCode === konami[kIndex]) {
        kIndex++;
        if (kIndex === konami.length) {
            showKonamiEasterEgg();
            kIndex = 0;
        }
    } else {
        kIndex = 0;
    }
});
function showKonamiEasterEgg() {
    const egg = document.createElement('div');
    egg.className = 'konami-egg';
    egg.innerHTML = '<img src="img/mew.png" class="egg-sprite"><span class="egg-msg">¡Has descubierto un secreto! Mew ha aparecido.</span>';
    document.body.appendChild(egg);
    setTimeout(() => egg.remove(), 3500);
}

// Menú Pokédex/PC para redes sociales
function showPokedexMenu() {
    let menu = document.getElementById('pokedex-menu');
    if (!menu) {
        menu = document.createElement('div');
        menu.id = 'pokedex-menu';
        menu.className = 'pokedex-menu';
        menu.innerHTML = `
            <div class='pokedex-header'>
                <img src='img/pokedex-cursor.png' class='pokedex-icon'>
                <span>Redes de Anthony</span>
                <button class='pixel-btn pokedex-close' onclick='document.getElementById("pokedex-menu").remove()'>X</button>
            </div>
            <div class='pokedex-links'>
                <a href='https://github.com/anthonycruz' target='_blank'><img src='img/github.png' class='pokedex-link-icon'> GitHub</a>
                <a href='https://linkedin.com/in/anthonycruz' target='_blank'><img src='img/linkedin.png' class='pokedex-link-icon'> LinkedIn</a>
            </div>
        `;
        document.body.appendChild(menu);
    }
}

// Sistema de sonido retro
const soundConfig = {
    enabled: localStorage.getItem('sound') !== 'off',
    music: null,
};
function playSound(name) {
    if (!soundConfig.enabled) return;
    const audio = new Audio('audio/' + name + '.mp3');
    audio.volume = name === 'bgm' ? 0.15 : 0.3;
    if (name === 'bgm') {
        audio.loop = true;
        if (soundConfig.music) soundConfig.music.pause();
        soundConfig.music = audio;
    }
    audio.play();
}
function toggleSound() {
    soundConfig.enabled = !soundConfig.enabled;
    localStorage.setItem('sound', soundConfig.enabled ? 'on' : 'off');
    if (!soundConfig.enabled && soundConfig.music) soundConfig.music.pause();
    if (soundConfig.enabled) playSound('bgm');
    updateSoundBtn();
}
function updateSoundBtn() {
    let btn = document.getElementById('sound-toggle');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'sound-toggle';
        btn.className = 'pixel-btn sound-toggle';
        btn.title = 'Activar/desactivar sonido';
        btn.innerHTML = '<img src="img/sound-on.png" class="sound-icon">';
        document.body.appendChild(btn);
    }
    btn.onclick = toggleSound;
    btn.innerHTML = soundConfig.enabled ? '<img src="img/sound-on.png" class="sound-icon">' : '<img src="img/sound-off.png" class="sound-icon">';
}

document.addEventListener('DOMContentLoaded', function() {
    showLoadingScreen();
    setCursorOnHover('a, button, .pixel-btn', 'cursor-hand');
    setCursorOnHover('.pixel-bag', 'cursor-bag');
    setCursorOnHover('.pixel-pokedex', 'cursor-pokedex');
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            // Efecto de transición tipo cambio de escena Pokémon
            const introBox = document.querySelector('.intro-box');
            introBox.classList.add('scene-transition');
            setTimeout(() => {
                window.location.href = 'about.html';
            }, 1200);
            // Sonido retro opcional
            const audio = new Audio('start-sound.mp3');
            audio.volume = 0.3;
            audio.play();
        });
    }
    battleEntryAnimation();
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
    else autoTheme();
    // Botón de cambio manual
    let btn = document.getElementById('theme-toggle');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.className = 'pixel-btn theme-toggle';
        btn.innerHTML = '<img src="img/moon.png" class="theme-icon">';
        btn.title = 'Cambiar modo día/noche';
        document.body.appendChild(btn);
    }
    btn.onclick = function() {
        toggleTheme();
        btn.innerHTML = document.body.classList.contains('theme-night') ? '<img src="img/sun.png" class="theme-icon">' : '<img src="img/moon.png" class="theme-icon">';
    };
    btn.innerHTML = document.body.classList.contains('theme-night') ? '<img src="img/sun.png" class="theme-icon">' : '<img src="img/moon.png" class="theme-icon">';

    let pokedexBtn = document.getElementById('pokedex-btn');
    if (!pokedexBtn) {
        pokedexBtn = document.createElement('button');
        pokedexBtn.id = 'pokedex-btn';
        pokedexBtn.className = 'pixel-btn pokedex-float';
        pokedexBtn.innerHTML = '<img src="img/pokedex-cursor.png" class="pokedex-icon">';
        pokedexBtn.title = 'Abrir Pokédex/PC';
        document.body.appendChild(pokedexBtn);
    }
    pokedexBtn.onclick = showPokedexMenu;

    updateSoundBtn();
    if (soundConfig.enabled) playSound('bgm');
    document.querySelectorAll('a, button, .pixel-btn').forEach(el => {
        el.addEventListener('click', () => playSound('click'));
        el.addEventListener('mouseenter', () => playSound('hover'));
    });
});

window.onload = hideLoadingScreen; // Fallback por si DOMContentLoaded es lento
