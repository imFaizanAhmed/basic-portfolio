const backendSkills = document.getElementById("backend-skills");
const frontendSkills = document.getElementById("frontend-skills");
const toolsSkills = document.getElementById("tools-skills");
const apisSkills = document.getElementById("apis-skills");

const backend = document.getElementById("backend");
const frontend = document.getElementById("frontend");
const tools = document.getElementById("tools");
const apis = document.getElementById("apis");

backendSkills.classList.add("skills");
backend.addEventListener("click", function () {
  backendSkills.classList.add("skills");
  frontendSkills.classList.remove("skills");
  toolsSkills.classList.remove("skills");
  apisSkills.classList.remove("skills");
});
frontend.addEventListener("click", function () {
  frontendSkills.classList.add("skills");
  backendSkills.classList.remove("skills");
  toolsSkills.classList.remove("skills");
  apisSkills.classList.remove("skills");
});
tools.addEventListener("click", function () {
  toolsSkills.classList.add("skills");
  backendSkills.classList.remove("skills");
  frontendSkills.classList.remove("skills");
  apisSkills.classList.remove("skills");
});
apis.addEventListener("click", function () {
  apisSkills.classList.add("skills");
  backendSkills.classList.remove("skills");
  frontendSkills.classList.remove("skills");
  toolsSkills.classList.remove("skills");
});
