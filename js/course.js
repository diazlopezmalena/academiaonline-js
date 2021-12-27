if (sesions) {
    $('.mainCourse').fadeIn(1000);
} else {
    const unlogin = document.createElement('div');
    unlogin.className = "loginCourseCard";
    unlogin.innerHTML = `<h2 id="h2Unlogin">Ups! <span>Debes iniciar sesión para ver este curso.</span></h2>
                       <a href="../pages/login.html"><button>Iniciar sesión 🚀</button></a>
                       `;
    document.body.appendChild(unlogin);
}