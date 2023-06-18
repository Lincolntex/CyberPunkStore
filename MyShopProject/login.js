const ADMIN_USER_NAME = "Admin01";
const ADMIN_PASSWORD = "Admin01";

window.onload = function () {
    let loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", login);
}

function login (event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const uName = data.get("uname");
    const pasw = data.get("psw");
    console.log(uName, pasw);
    if(ADMIN_USER_NAME === uName && ADMIN_PASSWORD === pasw) {
        // window.localStorage.setItem("loggedIn", "1" )
        // console.log(window.location.href); //http://127.0.0.1:5500/MyShopProject/details.html?
        let pathSegments = window.location.href.split("/")
        console.log(pathSegments[pathSegments.length - 1]);
        pathSegments[pathSegments.length - 1] = "details.html";
        window.location.href = (pathSegments.join('/'));
    }
    else {
        let inst = document.getElementById("instructions");
        inst.innerHTML = "Username or Password incorrect"

    }
}



