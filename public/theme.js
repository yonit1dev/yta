(() => {
  const storageKey = "theme";
  const root = document.documentElement;
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

  const getSavedTheme = () => {
    try {
      const savedTheme = window.localStorage.getItem(storageKey);
      return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
    } catch {
      return null;
    }
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;

    const themeColor = document.querySelector("[data-theme-color]");
    themeColor?.setAttribute("content", theme === "light" ? "#f3efe7" : "#10100f");

    const toggle = document.querySelector("[data-theme-toggle]");
    if (toggle instanceof HTMLButtonElement) {
      const isLight = theme === "light";
      const label = isLight ? "Use dark theme" : "Use light theme";
      toggle.hidden = false;
      toggle.setAttribute("aria-label", label);
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.title = label;
    }
  };

  const preferredTheme = () => getSavedTheme() ?? (systemPreference.matches ? "dark" : "light");

  applyTheme(preferredTheme());

  const initializeToggle = () => {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!(toggle instanceof HTMLButtonElement)) return;

    applyTheme(preferredTheme());

    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // The selected theme still applies for this page when storage is unavailable.
      }

      applyTheme(nextTheme);
    });

    systemPreference.addEventListener("change", () => {
      if (!getSavedTheme()) applyTheme(preferredTheme());
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeToggle, { once: true });
  } else {
    initializeToggle();
  }
})();
