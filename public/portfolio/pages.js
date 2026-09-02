const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") document.documentElement.classList.add("dark");
toggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
});
