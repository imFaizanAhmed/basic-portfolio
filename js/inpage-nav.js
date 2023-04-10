const skillCategories = document.getElementsByClassName("categories");
const selectedSkillCategories = document.getElementsByClassName(
  "selected-categories"
);

for (let i = 0; i < skillCategories.length; i++) {
  skillCategories[i].onclick = function () {
    selectedSkillCategories[0].classList.add("categories");
    if (selectedSkillCategories[0].classList.contains("selected-categories"))
      selectedSkillCategories[0].classList.remove("selected-categories");

    if (this.classList.contains("categories"))
      this.classList.remove("categories");
    this.classList.add("selected-categories");
  };
  skillCategories[0].classList.add("selected-categories");
}
