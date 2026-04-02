document.addEventListener("DOMContentLoaded", () => {
  if (typeof courses !== "undefined") {
    renderCourses(courses);
  }
});

function renderCourses(list) {
  const container = document.getElementById("coursesContainer");

  if (!container) return;

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="text-align: center; grid-column: 1 / -1; padding: 40px;">
        <p>Nenhum curso encontrado. Tente buscar por outros termos!</p>
      </div>
    `;
    return;
  }

  list.forEach((course) => {
    const card = document.createElement("article");
    card.classList.add("course-card");

    card.innerHTML = `
      <h3>${course.name}</h3>
      <div class="course-details">
        <p><strong>Plataforma:</strong> ${course.platform}</p>
        <p><strong>Carga Horária:</strong> ${course.workload}</p>
      </div>
      <a href="${course.link}" target="_blank" rel="noopener noreferrer" aria-label="Acessar o curso ${course.name}">
        Acessar curso
      </a>
    `;

    container.appendChild(card);
  });
}