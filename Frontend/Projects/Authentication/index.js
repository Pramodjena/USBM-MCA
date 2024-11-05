const users = JSON.parse(localStorage.getItem("users")) || [];

// To manipulate HTML elements
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");

// Display dashboard if the user is logged in

// Show view

// Add events
signupBtn.addEventListener("click", signUp);
loginBtn.addEventListener("click", login);

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
  console.log(newUser);
}

// login

// Show dashboard with a welcome message

// Logout function
