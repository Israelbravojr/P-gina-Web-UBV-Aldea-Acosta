document.querySelectorAll('.semester-title').forEach(title => {
    title.addEventListener('click', toggleSubjects);
    title.addEventListener('touchstart', toggleSubjects); // Evento para dispositivos móviles
});

function toggleSubjects(event) {
    const semester = event.currentTarget.parentElement;
    const subjectList = semester.querySelector('.subject-list');
    
    // Alterna la clase 'active' para expandir o colapsar el semestre
    semester.classList.toggle('active');
    
    // Ajusta la altura máxima para mostrar o colapsar la lista
    if (subjectList.style.maxHeight) {
        subjectList.style.maxHeight = null; // Colapsa la lista
    } else {
        subjectList.style.maxHeight = subjectList.scrollHeight + "px"; // Despliega la lista
    }
}
