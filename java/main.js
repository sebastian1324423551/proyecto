// Verificar si el usuario está logueado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if(!isLoggedIn || isLoggedIn !== 'true') {
        // Si no está logueado, redirigir al login
        window.location.href = 'index.html';
    }

    // Manejar logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    });
});

const angle = 20;

const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
};

const remap = (value, oldMax, newMax) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
};

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            const rect = card.getBoundingClientRect();
            const centerX = (rect.left + rect.right) / 2;
            const centerY = (rect.top + rect.bottom) / 2;
            const posX = event.clientX - centerX;
            const posY = event.clientY - centerY;
            const x = remap(posX, rect.width / 2, angle);
            const y = remap(posY, rect.height / 2, angle);
            card.dataset.rotateX = x;
            card.dataset.rotateY = -y;
        });
        
        card.addEventListener("mouseout", () => {
            card.dataset.rotateX = 0;
            card.dataset.rotateY = 0;
        });
    });
    
    const update = () => {
        cards.forEach((card) => {
            let currentX = parseFloat(card.style.getPropertyValue('--rotateY')?.slice(0, -1)) || 0;
            let currentY = parseFloat(card.style.getPropertyValue('--rotateX')?.slice(0, -1)) || 0;
            const x = lerp(currentX, card.dataset.rotateX || 0, 0.05);
            const y = lerp(currentY, card.dataset.rotateY || 0, 0.05);
            card.style.setProperty("--rotateY", x + "deg");
            card.style.setProperty("--rotateX", y + "deg");
        });
        requestAnimationFrame(update);
    };
    update();
});

// Carrusel
document.addEventListener("DOMContentLoaded", function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    if(next && prev) {
        next.addEventListener('click', function(){
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        });

        prev.addEventListener('click', function(){
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        });
    }
});