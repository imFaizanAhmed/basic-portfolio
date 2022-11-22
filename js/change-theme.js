const themeIconDiv = document.querySelector(".theme-icon");
if (!theme) {
  const theme = document.body;
}
const themeIcon = document.getElementById("theme-icon");
themeIconDiv.addEventListener("click", function () {
  if (theme.classList.contains("light-theme")) {
    theme.classList.remove("light-theme");
    theme.classList.add("dark-theme");
    themeIcon.src = "/img/moon-icon.svg";
  } else if (theme.classList.contains("dark-theme")) {
    theme.classList.remove("dark-theme");
    theme.classList.add("light-theme");
    themeIcon.src = "/img/sun-black.svg";
  }
});
