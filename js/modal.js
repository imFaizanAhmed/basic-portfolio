const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");
const mainBody = document.getElementById("main-body");

closeModal.addEventListener("click", function () {
  modal.style.visibility = "hidden";
  if (mainBody.classList.contains("filter-element")) {
    mainBody.classList.remove("filter-element");
  }
});
