const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Alternar entre login y registro
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// Mostrar popup de login
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

// Cerrar popup
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// Manejar login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Validación simple (en producción usar autenticación real)
    if(email && password) {
        // Guardar en localStorage que el usuario está logueado
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirigir a la página principal
        window.location.href = '/main.html';
    } else {
        alert('Por favor ingresa email y contraseña');
    }
});

// Manejar registro
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    
    if(username && email && password) {
        alert('Registro exitoso! Ahora puedes iniciar sesión');
        wrapper.classList.remove('active');
    } else {
        alert('Por favor completa todos los campos');
    }
});