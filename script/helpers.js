(function init() {
    if(localStorage.getItem("loggedIn") === "true") {
        let user = document.getElementById('user'); 
        let guest = document.getElementById('guest');
        let username = document.getElementById('username');
        guest.style.display = "none";
        user.style.display = "block";
        username.innerHTML = localStorage.getItem('username');
    } 
})();

function validateEmail(newEmail) {
    let email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return email.test(String(newEmail).toLowerCase());
}

function checkEmail(newEmail) {
    let res = validateEmail(newEmail);
    if (!res) {
        messages.push("E-Mail invalid!");
    }
}

function validatePassword(password) {

    if (password == "") {
        messages.push("Password field is empty!");
    }

    if (password.length < 8) {
        messages.push("There must be at least 8 characters!");
    }

    if (password.search(/[A-Z]/) < 0) {
        messages.push("There must be at least one upper-case character!");
    }

    if (password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0) {
        messages.push("There must be at least one special character!");
    }
}


function checkPassword(password_1, password_2) {
    if (password_1 !== password_2) {
        messages.push("You must confirm your password!");
    }
}

function login(user) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", user.username);
    location.reload();
}

function logOut() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    location.reload();
}