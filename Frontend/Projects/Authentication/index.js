const users = JSON.parse(localStorage.getItem("users")) || [];

// To manipulate HTML elements
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

// Display dashboard if the user is logged in
function showView(view) {
  document.getElementById("signup").style.display =
    view === "signup" ? "block" : "none";
  document.getElementById("login").style.display =
    view === "login" ? "block" : "none";
  document.getElementById("dashboard").style.display =
    view === "dashboard" ? "block" : "none";
}

// Show view

// Add events
signupBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", login);
logoutBtn.addEventListener("click", logout);

function signUp() {
  const username = document.getElementById("username").value;
  const useremail = document.getElementById("useremail").value;
  const userpassword = document.getElementById("userepassword").value;

  const newUser = {
    name: username,
    email: useremail,
    password: userpassword,
  };

  // Check if user already exists
  const userExists = users.find((user) => user.name === username);
  if (userExists) {
    alert("Username already exists. Please choose a different one.");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! You can now log in.");
  showView("login");

  // document.getElementById("username").value = "";
  // document.getElementById("useremail").value = "";
  // document.getElementById("userepassword").value = "";
}

// login
function login() {
  const useremail = document.getElementById("useremail").value;
  const userpassword = document.getElementById("userepassword").value;

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUsers.find(
    (user) => user.email === useremail && user.password === userpassword
  );

  if (user) {
    const loggedUser = localStorage.setItem("loggedUser", JSON.stringify(user));
    alert("Login successful!");
    showDashboard();
  } else {
    alert("Invalid credentials");
  }

  // document.getElementById("useremail").value = "";
  // document.getElementById("userepassword").value = "";
}

// Show dashboard with a welcome message
function showDashboard() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  document.getElementById(
    "usernameDisplay"
  ).innerText = `Hey ${user.name} welcome !!`;
  showView("dashboard");
}

// Logout function
function logout() {
  localStorage.removeItem("loggedUser");
  alert("You've successfully logged out !!");
  showView("signup");
}
