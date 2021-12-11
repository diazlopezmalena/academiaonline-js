class Course {
     constructor(courseName, teacher, duration) {
        this.courseName = courseName;
        this.teacher = teacher;
        this.duration = duration;
    }

    //Cupos completos
    fullQuotas() {
        console.log('Sin cupo disponible: ', this.courseName, this.teacher, this.duration);
    }

    //Cupos disponibles
    availableQuotas() {
        console.log('Cursos disponible: ', this.courseName, this.teacher, this.duration);
    }
}

const course1 = new Course('Diseño Web con Wordpress', 'Camila Letter', 'Tres (3) meses.');
course1.fullQuotas();

const course2 = new Course('Realización Audiovisual con Adobe Premiere', 'Abril Flo', 'Tres (3) meses.');
course2.availableQuotas();

//Alumno registrado
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

const divWelcomeInscription = document.getElementById('divWelcomeInscription');
const inputName = document.getElementById('inputName');
const inputSurname = document.getElementById('inputSurname');
const inputEmail = document.getElementById('inputEmail');
const inputDni = document.getElementById('inputDni');
const inputCourse = document.getElementById('inputCourse');
const loadButton = document.getElementById('btnInscription');

function welcomeCard(name, courseInscription, element) {
    const hello = document.createElement('div');
    hello.className = "card m-2 p-3 colorText";
    hello.innerHTML = `<h2>¡Hola ${name}!</h2>
    <h3>Se registró tu inscripción en ${courseInscription}.</h3>`;
    
    element.appendChild(hello);
}

const saveToLocalStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

function showCard(event) {
    event.preventDefault();
    const inputNameValue = inputName.value;
    const inputCourseValue = inputCourse.value;

    welcomeCard(inputNameValue, inputCourseValue, divWelcomeInscription);

    users.push(new RegisteredStudent(inputName.value, inputSurname.value, inputEmail.value, inputCourse.value));

    saveToLocalStorage('listaUsers', JSON.stringify(users));
    let listUsers = localStorage.getItem('listaUsers');
    console.log('Listado de inscriptos/as: ', listUsers);
    
}

loadButton.addEventListener('click', showCard);