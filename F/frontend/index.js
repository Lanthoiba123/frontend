const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});


async function handleLogin(e) {
  e.preventDefault();
  try {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const response = await fetch('http://localhost:8500/api/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });
      const result = await response.json();
      if(response){
        window.location.href = './SportHackathon/home/index.html'
      }
  } catch (error) {
      console.log("Error:", error);
  }
}
async function handleSignUp(e) {
  e.preventDefault();
  try {

      const username = document.getElementById('username').value;
      const address = document.getElementById('address').value;
      const pincode = document.getElementById('pincode').value;
      const interest = document.getElementById('interest').value;
      const email = document.getElementById('sEmail').value;
      const password = document.getElementById('sPassword').value;
      const response = await fetch('http://localhost:8500/api/auth/create', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({username, address, pincode,interest, email, password })
      });
      if(response){
        // window.location.href = ''
      }
  } catch (error) {
      console.log("Error:", error);
  }
}

document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('signupForm').addEventListener('submit', handleSignUp);
