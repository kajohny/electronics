let form = document.getElementById('form');
let messages = [];
let errorMessages = document.getElementById('error-message');
$.ajaxSetup({async:false});

form.onsubmit = function (event) {
	messages = [];
	errorMessages.innerHTML = "";
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	let post = checkAuth(email, password);
	if (!messages.length) {
		login(post);
		alert('Login successfully!');
	} else {
		errorMessages.innerHTML = messages.join("<br>");
	}
}


function checkAuth(email, password) {
	let post;
	$.get("http://localhost:3000/posts", function (response) {
		let posts = response;
		post = posts.find(el => email === el.email && password === el.password);
		if (!post) {
			messages.push("E-mail or password incorrect!");
		}
	});
	return post;
}