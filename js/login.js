$('body').fadeIn(1000);

const form = document.getElementById('formLogin');
let sesions = localStorage.getItem('sesion');

form.onsubmit = (event) => {
    const inputEmailUser = document.getElementById('inputEmailUser');
    let inputEmailUserValue = inputEmailUser.value;

    users.forEach(element => {
        if(inputEmailUser.value === element.email) {
            localStorage.setItem('sesion', inputEmailUser.value);

        } else {
            event.preventDefault();
            const alert2 = document.createElement('div');
            alert2.className = "alert alert-danger";
            alert2.innerHTML = `<p>El email no corresponde a un usuario registrado. Usa el usuario de prueba "email@a.com" para ver un ejemplo de curso.</p>`;
            form.appendChild(alert2);
        }
    });
}

function closeSessionFn() {
    localStorage.removeItem('sesion');
    location.reload();
}

if (sesions) {
    const login = document.createElement('div');
    login.innerHTML = `<h2 id="h2Login">¡Hola! Has iniciado sesión con tu usuario: ${sesions}.</h2>
                      <p style="color:#fff;">Aquí habrá un curso.</p>`;
    document.body.appendChild(login);

    const mainLogin = document.getElementById('mainLogin');
    document.body.removeChild(mainLogin);
    const closeSession = document.createElement('div');
    closeSession.innerHTML = `<button class="btn btn-light">Cerrar sesión</button>`;
    document.body.appendChild(closeSession);
    closeSession.addEventListener('click', closeSessionFn);
} 