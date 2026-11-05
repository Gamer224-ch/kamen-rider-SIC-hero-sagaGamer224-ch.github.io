/* ============================================================
   Kamen Rider S.I.C. — Modo oscuro / claro
   ============================================================ */

const STORAGE_THEME = "kr-sic-theme";

function getTheme() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_THEME); } catch (e) { /* ignore */ }
  if (saved === "dark" || saved === "light") return saved;
  // Respetar preferencia del sistema
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  // Actualizar iconos y etiquetas de los botones de tema
  document.querySelectorAll("[data-theme-btn]").forEach(function (btn) {
    const iconLight = btn.querySelector(".icon-light");
    const iconDark = btn.querySelector(".icon-dark");
    if (theme === "dark") {
      if (iconLight) iconLight.classList.remove("hidden");
      if (iconDark) iconDark.classList.add("hidden");
      btn.setAttribute("aria-label", (I18N && I18N.es) ? I18N.es["theme.light"] : "Cambiar a modo claro");
    } else {
      if (iconLight) iconLight.classList.add("hidden");
      if (iconDark) iconDark.classList.remove("hidden");
      btn.setAttribute("aria-label", (I18N && I18N.es) ? I18N.es["theme.dark"] : "Cambiar a modo oscuro");
    }
  });
}

function toggleTheme() {
  const current = getTheme();
  const next = current === "dark" ? "light" : "dark";
  try { localStorage.setItem(STORAGE_THEME, next); } catch (e) { /* ignore */ }
  applyTheme(next);
}

function initTheme() {
  applyTheme(getTheme());
}
