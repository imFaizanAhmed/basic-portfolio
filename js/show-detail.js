function toggleDetails(element) {
    var details = element.getElementsByClassName("details")[0];
    if (details.classList.contains("open")) {
      details.classList.remove("open");
    } else {
      details.classList.add("open");
    }
  }