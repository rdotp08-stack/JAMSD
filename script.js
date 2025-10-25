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

// === ZOOM TO FIT 1920x1080 ===
function scaleToFit() {
  const baseWidth = 1920;
  const baseHeight = 1080;
  const scaleWrapper = document.querySelector('.scale-wrapper');
  const fixedLayout = document.querySelector('.fixed-layout');

  const scaleX = window.innerWidth / baseWidth;
  const scaleY = window.innerHeight / baseHeight;
  const scale = Math.min(scaleX, scaleY);

  fixedLayout.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', scaleToFit);
window.addEventListener('load', scaleToFit);
