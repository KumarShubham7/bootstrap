function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email) && password.length >= 6) {
    const modal = new bootstrap.Modal(document.getElementById('loginModal'));
    modal.show();
  } else {
    alert("Please enter a valid email and password (min 6 characters).");
  }
}

function redirectToLanding() {
  window.location.href = "landing.html";
}
