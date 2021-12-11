const form = document.getElementById('formLogin');
let sesions = localStorage.getItem('sesion');


form.onsubmit = (event) => {
    const inputEmailUser = document.getElementById('inputEmailUser');
    let inputEmailUserValue = inputEmailUser.value;

    if((inputEmailUserValue == "email@a.com") || (inputEmailUserValue == "email2@a.com") || (inputEmailUserValue == "email3@a.com")) {
        localStorage.setItem('sesion', inputEmailUser.value);

    } else {
        event.preventDefault();
        const alert2 = document.createElement('div');
        alert2.className = "alert alert-danger";
        alert2.innerHTML = `<p>El email no corresponde a un usuario registrado.</p>`;
        form.appendChild(alert2);
    }
}

function closeSessionFn() {
    localStorage.clear();
    location.reload();
}

if (sesions) {
    const login = document.createElement('div');
    login.innerHTML = `<h2>¡Hola! Has iniciado sesión con tu usuario: ${sesions}.</h2>`;
    document.body.appendChild(login);

    const mainLogin = document.getElementById('mainLogin');
    document.body.removeChild(mainLogin);
    const closeSession = document.createElement('button');
    closeSession.innerHTML = `Cerrar sesión`;
    document.body.appendChild(closeSession);
    closeSession.addEventListener('click', closeSessionFn);
} 