const aboutButton = document.getElementsByClassName("about-button");
const projectButton = document.getElementsByClassName("project-button");
const contactButton = document.getElementsByClassName("contact-button");
const journeyButton = document.getElementsByClassName("journey-button");
const scrollButton = document.getElementById("scroll-button");
const mainDiv = document.getElementsByClassName("main")[0];
const mobileMenu = document.getElementsByClassName("mobile-menu")[0];
const menuToggle = document.getElementById("menuToggle");
const menuToggleInput = document.getElementById("menuToggleInput");

const introSection = document.getElementById("intro");
const projectSection = document.getElementById("projects");
const contactSection = document.getElementById("contact");
const timelineSection = document.getElementById("timeline");

for (let i = 0; i < aboutButton.length; i++) {
  aboutButton[i].addEventListener("click", function () {
    menuToggleInput.checked = false;
    hiddeMobileMenu();
    introSection.scrollIntoView({ behavior: "smooth" });
  });
}

for (let i = 0; i < journeyButton.length; i++) {
  journeyButton[i].addEventListener("click", function () {
    menuToggleInput.checked = false;
    hiddeMobileMenu();
    timelineSection.scrollIntoView({ behavior: "smooth" });
  });
}

for (let i = 0; i < contactButton.length; i++) {
  contactButton[i].addEventListener("click", function () {
    menuToggleInput.checked = false;
    hiddeMobileMenu();
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
}

for (let i = 0; i < projectButton.length; i++) {
  projectButton[i].addEventListener("click", function () {
    menuToggleInput.checked = false;
    hiddeMobileMenu();
    projectSection.scrollIntoView({ behavior: "smooth" });
  });
}

scrollButton.addEventListener("click", function () {
  timelineSection.scrollIntoView({ behavior: "smooth" });
});

menuToggle.addEventListener("click", function () {
  if (mobileMenu.classList.contains("none")) {
    mainDiv.style.display = "none";
    mobileMenu.classList.remove("none");
    mobileMenu.classList.add("flex");
  } else {
    hiddeMobileMenu();
  }
});

function hiddeMobileMenu() {
  if (mobileMenu.classList.contains("flex")) {
    mainDiv.style.display = "block";
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("none");
  }
}

const directionRight = document.querySelector(".direction-r");
