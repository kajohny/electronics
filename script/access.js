if(localStorage.getItem('loggedIn') != 'true') {
    let currentUrl = location.href;
    let lastSlashIndex = currentUrl.lastIndexOf("/");
    let loginUrl = currentUrl.substr(0, lastSlashIndex) + "/login.html";
    location.href = loginUrl;
}