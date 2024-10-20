function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function onScroll() {
  const elements = document.querySelectorAll(".container"); // select all containers
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible"); // add the visible class when in view
    }
  });
}

// listen for scroll events
window.addEventListener("scroll", onScroll);

function onScroll2() {
  const elements = document.querySelectorAll(".container2"); // select all containers
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible"); // add the visible class when in view
    }
  });
}

// listen for scroll events
window.addEventListener("scroll", onScroll2);
