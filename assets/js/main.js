/**
 * main.js
 * Carrega os componentes de header e footer via fetch e marca o link
 * ativo na navegação com base na URL atual.
 *
 * Correção GitHub Pages: base path calculado via pathname para suportar
 * subdiretórios (ex: /qualifica-hub/) sem quebrar o ambiente local.
 */

async function loadComponent(elementId, filePath, base) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP ${response.status} — ${filePath}`);
    const html = (await response.text()).replaceAll("{{BASE}}", base);
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error("Falha ao carregar componente:", error);
  }
}

function markActiveNavLink() {
  const currentPath = window.location.pathname;

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    const isHome =
      (linkPath === "/" || linkPath.endsWith("/index.html")) &&
      (currentPath === "/" ||
        currentPath.endsWith("/index.html") ||
        currentPath.endsWith("/qualifica-hub/"));

    const isActive =
      isHome ||
      (linkPath !== "/" && currentPath.endsWith(linkPath.split("/").pop()));

    if (isActive) {
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const isInPagesFolder = window.location.pathname.includes("/pages/");
  const base = isInPagesFolder ? "../" : "./";

  await Promise.all([
    loadComponent("header", `${base}components/header.html`, base),
    loadComponent("footer", `${base}components/footer.html`, base),
  ]);

  markActiveNavLink();

  // Inicializa o hambúrguer após o header ser injetado no DOM
  initNavToggle();
});

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("nav-menu--open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("nav-menu--open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}
