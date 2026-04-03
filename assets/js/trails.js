/**
 * trails.js
 * Renderiza as trilhas de aprendizagem a partir de trailsMeta e courses (data.js).
 * Cada trilha exibe os cursos vinculados com link direto para a plataforma.
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("trailsContainer");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  trailsMeta.forEach((trail) => {
    const trailCourses = courses.filter((c) => c.trails.includes(trail.label));

    const section = document.createElement("section");
    section.classList.add("trail-card");
    section.setAttribute("aria-labelledby", `trail-${trail.id}`);

    const header = document.createElement("div");
    header.classList.add("trail-header");

    const title = document.createElement("h2");
    title.id = `trail-${trail.id}`;
    title.textContent = trail.label;

    const desc = document.createElement("p");
    desc.classList.add("trail-description");
    desc.textContent = trail.description;

    header.appendChild(title);
    header.appendChild(desc);
    section.appendChild(header);

    if (trailCourses.length === 0) {
      const empty = document.createElement("p");
      empty.classList.add("trail-empty");
      empty.textContent =
        "Nenhum curso disponível para esta trilha no momento.";
      section.appendChild(empty);
    } else {
      const list = document.createElement("ol");
      list.classList.add("trail-list");

      trailCourses.forEach((course) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="trail-course">
            <div class="trail-course-info">
              <span class="trail-course-name">${course.name}</span>
              <span class="trail-course-meta">${course.platform} · ${course.workload}</span>
            </div>
            <a href="${course.link}" target="_blank" rel="noopener noreferrer"
               aria-label="Acessar ${course.name}">
              Acessar
            </a>
          </div>
        `;
        list.appendChild(li);
      });

      section.appendChild(list);
    }

    fragment.appendChild(section);
  });

  container.appendChild(fragment);
});
