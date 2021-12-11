
$(document).ready(function(){
    const bttnIndexCourses = $('#bttnIndexCourses');
    const mainHome = $('.mainHome');

    class Course {
        constructor(courseName, teacher, duration, description) {
           this.courseName = courseName;
           this.teacher = teacher;
           this.duration = duration;
           this.description = description;
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
   
    const course1 = new Course('Diseño Web con Wordpress', 'Camila Letter', 'Tres (3) meses.', 'Luego de este curso sabrás hacer sitios webs dinámicos y totalmente responsives con Wordpress.org y prestigiosos plugins gratuitos.');
    course1.fullQuotas();

    const course2 = new Course('Realización Audiovisual con Adobe Premiere', 'Rocío Gutierrez', 'Tres (3) meses.', 'Aprenderás a realizar producciones audiovisuales que lucirán profesionales con las herramientas más actualizadas de Adobe Premiere.');
    course2.availableQuotas();

    function populateAvaibleCourses(teacher, duration, description) { 
        return `
        <li>${teacher}</li>
        <li>${duration}</li>
        <li>${description}</li>
        `
    }

    function availableCourses(courses, element) {
        $(element).append(`<div class="card m-2 p-3 colorText">
        <h2>${courses.courseName}</h2>
        <ul>${populateAvaibleCourses(courses.teacher, courses.duration, courses.description)}</ul>
        </div>`
        );
    }

    bttnIndexCourses.click((e) => {
        e.preventDefault();
        availableCourses(course1, mainHome);
        availableCourses(course2, mainHome);
    });
});

