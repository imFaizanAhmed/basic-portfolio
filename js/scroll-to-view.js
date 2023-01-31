const projectButton = document.getElementById("project-button");
const contactButton = document.getElementById("contact-button");
const journeyButton = document.getElementById("journey-button");
const scrollButton = document.getElementById("scroll-button");

const projectSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
const timelineSection = document.getElementById("timeline");

journeyButton.addEventListener("click", function () {
  timelineSection.scrollIntoView({ behavior: "smooth" });
});

scrollButton.addEventListener("click", function () {
  timelineSection.scrollIntoView({ behavior: "smooth" });
});

projectButton.addEventListener("click", function () {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

contactButton.addEventListener("click", function () {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
