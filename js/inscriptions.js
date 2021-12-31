$('.body').fadeIn(1000);

class Course {
     constructor(courseName, teacher, duration) {
        this.courseName = courseName;
        this.teacher = teacher;
        this.duration = duration;
    }

    fullQuotas() {
        console.log('Sin cupo disponible: ', this.courseName, this.teacher, this.duration);
    }

    availableQuotas() {
        console.log('Cursos disponible: ', this.courseName, this.teacher, this.duration);
    }
}

const course1 = new Course('Diseño Web con Wordpress', 'Camila Letter', 'Tres (3) meses.');
course1.fullQuotas();

const course2 = new Course('Realización Audiovisual con Adobe Premiere', 'Abril Flo', 'Tres (3) meses.');
course2.availableQuotas();

class RegisteredStudent {
    constructor(name, surname, email, activeCourse) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.activeCourse = activeCourse;
    }
}

const users = [];
users.push(new RegisteredStudent('Federico', 'Pérez', 'email@a.com', course1.courseName));
users.push(new RegisteredStudent('Karina', 'Weri', 'email2@a.com', course1.courseName));
users.push(new RegisteredStudent('Martina', 'Roth', 'email3@a.com', course1.courseName));

function welcomeCard(name, courseInscription, element) {
    const hello = document.createElement('div');
    hello.className = "card m-2 p-3 welcomeCard";
    hello.innerHTML = `<h2>¡Hola ${name}!</h2>
    <h3>Se registró tu inscripción en ${courseInscription}.</h3>`;
    
    element.appendChild(hello);
}

const saveToLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

const loadButton = document.getElementById('btnInscription');

function showCard(event) {
    event.preventDefault();
    const inputName = document.getElementById('inputName');
    const inputSurname = document.getElementById('inputSurname');
    const inputEmail = document.getElementById('inputEmail');
    const inputDni = document.getElementById('inputDni');
    const inputCourse = document.getElementById('inputCourse');
    const divWelcomeInscription = document.getElementById('divWelcomeInscription');

    if (inputName.value === '' || inputSurname.value === '' || inputEmail.value === '' || inputDni.value === '') {
        const formTwo = document.getElementById('formInscription');
        event.preventDefault();
        const alerta = document.createElement('div');
        alerta.className = "alert alert-danger";
        alerta.id = "conditional";
        alerta.innerHTML = `<p>*Todos los campos son obligatorios.</p>`;
        formTwo.appendChild(alerta);
        $('html, body').animate({
            scrollTop: $("#conditional").offset().top  
        }, 100);
    } else {
        welcomeCard(inputName.value, inputCourse.value, divWelcomeInscription);

        users.push(new RegisteredStudent(inputName.value, inputSurname.value, inputEmail.value, inputCourse.value));

        saveToLocalStorage('listaUsers', JSON.stringify(users));
        let listUsers = localStorage.getItem('listaUsers');
        console.log('Listado de inscriptos/as: ', listUsers);
        $('html, body').animate({
            scrollTop: $("#divWelcomeInscription").offset().top  
        }, 100);
    }
}

loadButton.addEventListener('click', showCard);

const bttnComments = $('#bttnComments');

$('#bttnComments').on('click', (e) => {
    $.getJSON('../json/comment.json',(respuesta, status) => {
        if (status === 'success') {
            respuesta.forEach((alumno) => {
                $('body').append(`<div id="cardsComments" class="card">
                <div class="card-header">
                    ${alumno.nombre}
                </div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>${alumno.comment}</p>
                    <footer class="blockquote-footer">Puntuación <cite title="Source Title">${alumno.puntuacion}</cite></footer>
                  </blockquote>
                </div>
              </div>
              `);
            })
            $('html, body').animate({
                scrollTop: $("#cardsComments").offset().top  
            }, 100);
        }
    });
});