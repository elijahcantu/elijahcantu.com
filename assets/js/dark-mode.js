document.addEventListener("DOMContentLoaded", () => {
  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");
  const themeButton = document.getElementById("theme-button");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const socialIcons = document.querySelectorAll(".social");



  let theme = prefersDarkScheme.matches ? "dark" : "light";
  applyTheme(theme);

  themeButton.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
  });

  function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");
    document.body.classList.toggle("light-mode", theme === "light");
    sunIcon.style.display = theme === "dark" ? "block" : "none";
    moonIcon.style.display = theme === "dark" ? "none" : "block";
    socialIcons.forEach(icon => {
        icon.style.fill = theme === "dark" ? "white" : "black";
    });
 
  }
});
