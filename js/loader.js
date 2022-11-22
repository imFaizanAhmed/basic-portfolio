const loaderDiv = document.getElementById("loader");
const mainDiv = document.querySelector(".main");
const theme = document.body;

setTimeout(() => {
  loaderDiv.style.display = "none";
  mainDiv.style.display = "initial";
}, 3000);
