function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('error');

  if (username === 'admin' && password === '12345') {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    error.textContent = 'Invalid username or password!';
  }
}

function checkLogin() {
  const loggedIn = localStorage.getItem('loggedIn');
  if (!loggedIn) {
    window.location.href = 'index.html';
  }
}

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}
