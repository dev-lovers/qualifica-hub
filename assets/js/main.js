document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "../components/header.html");
  loadComponent("footer", "../components/footer.html");
});

function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    });
}
