const uni = "These courses help me grow in my field.";
const universityDiv = document.getElementById("university");
const loadmore = document.getElementById("uni-loadmore");
let intervalId, clearIntervalId;

let ind = 0;
function typeMoreContent() {
  if (ind < uni.length) {
    loadmore.textContent += uni[ind];
    ind++;
  } else {
    ind--;
    clearInterval(intervalId);
  }
}
function clearMoreContent() {
  if (ind >= 0) {
    loadmore.textContent = uni.substring(0, ind - 1);
    ind--;
  } else {
    ind++;
    if (universityDiv.classList.contains("overflow-visible-card")) {
      universityDiv.classList.remove("overflow-visible-card");
      universityDiv.classList.add("overflow-card");
    }
    clearInterval(clearIntervalId);
  }
}

universityDiv.addEventListener("mouseenter", function () {
  clearInterval(clearIntervalId);
  intervalId = setInterval(typeMoreContent, 100);
  if (universityDiv.classList.contains("overflow-card")) {
    universityDiv.classList.remove("overflow-card");
    universityDiv.classList.add("overflow-visible-card");
  }
});

universityDiv.addEventListener("mouseleave", function () {
  clearInterval(intervalId);
  clearIntervalId = setInterval(clearMoreContent, 100);
});
