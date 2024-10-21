// Function to add the 'visible' class after the page loads
window.onload = function () {
  const containers = document.querySelectorAll(".container, .container2");
  containers.forEach((container) => {
    setTimeout(() => {
      container.classList.add("visible");
    }, 100); // Adjust the delay as needed
  });
};
