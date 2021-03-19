form.onsubmit = function (event) {
  messages = [];
  let errorMessages = document.getElementById('error-message');
  errorMessages.innerHTML = "";
  event.preventDefault();
  let password2 = document.getElementById('password2').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  checkEmail(email);
  validatePassword(password);
  checkPassword(password, password2);
  if (!messages.length) {
    sendForm();
  } else {
    errorMessages.innerHTML = messages.join("<br>");
  }
}

function sendForm() {
  var http = new XMLHttpRequest();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let username = document.getElementById('username').value;
  http.open("POST", 'http://localhost:3000/posts', true);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  var form_str = JSON.stringify({
    "email": email,
    "username": username,
    "password": password
  });
  http.send(form_str);

  http.onload = () => {
    if (http.status == 201) {
      console.log(form_str);
      console.log(this.response);
      alert("Success!");
      let currentUrl = location.href;
      let lastSlashIndex = currentUrl.lastIndexOf("/");
      let loginUrl = currentUrl.substr(0, lastSlashIndex) + "/login.html";
      location.href = loginUrl;
    }
  }
}