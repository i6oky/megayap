const modal = document.getElementById("passwordModal");
const btn = document.getElementById("open-password-popup");
const span = document.getElementsByClassName("close")[0];
const submitBtn = document.getElementById("submit-password");
const correctPassword = "oishiishibainu69"; // Set your password

// Open the modal when the Go to Note button is clicked
btn.onclick = function () {
  modal.style.display = "block";
};

// Close the modal when the X button is clicked
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Password submission and validation
submitBtn.onclick = function () {
  const password = document.getElementById("password").value;
  if (password === correctPassword) {
    // Store a flag in localStorage indicating the user is authenticated
    localStorage.setItem("auth", "true");
    // Redirect to note.html
    window.location.href = "note.html";
  } else {
    // Show an alert if the password is incorrect
    alert("Incorrect password, please try again.");
  }
};
