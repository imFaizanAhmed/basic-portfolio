// ! deprecated

// const numu = "I did my BS(CS). I studied multiple courses including";
// const numuDiv = document.getElementById("numu");
// const numuLoadmore = document.getElementById("numu-loadmore");
// let numuIntervalId, numuClearIntervalId;

// let numuInd = 0;
// function numuTypeMoreContent() {
//   if (numuInd < numu.length) {
//     numuLoadmore.textContent += numu[numuInd];
//     numuInd++;
//   } else {
//     numuInd--;
//     clearInterval(numuIntervalId);
//   }
// }
// function numuClearMoreContent() {
//   if (numuInd >= 0) {
//     numuLoadmore.textContent = numu.substring(0, numuInd - 1);
//     numuInd--;
//   } else {
//     numuInd++;
//     if (numuDiv.classList.contains("overflow-visible-card")) {
//       numuDiv.classList.remove("overflow-visible-card");
//       numuDiv.classList.add("overflow-card");
//     }
//     clearInterval(numuClearIntervalId);
//   }
// }

// numuDiv.addEventListener("mouseenter", function () {
//   clearInterval(numuClearIntervalId);
//   numuIntervalId = setInterval(numuTypeMoreContent, 100);
//   if (numuDiv.classList.contains("overflow-card")) {
//     numuDiv.classList.remove("overflow-card");
//     numuDiv.classList.add("overflow-visible-card");
//   }
// });

// numuDiv.addEventListener("mouseleave", function () {
//   clearInterval(numuIntervalId);
//   numuClearIntervalId = setInterval(numuClearMoreContent, 100);
// });
