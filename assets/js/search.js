document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");

  if (!input) return;

  input.addEventListener("keyup", () => {
    const term = input.value.toLowerCase().trim();

    const results = courses.filter((course) =>
      course.name.toLowerCase().includes(term)
    );

    renderCourses(results);
  });
});