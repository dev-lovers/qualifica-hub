document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("categoryFilter");

  if (!filter) return;

  filter.addEventListener("change", () => {
    const value = filter.value;

    if (value === "") {
      renderCourses(courses);
      return;
    }

    const filtered = courses.filter((c) => c.category === value);

    renderCourses(filtered);
  });
});
