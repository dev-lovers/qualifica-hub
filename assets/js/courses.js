/**
 * courses.js
 * Responsável por renderizar cards de cursos e gerenciar busca + filtro por categoria.
 * Ambos os controles atuam sobre o mesmo conjunto de dados de forma combinada.
 */

function renderCourses(list) {
  const container = document.getElementById("coursesContainer");
  if (!container) return;

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML =
      '<p class="empty-state" role="status">Nenhum curso encontrado. Tente outros termos ou categorias.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((course) => {
    const card = document.createElement("article");
    card.classList.add("course-card");
    card.innerHTML = `
      <span class="category-badge">${course.category}</span>
      <h3>${course.name}</h3>
      <div class="course-details">
        <p><strong>Plataforma:</strong> ${course.platform}</p>
        <p><strong>Carga horária:</strong> ${course.workload}</p>
      </div>
      <a href="${course.link}" target="_blank" rel="noopener noreferrer"
         aria-label="Acessar o curso ${course.name} na plataforma ${course.platform}">
        Acessar curso
      </a>
    `;
    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

function getFilteredCourses() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  const term = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const category = categoryFilter ? categoryFilter.value : "";

  return courses.filter((course) => {
    const matchesSearch =
      term === "" || course.name.toLowerCase().includes(term);
    const matchesCategory = category === "" || course.category === category;
    return matchesSearch && matchesCategory;
  });
}

function attachSearchAndFilter() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderCourses(getFilteredCourses());
    });
  }

  if (categoryFilter) {
    categoryFilter.addEventListener("change", () => {
      renderCourses(getFilteredCourses());
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCourses(courses);
  attachSearchAndFilter();
});
