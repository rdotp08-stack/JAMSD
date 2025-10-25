// === LOGIN ===
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (username === "admin" && password === "12345") {
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Invalid username or password.";
  }
}

// === LOGOUT ===
function logout() {
  window.location.href = "index.html";
}

// === Navigation ===
function goToQRAS() {
  window.location.href = "attendance.html";
}

// === Scale to Fit ===
function scaleToFit() {
  const baseWidth = 1920;
  const baseHeight = 1080;
  const layout = document.querySelector(".fixed-layout");
  if (!layout) return;

  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY);

  layout.style.transform = `scale(${scale}) translate(-50%, -50%)`;
  layout.style.position = "absolute";
  layout.style.left = "50%";
  layout.style.top = "50%";
}

window.addEventListener("resize", scaleToFit);
window.addEventListener("load", scaleToFit);
