const projectButton = document.getElementById("project-button");
const contactButton = document.getElementById("contact-button");

const projectSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");

projectButton.addEventListener("click", function () {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

contactButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
