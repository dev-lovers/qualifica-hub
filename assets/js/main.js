document.addEventListener("DOMContentLoaded", () => {
  const isInsidePagesFolder = window.location.pathname.includes('/pages/');
  const basePath = isInsidePagesFolder ? '../' : './';

  loadComponent("header", `${basePath}components/header.html`);
  loadComponent("footer", `${basePath}components/footer.html`);
});

async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} ao carregar ${filePath}`);
    }
    const data = await response.text();
    document.getElementById(elementId).innerHTML = data;
  } catch (error) {
    console.error("Falha ao carregar o componente:", error);
  }
}