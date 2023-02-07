const chi = "I did my BS(CS). I studied multiple courses including";
const chiDiv = document.getElementById("chi");
const chiLoadmore = document.getElementById("chi-loadmore");
let chiIntervalId, chiClearIntervalId;

let chiInd = 0;
function chiTypeMoreContent() {
  if (chiInd < chi.length) {
    chiLoadmore.textContent += chi[chiInd];
    chiInd++;
  } else {
    chiInd--;
    clearInterval(chiIntervalId);
  }
}
function chiClearMoreContent() {
  if (chiInd >= 0) {
    chiLoadmore.textContent = chi.substring(0, chiInd - 1);
    chiInd--;
  } else {
    chiInd++;
    if (chiDiv.classList.contains("overflow-visible-card")) {
      chiDiv.classList.remove("overflow-visible-card");
      chiDiv.classList.add("overflow-card");
    }
    clearInterval(chiClearIntervalId);
  }
}

chiDiv.addEventListener("mouseenter", function () {
  clearInterval(chiClearIntervalId);
  chiIntervalId = setInterval(chiTypeMoreContent, 100);
  if (chiDiv.classList.contains("overflow-card")) {
    chiDiv.classList.remove("overflow-card");
    chiDiv.classList.add("overflow-visible-card");
  }
});

chiDiv.addEventListener("mouseleave", function () {
  clearInterval(chiIntervalId);
  chiClearIntervalId = setInterval(chiClearMoreContent, 100);
});
