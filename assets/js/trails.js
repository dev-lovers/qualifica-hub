document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("trailsContainer");

  if (!container) return;

  const trails = {
    Programação: ["Introdução ao HTML"],
    "Primeiro Emprego": ["Excel Básico"],
    Idiomas: ["Inglês para Iniciantes"],
  };

  for (const trail in trails) {
    const section = document.createElement("div");

    section.classList.add("trail");

    const title = document.createElement("h2");

    title.textContent = trail;

    section.appendChild(title);

    const list = document.createElement("ul");

    trails[trail].forEach((courseName) => {
      const li = document.createElement("li");

      li.textContent = courseName;

      list.appendChild(li);
    });

    section.appendChild(list);

    container.appendChild(section);
  }
});
