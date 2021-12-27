$('.body').fadeIn(1000);

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
        alert2.innerHTML = `<p>El email no corresponde a un usuario registrado. Usa el usuario de prueba "email@a.com" para ver un ejemplo de curso.</p>`;
        form.appendChild(alert2);
    }
}

function closeSessionFn() {
    localStorage.clear();
    location.reload();
}

if (sesions) {
    const login = document.createElement('div');
    login.innerHTML = `<h2 id="h2Login">¡Hola! <span>Has iniciado sesión con tu usuario: ${sesions}</span></h2>
                       <div class="loginCourseCard">
                       <h3>Curso Introductorio</h3>
                       <p>Conocerás cómo utilizar la plataforma educativa online y cuáles son las modalidades de cursada, permanencia y acreditación en la Academia E-learning.</p>
                       <a href="../pages/course.html"><button>Ir al curso 🚀</button></a>
                       </div>`;
    document.body.appendChild(login);

    const mainLogin = document.getElementById('mainLogin');
    document.body.removeChild(mainLogin);
    const closeSession = document.createElement('div');
    closeSession.innerHTML = `<button class="btn btn-light closeSesion">Cerrar sesión</button>`;
    document.body.appendChild(closeSession);
    closeSession.addEventListener('click', closeSessionFn);
} 