document.addEventListener("DOMContentLoaded", () => {
  if (typeof courses !== "undefined") {
    renderCourses(courses);
  }
});

function renderCourses(list) {
  const container = document.getElementById("coursesContainer");

  if (!container) return;

  container.innerHTML = "";

  list.forEach((course) => {
    const card = document.createElement("div");

    card.classList.add("course-card");

    card.innerHTML = `
      <h3>${course.name}</h3>
      <p>${course.platform}</p>
      <p>${course.workload}</p>
      <a href="${course.link}" target="_blank">Acessar curso</a>
    `;

    container.appendChild(card);
  });
}
